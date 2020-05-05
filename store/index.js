export const state = () => ({
	token: null
})

export const mutations = {
	setToken(state, token) {
		state.token = token
	},
	clearToken(state) {
		state.token = null
	}
}

export const actions = {
	login({commit}, token) {
		commit('setToken', token)
	},
	logout({commit}) {
		commit('clearToken')
	},
	getToken({ commit, rootState }, {email,password}) {
		return new Promise((resolve, reject)=>{
			this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-iyIUpHOdiOjKItrpE9-iy2Fj8jSlV_o`, {email, password, returnSecureToken: true},  {
				validateStatus: function (status) {
					return status >= 200 && status <= 400; // default
				}
			})
				.then((response)=>{
					if (response.idToken) {
						this.dispatch('login', response.idToken)

						resolve(true)
					} else {
						throw new Error(response.error.message)
					}
				})
				.catch((error)=>{
					reject(error)
				})
		})
	}
}

export const getters = {
	hasToken: s => !!s.token
}
