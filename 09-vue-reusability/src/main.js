import {createApp} from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from '@/translatePlugin'
// import alertMixin from '@/alertMixin'
// import focusDirective from '@/focusDirective'

const app = createApp(App)
// .mixin(alertMixin)
// .directive('focus', focusDirective)

const ru = {
    app: {
        title: 'Как работают плагины во Vue?',
        changeLngBtn: 'Переключить язык'
    }
}
const en = {
    app: {
        title: 'How plugins work in Vue?',
        changeLngBtn: 'Toggle language'
    }
}

app.use(translatePlugin, {ru, en})

app.mount('#app')
