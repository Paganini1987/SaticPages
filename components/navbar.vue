<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<nuxt-link to="/" class="navbar-brand" href="#">СуперБлог</nuxt-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item active">
				<nuxt-link exact active-class="active" to="/" class="nav-link" href="#">Записи</nuxt-link>
			</li>
			<li class="nav-item active">
				<nuxt-link active-class="active" to="/about" class="nav-link" href="#">О блоге</nuxt-link>
			</li>
			<li class="nav-item active">
				<nuxt-link active-class="active" to="/admin" class="nav-link" href="#">Добавить пост</nuxt-link>
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