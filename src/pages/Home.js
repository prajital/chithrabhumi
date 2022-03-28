import React from "react";
import {Helmet} from "react-helmet";
// Import Components
import Header from "../components/Header/Header";
import HomeGrid from '../components/blocks/Home_grid';
import BlockImage from '../components/blocks/Block_image';
import BlockPage from '../components/blocks/Block_page';
import Footer from "../components/Footer/Footer";
const Home = () => {
	
	return (
		<React.Fragment>
			<Header />
			<Helmet><title>Home</title>
			<link rel="canonical" href="https://talkies.online" />
			<meta property="og:site_name" content="talkies.online" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="Talkies.online, exclusively for movies" />
		<meta property="og:description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam" />
		<meta property="og:url" content="https://talkies.online" />
		<meta property="fb:app_id" content="233374164270567" />
		<meta property="og:image:width" content="800" />
		<meta property="og:image:height" content="600" />
		<meta property="article:publisher" content="https://www.facebook.com/talkiesonline" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@talkiesonline" />
		<meta name="twitter:title" content="Talkies.online, exclusively for movies" />
		<meta name="twitter:description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam" />
		<meta name="description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam" /></Helmet>
			<div className="container">
			<div className="row">
			<div className="col-md-8 col-12">
			<HomeGrid limit={1} gridno={1} offset={0} excerpt={0}/>
			</div>
			<div className="col-md-4 col-12">
			<HomeGrid limit={6} gridno={1} offset={1} excerpt={0}/>
			</div>
			</div>
			<div className="row mt-4 mb-4">
				<h2 className="eng_font text-warning fs-5 border-bottom border-secondary pb-2">TRAILERS / TEASERS / POSTERS</h2>
			
			<BlockImage categoryid={130} limit={6}/>
			</div>
			<div className="row mb-4">
			<div className="col-md-9 col-12">
			<HomeGrid limit={6} gridno={1} offset={8} excerpt={1}/>
			</div>
			<div className="col-md-3 col-12">
			<h2 className="eng_font text-warning fs-5 border-bottom border-secondary pb-2">GALLERY</h2>	
			<BlockPage pagename={'gallery'}/>
			<div className="col-md-12 col-12">
			<h2 className="eng_font text-warning fs-5 border-bottom border-secondary pb-2">VIDEOS</h2>	
			<BlockPage pagename={'videos'}/></div>
			</div>
			</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
