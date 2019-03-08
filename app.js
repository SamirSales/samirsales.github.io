var app = new Vue({
    el: '#app',
    data: {
        name: 'Samir Sales',
        profession: 'Software Developer',
        contacts: [
            {icon: 'fas fa-envelope', text: 'samir.sribeiro@gmail.com', link: 'mailto:samir.sribeiro@gmail.com'},
            {icon: 'fas fa-globe-americas', text: 'samirsales.github.io', link: 'https://samirsales.github.io/'},
            {icon: 'fab fa-linkedin-in', text: 'LinkedIn', link: 'https://www.linkedin.com/in/samir-sales-916a39a4/'},
            {icon: 'fab fa-github', text: 'GitHub', link: 'https://github.com/SamirSales'},
            {icon: 'fab fa-twitter', text: 'Twitter', link: 'https://twitter.com/samirsales'},
            {icon: 'fab fa-facebook', text: 'Facebook', link: 'https://www.facebook.com/samir.sales.9'},
        ],
        languagesSection: 'Languages',
        languages: [
            {description: 'Portuguese', fluency: 'Native'},
            {description: 'English', fluency: 'Advanced'},
            {description: 'French', fluency: 'Basic'},
            {description: 'Spanish', fluency: 'Basic'},
        ],
        careerProfileSection: 'Carrer Profile',
        careerProfileDescrition: [
            "I'm brazilian, graduated in Telecommunications Engineering from the Federal Institute of Science and Technology of Ceará (IFCE) and a lover of the software development. ",
            "I'm dedicated in the things I do and really humorous at the work. I like to learn new stuff as new technologies, new idioms, among other things that satisfy me and make me grow up."  
        ],
        skillsProficiencySection: 'Skills & Proficieny',
        experienceSection: 'Experiences',
        experiences: [
            {
                enterprise: 'WDA Tecnologia & Inovação',
                office: 'Software Developer',
                startDate: new Date('2016-12'),
                endDate: new Date(),
                projects: [
                    {
                        name: 'Integrees',
                        type: 'Web System',
                        description: ['It is a robust university system developed with micro services architecture, using Spring Framework (Java) in its backend and AngularJS in the frontend. This system also has technologies such as Redis, Elasticsearch and Project Reactor (2.0 and 3.0).'],
                        technologies: [
                            'Java', 'SpringBoot', 'AngularJS', 'Project Reactor', 'Redis', 'ElasticSearch', 'SASS'
                        ]
                    },
                    {
                        name: 'Dashboard',
                        type: 'Test Web Application',
                        description: ['This is a web application to read and show as a dashboard readings from a meter. This project have a Java backend using SpringBoot and a frontend using Angular4.'],
                        technologies: [
                            'Java', 'SpringBoot', 'Angular', 'HTML', 'CSS'
                        ]
                    },
                    {
                        name: 'Pantheon',
                        type: 'Android Application',
                        description: ['Using the same Java library for meter communication called EletraMCI. We\'ve built an Android application to read and configure the electricity meter via WI-FI. This application does a small subset of Olimpo\'s commands.'],
                        technologies: [
                            'Java', 'Android', 'XML'
                        ]
                    },
                    {
                        name: 'Olimpo',
                        type: 'JavaFX Desktop Application',
                        description: ['Building a JavaFX desktop app that communicates using serial port to a energy meter. The app read several meter attributes, show reports, write configurations and performs quality tests. This app will be used by a chinese company called Hexing.',
                        'We use javafx as main programming language, JSSC java library to read/write in COM ports. Many design patterns like factory, facade, memento, observer and strategy patterns. We also use continuous integration tool called Team City, unity tests using junit, functional tests using Test Complete.',
                        'We use agile methodology, having 15 days sprints.'],
                        technologies: [
                            'JavaFX', 'Android', 'XML', 'Velocity'
                        ]
                    },
                    {
                        name: 'EletraMCI',
                        type: 'Electricity Meter Communication Library',
                        description: ['This is a Java library to be used in all future application to communicates a computer and an electricity meter.'],
                        technologies: [
                            'Java'
                        ]
                    }
                ]
            },
            {
                enterprise: 'IFCE',
                office: 'Software Developer',
                startDate: new Date('2013-8'),
                endDate: new Date('2016-11'),
                projects: [
                    {
                        name: 'W3Sat',
                        type: 'Android Application',
                        description: ['This application is developed to help users make the antennas pointing. With the help of a web system that manages information on the latitude, longitude and altitude of geostationary satellites, the mobile device uses this information to return elevation and azimuth values according to the geolocation and altitude of the mobile.',
                        'In addition to the calculation of antenna pointing, the application allows the mobile device to be used as an adjustment tool, through the use of the magnetometer and accelerometer of the device.'],
                        technologies: [
                            'Java', 'Android', 'SQLite', 'XML'
                        ]
                    },
                    {
                        name: 'Vendor',
                        type: 'Android and Web Application',
                        description: ['This system was developed to guide vendors by providing maps that locate the best stores according to logistics and managing customer, product and order registrations.',
                        'Products registration and customer information management is done by a web application. It is through the web application that the android application makes its updates. The Android application also allows the user to register customers and to register orders with suggestions of a several forms of payment.'],
                        technologies: [
                            'Java', 'Android', 'SQLite', 'XML'
                        ]
                    },
                    {
                        name: 'Mobile Elevator Control',
                        type: 'Android Application',
                        description: ['It consists of an application that allows the user to send control commands to elevators that work with specific hardware developed by the company Infolev. Communication can be done via Bluetooth, Wifi and Serial.',
                        'Buttons, beeps, advertisements images and videos are shown to users while the application is running and can be edited by a settings file generated by a desktop application developed in parallel.'],
                        technologies: [
                            'Java', 'Android', 'SQLite', 'XML'
                        ]
                    },
                    {
                        name: 'Configuration File Builder Application',
                        type: 'JavaFX DeskTop Application',
                        description: ['Application that allows the development of configuration files for the mobile application that controls elevators. It provides simulations of the graphical interface of the mobile application.'],
                        technologies: [
                            'JavaFX', 'XML'
                        ]
                    }
                ]
            },
            {
                enterprise: 'Instituto Iracema de Pesquisa e Inovação',
                office: 'Software Developer',
                startDate: new Date('2012-8'),
                endDate: new Date('2013-8'),
                projects: [
                    {
                        name: 'Portáctil',
                        type: 'iOS Application',
                        description: ['Application developed to work in conjunction with the Portáctil, a device designed to assist the visually handicapped in the braille reading. The application stores books in file format and manages read information according to commands that are sent by the Portáctil via Bluetooth.'],
                        technologies: [
                            'iOS', 'Objective-C', 'SQLite'
                        ]
                    }
                ]
            }
        ],
        personalProjectsLabel: 'Personal Projects',
        personalProjects: [
            {
                name: 'Pickle Wiki',
                type: 'Web System',
                description: ['The Pickle Wiki is an open source encyclopedia project, written collaboratively and based on the Wikipedia system. Unlike the traditional Wikipedia, the Pickle Wiki is a search tool with a focus on internal networks.',
                'It is a single page application which uses React JS as front-end and Spring Boot as back-end. To data persistence it was chosen the PostgresSQL and to make text handling it was chosen the Markdown.',                
                'The application\'s name is a parody of the name Wikipedia combined with the expression \"Pickle Rick\" from the American animation Rick and Morty (created by Justin Roiland and Dan Harmon). The genial suggestion of the name was made by John Soares during a brainstorm.'],
                link: 'https://github.com/SamirSales/pickle-wiki/',
                technologies: [
                    'Java', 'SpringBoot', 'PostgreeSQL', 'ReactJS'
                ]
            },
            {
                name: 'Key Keeper',
                type: 'Android Application',
                description: ['Android application, developed in Java, that allows the user to maintain their bank of passwords in a mobile device. It is quite useful though it sounds dangerous.',
                'The user has the option to create a password to access the application. This prevents others from accessing the his/her bank of passwords. Another security measure is the encryption key saved in the application that encrypts saved passwords in the bank.',
                'The application also allows the user to import and export data through .xls files.'],
                link: 'https://github.com/SamirSales/android-password-keeper',
                technologies: [
                    'Java', 'Android', 'SQLite'
                ]
            }
        ]
    },
    methods: {
        // methods of  this Vue Instance
        getLabelDates: function(date1, date2){
            var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            
            var today = new Date();
            if(date2.getFullYear() === today.getFullYear() && date2.getMonth() === today.getMonth()){
                return months[date1.getMonth()] + " " + date1.getFullYear() + " - Present";
            }
            
            return months[date1.getMonth()] + " " + date1.getFullYear() + " - " + months[date2.getMonth()] + " " + date2.getFullYear();
        },
    },
    computed:{
        // Dependent properties
        // methods created here are only called if it is necessary to re-calculate the result of output.
        nameLengthComputed: function(){
            console.log('nameLengthComputed()');
            return this.name.length > 5 ? "'name' is bigger than 5" : "'name' is NOT bigger than 5."; 
        },
        divClasses: function(){
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    },
    watch: {
        // Execute code upon data changes
        name: function(value){
            console.log("watch name = ", value);
        }
    }
});