import {createStore} from 'vuex'

const TASKS = 'tasks'

const initialTasks = JSON.parse(localStorage.getItem(TASKS)) || []

const saveTasksToStorage = function (tasks) {
    localStorage.setItem(TASKS, JSON.stringify(tasks))
}

export default createStore({
    state() {
        return {
            tasks: initialTasks
        }
    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        activeTasks(state) {
            return state.tasks.filter((i) => i.status === 'active').length
        }
    },
    mutations: {
        createTask(state, payload) {
            state.tasks.push(payload)

            saveTasksToStorage(state.tasks)
        },
        changeStatus(state, payload) {
            state.tasks.forEach((i) => {
                if (i.id === payload.id) i.status = payload.status
            })

            saveTasksToStorage(state.tasks)
        }
    }
})
