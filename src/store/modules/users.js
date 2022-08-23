export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await res.json();

            ctx.commit('updateUsers', users)
        },
        async fetchUser(ctx, num = 0) {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/' + num)
            const user = await res.json();

            ctx.commit('updateUser', user)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users;
        },
        updateUser(state, user) {
            state.user = user;
        }
    },
    state: {
        users: [],
        user: {},
    },
    getters: {
        allUsers(state) {
            return state.users;
        },
        amountUsers(state) {
            return state.users.length;
        },
        selectedUser(state) {
            return state.user
        }
    }
}
