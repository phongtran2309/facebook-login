import React, { ChangeEvent, useState } from 'react';
import { competitionsType } from 'src/app/main/Competition/Competitions';

// eslint-disable-next-line react/prop-types
function HeaderCommon({ onAdd }) {
	const [idRequest, setIdRequest] = useState(Math.floor(Math.random() * 1000) + 1);
	const [nameRequest, setNameRequest] = useState('');
	const [descriptionRequest, setDescriptionRequest] = useState('');
	const request: competitionsType = {
		id: idRequest,
		name: nameRequest,
		org: descriptionRequest
	};
	function onSubmit(e: ChangeEvent<HTMLInputElement>){

		e.preventDefault();

		if (!nameRequest || !descriptionRequest) {
			alert('Please add value');
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		onAdd({ request });
		setNameRequest('');
		setDescriptionRequest('');
	}

	return (
		<div>
			<label>Tên cuộc thi</label>
			<input
				type="text"
				value={nameRequest}
				onChange={(e) => setNameRequest(e.target.value)}
			/>
			<label>Mô tả</label>
			<input
				type="text"
				value={descriptionRequest}
				onChange={(e) => setDescriptionRequest(e.target.value)}
			/>
			<input
				type="submit"
				value="Submit"
				onClick={onSubmit}
			/>
		</div>
	);
}

export default HeaderCommon;
