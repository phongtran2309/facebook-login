import FuseUtils from '@fuse/utils/FuseUtils';
import axios, { AxiosError, AxiosResponse } from 'axios';
import mctConfig from './mctConfig';


class CompetitionService extends FuseUtils.EventEmitter {
	/**
	 * Initializes the JwtService by setting interceptors and handling authentication.
	 */
	init() {
		this.setInterceptors();
	}	

	/**
	 * Sets the interceptors for the Axios instance.
	 */
	setInterceptors = () => {
		axios.interceptors.response.use(
			(response: AxiosResponse<unknown>) => response,
			(err: AxiosError) =>
				new Promise(() => {
					if (err?.response?.status === 401 && err.config) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
					}
					throw err;
				})
		);
	};

	addCompetition = (data) =>
		new Promise((resolve, reject) => {
			axios.post(mctConfig.addCompetition, data).then(
				(
					response: AxiosResponse<{
						error?: {
							message: string;
						}[];
					}>
				) => {
					if (response.data) {
						console.log(response.data);
						resolve(response.data);
						this.emit('onMCT', response.data);
					} else {
						reject(response.data.error);
					}
				}
			);
		});

	getCompetitions = () =>
		new Promise((resolve, reject) => {
			axios.get(mctConfig.getCompetitions).then(
				(
					response: AxiosResponse<{
						error?: {
							message: string;
						}[];
					}>
				) => {
					if (response.data) {
						resolve(response.data);
						this.emit('onMCT', response.data);
					} else {
						reject(response.data.error);
					}
				}
			);
		});

}

const instance = new CompetitionService();

export default instance;
