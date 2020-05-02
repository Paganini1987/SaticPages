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
			<div class="col-md-12">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis deleniti mollitia at magni quo excepturi asperiores cupiditate, ab illum suscipit reiciendis maxime magnam ipsa debitis ea necessitatibus distinctio itaque! Fugit, ad voluptas ex molestias rerum saepe et mollitia ratione amet voluptatibus repellat officiis nisi sapiente tenetur facere harum labore maiores, corrupti cumque dolorum eligendi delectus. Eaque, soluta odio. Praesentium, excepturi modi fugit optio enim voluptas aut eaque neque libero quis. Assumenda veritatis praesentium repellendus neque ullam ea quia. Quae ipsam a eaque, tempore dolores ex facere voluptatum ab eveniet voluptatibus blanditiis quod nobis nisi quidem. Quae repellat repellendus assumenda ab, autem obcaecati! Exercitationem, cum suscipit unde illo esse blanditiis rem non? Tenetur molestias eos quaerat aliquam consequatur sed? Hic dignissimos praesentium asperiores, optio nesciunt rem sequi provident omnis facilis repudiandae, labore, reiciendis vel ex voluptatem doloremque laborum quo repellendus earum totam. Soluta temporibus inventore molestias illo ratione, voluptatibus aut natus quia reprehenderit rerum nostrum, odit cumque distinctio expedita neque sunt aperiam ipsam id ex et. Animi architecto exercitationem molestias blanditiis nostrum aliquid perferendis dicta nisi labore cumque, necessitatibus laudantium? Vel alias animi earum doloribus quia facilis ducimus? Incidunt perferendis maxime laboriosam doloremque omnis id et. Velit optio rerum ut?
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
