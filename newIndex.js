
new Vue({
    el: '#app',
    data: {
        URL: 'http://localhost:8080',
        num: [],
        name: [],
    },
    mounted: async function() {
        await this.chart();
    },
    methods: {
        getNum: async function() {
            console.log('fetch feito')
            await fetch(`${this.URL}/getNum`)
                .then(res => res.json()
                .then(result => this.num = result))
        },
        
        getName: async function(){
            await fetch(`${this.URL}/getName`)
                .then(res => res.json()
                .then(result => this.name = result))
        },
        chart: async function() {
            await this.getNum();
            await this.getName();
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.name,
                    datasets: [{
                        label: '',
                        data: this.num, 
                        backgroundColor: [
                            '#348feb',
                            '#c22e28',
                            '#ebb134',
                            '#80eb34',
                            '#eb6834',
                            '#00FF7F',
                            '#FF4500',
                            '#9932CC',
                            '#FF7F50',
                            '#DC143C'
                        ],
                        borderColor: [
                            '#348feb',
                            '#c22e28',
                            '#ebb134',
                            '#80eb34',
                            '#eb6834',
                            '#00FF7F',
                            '#FF4500',
                            '#9932CC',
                            '#FF7F50',
                            '#DC143C'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    legend: {
                        display: false
                      },
                    scales: {
                        yAxes: [{
                            gridLines: { display: false },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            })
        },
    }
})



