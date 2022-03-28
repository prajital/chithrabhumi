import React from 'react';
import Header from '../components/Header/Header';
import SingleTag from '../components/tag/SingleTag';
import Footer from '../components/Footer/Footer';
const Tag = ( props ) => {
	return(
		<React.Fragment>
			<Header />
			<SingleTag id={props.id}/>
			<Footer/>
		</React.Fragment>
	);
}

export default Tag;
