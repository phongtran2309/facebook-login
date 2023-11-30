import { competitionsType } from 'src/app/main/Competition/Competitions';
import mock from '../mock';
import mockMctApi from '../mct-mock-data.json';

const competitionData = mockMctApi.components.examples;

mock.onGet('api/competitions').reply(() => {
	const competitionss: competitionsType[] = [];
	// eslint-disable-next-line array-callback-return
	competitionData.competitions.value.map((item) => {
		const dataItem: competitionsType = {
			id: item.id,
			name: item.name,
			org: item.org
		};
		competitionss.push(dataItem);
	});

	const response = {
		competition: competitionss
	};

	return [200, { response }];
});

mock.onPost('api/competitions').reply((request) => {
	mockMctApi.components.examples.competitions.value.push(JSON.parse(request.data))

	console.log(mockMctApi.components.examples.competitions.value);
	const response = {
		competitions: competitionData.competitions.value
	};

	return [200, { response }];
});

// mock.onDelete('/api/competitions/:id').reply((config) => {
// 	const { id } = config.params as Params;
//
// 	_.remove(competitionData.competitions.value, { id });
//
// 	return [200, id];
// });
