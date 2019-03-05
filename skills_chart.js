var ctx = document.getElementById("myChart").getContext('2d');
        
var data = {
    datasets: [{
        data: [10, 20, 30, 40, 5],
        backgroundColor: ['#053f5e', '#69779b', '#045757', '#c0d0c0', '#556e53']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Java',
        'SQL',
        'JavaScript',
        'Android',
        'Python'
    ]
};

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    // options: options
});