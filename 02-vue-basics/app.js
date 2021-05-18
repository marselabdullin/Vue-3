const App = {
    data() {
        return {
            title: 'Заметки',
            placeholder: 'Введите название',
            inputValue: '',
            notes: ['note 1', 'note 2']
        }
    },
    methods: {
        addNewNote() {
            this.inputValue && this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        toUpperCase(string) {
            return string.toUpperCase()
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            console.log(value)
        }
    }
}

Vue.createApp(App).mount('#app')
