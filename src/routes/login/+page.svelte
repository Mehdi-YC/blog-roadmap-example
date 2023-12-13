<script>
	import { enhance } from "$app/forms";
</script>

<h1>Sign in</h1>
<form method="post" use:enhance>
	
	<input class="input" placeholder="username" name="username" id="username" /><br />
	
	<input class="input" placeholder="password" type="password" name="password" id="password" /><br />
	
	<input class="input" type="submit" />
</form>
<a href="/signup">Create an account</a>