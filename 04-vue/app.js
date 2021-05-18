const h = Vue.h

const app = Vue.createApp({
    // template: `
    //     <div class="card center">
    //         <h1>{{title}}</h1>
    //         <button class="btn" @click="title = 'NEW TMP'">Change</button>
    //     </div>
    // `,
    data() {
        return {
            title: 'TEMPLATE'
        }
    },
    methods: {
        changeTitle() {
            console.log(this)
            this.title = 'NEW TMP'
        }
    },
    render() {
        return h('div', {
            class: 'card center'
        }, [
            h('h1',{}, this.title),
            h('button', {
                class: 'btn',
                onClick: this.changeTitle
            }, 'Change')
        ])
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
        setTimeout(() => { this.title = 'TITLE' }, 1000)
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
})

app.mount('#app')

setTimeout(() => { app.unmount() }, 2000)

Vue.createApp({
    data() {
        return {
            title: 'New Title 2'
        }
    }
}).mount('#app2')

// =====

// let title = 'Vue 3'
// let message = 'Заголовок это:' + title
//
// console.log(message)
//
// title = 'Angular 10'
//
// console.log(message)

const data = {
    title: 'Vue 3',
    message: 'Заголовок это: Vue 3'
}

const proxy = new Proxy(data, {
    // get(target, key) {
    //     console.log('target', target)
    //     console.log('key', key)
    // },
    set(target, key, value) {
        // console.log('target', target)
        // console.log('key', key)
        // console.log('value', value)
        if (key === 'title') {
            target.message = 'Заголовок это: ' + value
        }
        target[key] = value
    }
})

proxy.title = 'Angular'
// console.log(proxy)


