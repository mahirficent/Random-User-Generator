const app = Vue.createApp({
    
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            age: 778,
            gender: 'male',
            email: 'johndoe778@gmail.com',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },

    methods: {
        // getUser(){
        // this.firstName = 'Jane',
        // this.lastName = 'Doe',
        // this.age = 682,
        // this.gender = 'female',
        // this.email = 'janedoe682@gmail.com',
        // this.picture= 'https://randomuser.me/api/portraits/women/10.jpg'
        // }

        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.age = results[0].age,
            this.gender = results[0].gender,
            this.email = results[0].email,
            this.picture= results[0].picture.large


        }
    }
})

app.mount('#app')