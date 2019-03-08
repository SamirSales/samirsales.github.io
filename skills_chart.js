var ctx = document.getElementById("myChart").getContext('2d');

var i, j, n, experience, project, tech;
var experiences_length = app._data.experiences.length;
var tech_dictionary = {};
var backgroundColor = ['#002535', '#003851', '#22646e', 'bfd2d9', '#3b89ac', '#003525', '#005138', '#226e64', '#bfd9d2', '#3bac89','#252035', '#382051'];


function setTechDictionary(projects){
    for(j=0; j < projects.length; j++){
        project = projects[j];

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

function resetTechDictionary(){
    tech_dictionary = {};

    for(i = 0; i < experiences_length; i++){
        setTechDictionary(app._data.experiences[i].projects);
    }
    setTechDictionary(app._data.personalProjects);
}

var arrayLabelTech = [];
var arrayValueTech = [];
var someTech;
var TECH_TO_CHART = 12;

function addTermToChart(term){
    arrayValueTech.push(tech_dictionary[term]); 
    arrayLabelTech.push(term); 
}

function resetTechArrayOfLabelAndValue(){
    arrayLabelTech = [];
    arrayValueTech = [];

    for(i=0; i < TECH_TO_CHART; i++){
        someTech = Object.keys(tech_dictionary).reduce(function(a, b){ return tech_dictionary[a] > tech_dictionary[b] ? a : b });
        addTermToChart(someTech);
        delete tech_dictionary[someTech];  
    }
}

resetTechDictionary();
// resetTechArrayOfLabelAndValue();

addTermToChart('Java');
addTermToChart('Android');
addTermToChart('SQLite');
addTermToChart('SpringBoot');
addTermToChart('ReactJS');
addTermToChart('Angular');
addTermToChart('AngularJS');
addTermToChart('PostgreeSQL');
addTermToChart('iOS');      

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