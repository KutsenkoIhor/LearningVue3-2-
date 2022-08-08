
Vue.createApp({
    // data() {
    //     return {
    //         title: "Я есть грут"
    //     }
    // }
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: "Я есть грут",
        person: {
            firstName: 'vladilen',
            lastName: 'Mini',
            age: 27
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            // console.log(this.$refs.myInput.value)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')