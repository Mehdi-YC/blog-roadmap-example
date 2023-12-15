<script>
	import { enhance } from '$app/forms';
	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">Welcome to svelte !!</div>

<h1>Profile</h1>
<p>User id: {data.userId}</p>
<p>Username: {data.username}</p>

<ul>
	{#each data.blogs as blog}
	<li>
		<h1>blog : {blog.title} by {data.username}</h1>
		<p>{blog.description}</p>
		<p>{blog.createdAt}</p>
		<p>.../{blog.slug}/</p>
	</li>
	{/each}
</ul>

<form method="post" action="?/logout" use:enhance>
	<input type="submit" value="Sign out" />
</form>

