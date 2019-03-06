var ctx = document.getElementById("myChart").getContext('2d');

var i, j, n, experience, project, tech;
var experiences_length = app._data.experiences.length;
var tech_dictionary = {};
var backgroundColor = ['#002535', '#003851', '#22646e', 'bfd2d9', '#3b89ac', '#003525', '#005138', '#226e64', '#bfd9d2', '#3bac89','#252035', '#382051'];

function resetTechDictionary(){
    tech_dictionary = {};

    for(i = 0; i < experiences_length; i++){
        experience = app._data.experiences[i];
    
        for(j=0; j < experience.projects.length; j++){
            project = experience.projects[j];
    
            for(n=0; n < project.technologies.length; n++){
                tech = project.technologies[n];
    
                if(!tech_dictionary[tech]){
                    tech_dictionary[tech] = 1;
                }else{
                    tech_dictionary[tech] += 1;
                }
            }
        }
    }
}

var arrayLabelTech = [];
var arrayValueTech = [];
var someTech;
var TECH_TO_CHART = 12;

function resetTechArrayOfLabelAndValue(){
    arrayLabelTech = [];
    arrayValueTech = [];

    for(i=0; i < TECH_TO_CHART; i++){
        someTech = Object.keys(tech_dictionary).reduce(function(a, b){ return tech_dictionary[a] > tech_dictionary[b] ? a : b });
        arrayValueTech.push(tech_dictionary[someTech]); 
        arrayLabelTech.push(someTech); 
        delete tech_dictionary[someTech];  
    }
}

resetTechDictionary();
resetTechArrayOfLabelAndValue();

console.log('tech_dictionary', tech_dictionary);

var data = {
    datasets: [{
        data: arrayValueTech,
        backgroundColor: backgroundColor
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: arrayLabelTech
};

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    // options: options
});