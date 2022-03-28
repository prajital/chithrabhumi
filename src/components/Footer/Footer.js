import React from "react";
import { Link } from "@reach/router";
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
	return (
		<footer id="footer" className="mt-5">
			<div className="container pt-5">
			<div className="row">
			<div className="col-md-4 col-6">
				<h2>Visit</h2>
				<ul className="list-group">
				<li className="p-2"><a className="text-light" href="http://keralafamily.com/" target="_blank" rel="noopener noreferrer">Keralafamily</a></li>
				<li className="p-2"><a className="text-light" href="https://keralafinance.com/" target="_blank" rel="noopener noreferrer">Keralafinance</a></li>
				<li className="p-2"><a className="text-light" href="/" rel="noopener noreferrer">Keralaonlive</a></li>
				<li className="p-2"><a className="text-light" href="https://jobcloud.in/" target="_blank" rel="noopener noreferrer">Jobcloud</a></li>
				<li className="p-2"><a className="text-light" href="http://kadalundi.com/" target="_blank" rel="noopener noreferrer">Kadalundi</a></li>
			</ul>
			</div>
			<div className="col-md-4 col-6">
			<h2>Quick Links</h2>
			<ul className="list-group">
				<li className="p-2"><Link className="nav-link unstyle-link text-light" to="/category/latest-news-from-movie-world/">Film News</Link></li>
				<li className="p-2"><Link className="nav-link unstyle-link text-light" to="category/trailer/">Trailers</Link></li>
				<li className="p-2"><Link className="nav-link unstyle-link text-light" to="/category/teaser/">Teasers</Link></li>
				<li className="p-2"><Link className="nav-link unstyle-link text-light" to="/">Gallery</Link></li>
			</ul>
			</div>
			<div className="col-md-4 col-12">
			<h2 className="pb-4">Follow Us on</h2>
			<SocialIcon url="https://facebook.com/talkiesonline" fgColor="#ffffff" className="mx-2" target="_blank"/>
		<SocialIcon url="https://twitter.com/talkiesonline" fgColor="#ffffff" className="mx-2" target="_blank"/>
		<SocialIcon url="https://www.instagram.com/talkiesonline/" fgColor="#ffffff" target="_blank"/>
			</div>
			</div>
			</div>
		<div className="site-footer">
			
		<div className="container pt-3">
		  <div className="row">
			<div className="col-6">
			©2022 Talkies
			</div>
			  <div className="col-6 toplink">
			<a className="to-the-top text-light" href="#menu">
								<span className="to-the-top-long">
									To the top <span className="arrow" aria-hidden="true">↑</span>						</span>
							
							</a>
			</div>
		 </div>
		 </div>
		 </div>
			  </footer>
		   
	);
};

export default Footer;
