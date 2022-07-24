import React, {useContext} from 'react';
import { appContext } from '../context/appContext';
const Budget = () => {
	const {budget} = useContext(appContext);
	return (
		<div className='alert alert-secondary'>
			<span>Budget: ${budget}</span>
		</div>
	);
};

export default Budget;