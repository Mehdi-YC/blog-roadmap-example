<script>
	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Let's get cracking bones !!!4</h1>
		<p>Start by exploring:</p>
		<ul>
			<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
			<li><code class="code">/src/app.postcss</code> - app wide css</li>
			<li>
				<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
			</li>
				{#await data.streamed.blogs}
				Loading...
			{:then blogs}
				This page has been viewed {blogs} times.
				{JSON.stringify(blogs)}
				"whaat"
			{:catch error}
				{error.message}
			{/await}

		</ul>
	</div>
</div>
