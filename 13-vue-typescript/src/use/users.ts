import {useFetch} from "@/use/fetch";
import {Ref, ref} from "vue";

interface User {
    id: number
    name: string
    email: string
}

type UsableUsers = Promise<{users: Ref<User[] | undefined>}>

export async function useUsers(): UsableUsers {
    const loading: Ref<boolean> = ref(false)
    const {response: users, request} = useFetch<User[]>('http://jsonplaceholder.typicode.com/users')

    if (!loading.value) {
        await request()
        loading.value = true
    }

    return {users}
}
