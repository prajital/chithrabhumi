import React from 'react';
import Header from '../components/Header/Header';
import AuthorList from '../components/authors/AuthorList';

const Authors = () => {

	return(
		<React.Fragment>
			<Header />
			<AuthorList />
		</React.Fragment>
	);
}

export default Authors;
