Vue.createApp({
    data: () => ({
        title: 'TITLE',
        myHtml: '<h1>Vue 3 App</h1>',
        person: {
            fitstName: 'first',
            lastName: 'last',
            age: 27
        },
        items: [1, 2, 4, 6, 5, 3, 8, 7]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(index) {
            this.items.splice(index, 1)
        },
        log(item) {
            console.log(item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter((i) => !(i % 2))
        }
    }
}).mount('#app')
