import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './access/access.scss';

const Passports = () => {
	return (
		<div>
			<Header as='h1' color='#085F63' className='ui header'>
				My Passport
			</Header>
			<Image
				src='https://media.afar.com/uploads/images/afar_post_headers/images/wsGsA768bP/original_shutterstock_1110443648.jpg?1543263550'
				size='large'
				circular
				centered
				as={Link}
				to="/restaurants"
				/>
		</div>
	);
};

export default Passports;
