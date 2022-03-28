import React from 'react';
import Header from '../components/Header/Header';
import SingleCategory from '../components/category/SingleCategory';
import Footer from '../components/Footer/Footer';
const Category = ( props ) => {
	return(
		<React.Fragment>
			<Header />
			<SingleCategory id={props.id}/>
			<Footer/>
		</React.Fragment>
	);
}

export default Category;
