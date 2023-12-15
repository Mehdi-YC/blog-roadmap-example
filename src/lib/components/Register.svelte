<script>
	import { enhance } from '$app/forms';

</script>

<div
	class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center"
>
	<div class="w-full h-100">
		<h1 class="text-xl font-bold">Tailwind Login</h1>
		<h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

		<form class="mt-6" action="?/register" method="POST" use:enhance>
			<div>
				<label class="block text-gray-700">Email Address</label>
				<input
					type="email"
					name="username"
					id="username"
					placeholder="Enter Email Address"
					class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
					autofocus
					autocomplete
					required
				/>
			</div>
			<hr class="my-6 border-gray-300 w-full" />
			<div class="flex">
				<div>
					<label class="block text-gray-700">Username</label>
					<input
						type="text"
						name="username2"
						id="username2"
						placeholder="Enter Email Address"
						class="w-[98%]  py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
						autofocus
						autocomplete
						required
					/>
				</div>

				<div>
					<label class="block text-gray-700">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter Password"
						minlength="6"
						class="w-[100%]  py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
focus:bg-white focus:outline-none"
						required
					/>
				</div>
			</div>

			<div class="text-right mt-2">
				<a
					href="#"
					class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
					>Forgot Password?</a
				>
			</div>

			<button
				type="submit"
				class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
      px-4 py-3 mt-6">Log In</button
			>
		</form>

		<hr class="my-6 border-gray-300 w-full" />

		<p class="mt-8 text-black mx-auto w-fit<">
			Already have an account?
			<a href="/login" class="text-blue-500 hover:text-blue-700 font-semibold"> Login </a>
		</p>

		<p class="text-sm text-gray-500 mt-12">&copy; 2021 Talwind - All Rights Reserved.</p>
	</div>
</div>
