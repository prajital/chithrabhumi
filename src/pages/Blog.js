import React from 'react';
import Header from '../components/Header/Header';
//import {Helmet} from "react-helmet";
import SinglePost from '../components/Posts/SinglePost'
import Footer from '../components/Footer/Footer';
const Blog = ( props ) => {

	return (
		<React.Fragment>
			<Header postid={props.slug}/>
			<SinglePost slug={props.slug}/>
			<Footer/>
		</React.Fragment>
	);
}

export default Blog;
