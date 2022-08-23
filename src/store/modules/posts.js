export default {
    actions: {
        async fetchPosts(ctx, userId) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await res.json();
            const filteredPosts = await posts.filter((element) => {
                return element.userId === Number(userId);
            })
            ctx.commit('updatePosts', filteredPosts)
        },
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
    },
    state: {
        posts: [],
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
    }
}
