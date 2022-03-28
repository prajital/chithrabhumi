import React from 'react';
import Header from '../components/Header/Header';
import SingleAuthor from '../components/authors/SingleAuthor';
import Footer from '../components/Footer/Footer';
const Author = ( props ) => {
	return(
		<React.Fragment>
			<Header />
			<SingleAuthor id={props.id}/>
			<Footer/>
		</React.Fragment>
	);
}

export default Author;
