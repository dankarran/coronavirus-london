let vm = new Vue({
    el: '#app',
    data: data,
    mounted: function() {
        this.initChart('chart');
        this.addSources();
    },
    methods: {

        initChart: function(chartId) {
            console.log('init chart');

            this.ctx = document.getElementById(chartId).getContext('2d');
            this.chart = new Chart(this.ctx, {
                type: data.chartType,
                data: data.chartData,
                options: data.chartOptions,
            });
        },

        addSources: function() {
            console.log('adding sources');

            this.addSource(data.sources.cases, 'cases');
            this.addSource(data.sources.deaths, 'deaths');
            this.addSource(data.sources.events, 'events');

            for (let index in data.sources.other) {
                this.addSource(data.sources.other[index], 'other');
            }
        },

        addSource: function(source, type) {
            console.log('adding source');

            axios.get(source.url)
                .then(function (response) {
                    for (let field in source.fields) {

                        let dataset = {
                            label: source.fields[field].label,
                            data: []
                        };

                        if (source.fields[field].options) {
                            for (let option in source.fields[field].options) {
                                dataset[option] = source.fields[field].options[option];
                            }
                        }

                        let total = 0;
                        for (let date in data.chartData.labels) {
                            let value = null;
                            for (let row in response.data) {
                                if (data.chartData.labels[date] === response.data[row][source.key]) {
                                    value = response.data[row][source.fields[field].name];
                                }
                            }
                            total = total + value;

                            dataset.data.push(value);
                        }

                        // Push to chart
                        let datasetIndex = data.chartData.datasets.push(dataset) - 1;

                        if (type === 'events') {
                            data.eventsIndex = datasetIndex;
                            vm.eventsData = response.data;
                        }
                        else if (type === 'cases') {
                            vm.stats.cases = total;
                        }
                        else if (type === 'deaths') {
                            vm.stats.deaths = total;

                            // Setup the extrapolation dataset
                            vm.extrapolationSourceDataset = dataset;
                            vm.updateExtrapolation();
                        }

                        // Update chart with new data
                        vm.chart.update();
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },

        addExtrapolation: function() {
            console.log('adding extrapolation');

            // Add dataset if not on chart
            if (!this.extrapolationAdded) {
                // TODO: move config to data.js
                let dataset = {
                    label: 'Estimated cases',
                    data: [],
                    backgroundColor: '#8d969e',
                    order: 1
                };
                this.extrapolationIndex = data.chartData.datasets.push(dataset) - 1;
                this.extrapolationAdded = true;
            }
        },

        removeExtrapolation: function() {
            console.log('removing extrapolation');

            if (this.extrapolationAdded) {
                data.chartData.datasets.splice(this.extrapolationIndex, 1);
                this.extrapolationAdded = false;
            }
        },

        updateExtrapolation: function() {
            console.log('updating extrapolation');

            if (this.displayCaseExtrapolation) {
                this.addExtrapolation();
                this.calculateExtrapolation();
            }
            else {
                this.removeExtrapolation();
            }
            vm.chart.update();
        },

        calculateExtrapolation: function() {
            console.log('calculating extrapolation');

            this.extrapolationData = [];
            let total = 0;
            for (let i = 0; i < this.extrapolationSourceDataset.data.length; i++) {
                if (i >= this.delay) {
                    let estimate = parseInt(this.extrapolationSourceDataset.data[i] * 100 / this.fatality);
                    this.extrapolationData.push(estimate);
                    total = total + estimate;
                }
            }

            data.chartData.datasets[this.extrapolationIndex].data = this.extrapolationData;
            data.stats.casesExtrapolated = total;
            data.stats.populationPercent = (total / data.population * 100).toFixed(1);
        }
    }
});