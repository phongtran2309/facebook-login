import React from 'react';
import axios from 'axios';
import competitionService from '../../mct/services/competitionService';
import HeaderCommon from './Component/HeaderCommon';

export type competitionsType = {
	id: number;
	name: string;
	org: string;
};

export type bankType = {
	id: string;
	name: string;
	code: string;
	bin: string;
	shortName: string;
	logo: string;
	transferSupported: number;
	lookupSupported: number;
	short_name: string;
	support: number;
	isTransfer: number;
	swift_code: string;
};

function Competitions() {
	//

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
	const [competitions, setCompetitions] = React.useState<competitionsType>([]);
	const [bankList, setBanklist] = React.useState<bankType>([]);

	React.useEffect(() => {
		async function fetchData() {
			try {
				const res = await competitionService.getCompetitions();
				setCompetitions(res.response.competition);
				console.log(res.response.competition);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		fetchData();
		async function testApi() {
			try {
				const response = await axios.get<{
					data: bankType;
				}>('https://api.vietqr.io/v2/banks');
				const bankListdata: bankType = response.data.data;

				setBanklist(bankListdata);
				console.log(bankListdata);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		testApi();
	}, []);

	// Add competition
	async function onAdd(competition) {
		try {
			const res = await competitionService.addCompetition(competition.request);
			console.log(res.response.competitions);
			setCompetitions(res.response.competitions);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	return (
		<div className="container">
			<HeaderCommon onAdd={onAdd} />
			<h2 className='text-12'>Competitions:</h2>
			<ul>
				{competitions.map((competition) => (
					<li key={competition.id}>
						{competition.name} - {competition.org}
					</li>
				))}
			</ul>
			{/* <h2 className="text-12">Bank List:</h2>
			<ul>
				{bankList.map((banks) => (
					<li key={banks.id}>
						{banks.name} - {banks.shortName}
					</li>
				))}
			</ul> */}
		</div>
	);
}

export default Competitions;
