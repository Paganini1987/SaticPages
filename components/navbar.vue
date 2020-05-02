<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#">Navbar</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item active">
				<nuxt-link exact active-class="active" to="/" class="nav-link" href="#">Home</nuxt-link>
			</li>
			<li class="nav-item active">
				<nuxt-link active-class="active" to="/posts" class="nav-link" href="#">Posts</nuxt-link>
			</li>
			<li class="nav-item active">
				<nuxt-link active-class="active" to="/about" class="nav-link" href="#">About</nuxt-link>
			</li>
		</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>

<style>

</style>