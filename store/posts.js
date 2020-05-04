export const state = () => ({
	posts: []
})

export const mutations = {
	setPosts(state, posts) {
		state.posts = posts
	}
}

export const actions = {
	async getPosts({commit}) {
		const posts = await this.$axios.$get('https://nuxtdatabase.firebaseio.com/cards.json')

		commit('setPosts', posts)
	},
	savePost({}, data) {
		return this.$axios.$post('https://nuxtdatabase.firebaseio.com/cards.json', data)
	}
}

export const getters = {
	posts: s => s.posts
}
