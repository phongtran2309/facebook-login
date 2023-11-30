// eslint-disable-next-line import/no-extraneous-dependencies
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
	console.log(response);
};
export default function loginFB() {
	return (
		<>
			<FacebookLogin
				appId="2127788580725167"
				fields="name,email,picture"
				callback={responseFacebook}
			/>
			,
		</>
	);
}
