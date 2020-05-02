<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6" v-for="(image, index) in images" :key="index">
				<div class="card mb-3">
					<img class="card-img-top" :src="image" alt="Card image cap">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {

	},
	asyncData (context) {
		// called every time before loading the component
		// as the name said, it can be async
		// Also, the returned object will be merged with your data object
		return { 
			images: [
				'/images/1.jpg',
				'/images/2.jpg'
			]
		 }
	},
	head () {
		return {
			title: 'Главная страница',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{ hid: 'description', name: 'description', content: 'My custom description' }
			]
		}
	}
}
</script>

<style>

</style>
