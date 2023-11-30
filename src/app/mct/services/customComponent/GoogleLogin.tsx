/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-extraneous-dependencies */
import { useGoogleLogin } from '@react-oauth/google';
import { setSessionTest } from 'src/app/auth/services/jwtService/jwtService';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

export function Login() {
	const responseGoogle = (response: { credential: string }) => {
		console.log(jwt_decode(response.credential));
		// Handle the response, e.g., send it to your server for authentication
	};
	const login = useGoogleLogin({
		onSuccess: (TokenResponse) => console.log(TokenResponse)
	});
	return (
		// <div>
		// 	<GoogleLogin
		// 		onSuccess={responseGoogle}
		// 		onError={errorResponse}
		// 	/>
		// </div>
		<button
			onClick={() => login()}
			type="button"
		>
			Sign in with Google
		</button>
	);
}
