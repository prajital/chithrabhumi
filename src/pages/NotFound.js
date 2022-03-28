import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import errorImage from "../error.png";
import {Helmet} from "react-helmet";

const NotFound = () => {
	return (
		<React.Fragment>
			 <Helmet>
			<meta name="description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam" />
			<meta property="og:type" content="404" />
			<meta name="og:title" property="og:title" content="404page" />
			<meta name="og:description" property="og:description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam" />
			<meta property="og:site_name" content="Talkies | Exclusively for movies" />
			</Helmet>
			
			<Header />
			<div className="container">
			<div className="row justify-content-center">
				<div className="text-center w-75 align-items-center">
			<img src={errorImage} alt="talkieslogo" />
			<h2 class="error-title wow fadeInUp animated" data-wow-delay=".7s" data-wow-duration="1s" >Oops... Page Not Found!</h2>
			<p class="wow fadeInUp animated" data-wow-delay=".9s" data-wow-duration="1s">The page which you are looking for does not exist galley of type and scrambled it to make a type specimen book. Please return to the homepage.</p>
			<div class="go-home wow fadeInUp animated" data-wow-delay="1.1s" data-wow-duration="1s">
			  <a  type="button" class="btn btn-warning" href="/">
			  	Back to home			  </a></div>
			</div>
			</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default NotFound;
