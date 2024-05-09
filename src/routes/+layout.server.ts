import type { LayoutServerLoad } from './$types';
import { SPOTIFY_BASE_URI } from '$env/static/private';

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
	const accessToken = cookies.get('access_token');
	const refreshToken = cookies.get('refresh_token');
	if (!accessToken) {
		return {
			user: null
		};
	}

	const profileRes = await fetch(`${SPOTIFY_BASE_URI}/me`, {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});
	if (profileRes.ok) {
		const profile: SpotifyApi.CurrentUsersProfileResponse = await profileRes.json();
		return {
			user: profile
		};
	} if(profileRes.status === 401 && refreshToken){
		// Refresh token and try again
	} else {
		return {
			user: null
		};
	}
};