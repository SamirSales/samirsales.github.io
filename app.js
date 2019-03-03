new Vue({
    el: '#app',
    data: {
        name: 'Samir Sales',
        profession: 'Software Developer',
        contacts: [
            {icon: 'fas fa-envelope', text: 'samir.sribeiro@gmail.com', link: 'mailto:samir.sribeiro@gmail.com'},
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
        ]
    },
    methods: {
        // methods of  this Vue Instance
        changeName: function(event) {
            this.name = event.target.value;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(event){
            alert(event.target.value);
        },
        nameLengthMethod: function(){
            return this.name.length > 5 ? "'name' is bigger than 5" : "'name' is NOT bigger than 5."; 
        }
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