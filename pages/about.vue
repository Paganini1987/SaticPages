<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>About page</h1>

				<p class="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam deserunt nemo voluptate incidunt quia possimus assumenda exercitationem molestiae sunt, doloremque praesentium perspiciatis ea quod ut impedit itaque, architecto dolorum beatae obcaecati sit inventore odit quas tenetur veritatis. Ab officia eos quis ullam voluptas rerum ipsa architecto veniam necessitatibus esse. Assumenda corrupti eaque temporibus exercitationem, eos laborum quo. Aspernatur, perspiciatis! Ab velit, repellendus perferendis, odio officia animi quo repudiandae quis magni harum dignissimos, error sed repellat tempore? Illo aspernatur neque unde alias necessitatibus vel officiis quas aut ipsam dolore distinctio, id quos nulla et quaerat consequatur iusto vero, voluptas quasi voluptatibus, mollitia beatae magnam ea. Voluptate minus nisi ut quidem! Quod dolorum natus aliquid accusamus, minima tempora molestiae! Animi itaque ab iusto laboriosam, enim ut, nisi quo in voluptatem architecto hic provident doloremque. Iusto labore unde, laborum quidem nam repudiandae placeat eaque vero, adipisci possimus, iure voluptate voluptatibus ipsum illo odio illum debitis quod. Qui repellat ipsa ab aliquam libero, aspernatur provident soluta eaque laudantium laborum vero magnam vel suscipit nemo explicabo ea eveniet molestias adipisci neque natus est consequuntur placeat perferendis dicta! Sapiente veniam earum pariatur labore temporibus perspiciatis, tempora id a obcaecati assumenda distinctio quidem in exercitationem totam at?</p>
			
				<form name="contact" method="POST" data-netlify="true">
					<p>
						<label>Your Name: <input type="text" name="name" /></label>   
					</p>
					<p>
						<label>Your Email: <input type="email" name="email" /></label>
					</p>
					<p>
						<label>Your Role: <select name="role[]" multiple>
							<option value="leader">Leader</option>
							<option value="follower">Follower</option>
						</select></label>
					</p>
					<p>
						<label>Message: <textarea name="message"></textarea></label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About'
}
</script>

<style>

</style>