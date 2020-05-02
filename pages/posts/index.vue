<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>Posts Page</h1>

				<div class="card-columns mt-4">
					<div class="card"  v-for="post in posts" :key="post.id">
						<div class="card-body">
							<h5 class="card-title">{{ post.title }}</h5>
							<p class="card-text">{{ post.body }}</p>
							<!-- <a href="#" class="btn btn-primary"  @click.prevent="openPost(post)">Go somewhere</a> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData ({$axios}) {
		const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')

		return {posts}
	},
	data () {
		return {
			posts: []
		}
	},
	methods: {
		openPost (post) {
			this.$router.push('/posts/' + post.id)
		}
	}

}
</script>

<style>

</style>