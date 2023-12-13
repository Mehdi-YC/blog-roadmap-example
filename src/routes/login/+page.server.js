import { auth } from "../../lib/server/lucia";
import { LuciaError } from "lucia";
import { fail, redirect } from "@sveltejs/kit";


export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const username = formData.get("username");
		const password = formData.get("password");

		try {
			// find user by key
			// and validate password
			console.log(username, password)
			const key = await auth.useKey(
				"username",
				username.toLowerCase(),
				password
			);

			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			if (
				e instanceof LuciaError &&
				(e.message === "AUTH_INVALID_KEY_ID" ||
					e.message === "AUTH_INVALID_PASSWORD")
			) {
				return fail(400, {
					message: "Incorrect username or password"
				});
			}
			return fail(500, {
				message: "An unknown error occurred  " + e.message
			});
		}
		// redirect to
		// make sure you don't throw inside a try/catch block!
		throw redirect(302, "/");
	}
};