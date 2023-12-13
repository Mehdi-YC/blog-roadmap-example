<script>
	import { enhance } from "$app/forms";
	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
Welcome to svelte !!

</div>

<h1>Profile</h1>
<p>User id: {data.userId}</p>
<p>Username: {data.username}</p>
<form method="post" action="?/logout" use:enhance>
	<input type="submit" value="Sign out" />
</form>
