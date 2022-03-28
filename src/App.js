import React from "react";
import { Router } from "@reach/router";

import 'bootstrap/dist/css/bootstrap.min.css';
// Import Layouts
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Authors from "./pages/Authors";
import Author from './pages/Author';
import Categories from "./pages/Categories";
import Category from './pages/Category';
import Tags from "./pages/Tags";
import Tag from './pages/Tag';

// TODO: We can have author slug in url once userby slug available in wp-graphql.
// Ref: https://github.com/wp-graphql/wp-graphql/issues/263

const App = () => {
	return (
		<Router>
			
			<Home path="/"/>
			<About path="/about" />
			<Blogs path="/blog/" />
			<Blog path="/:slug" />
			<Authors path="/author/" />
			<Author path="/author/:id" />
			<Categories path="/category/" />
			<Category path="/category/:id" />
			<Tags path="/tags/" />
			<Tag path="/tag/:id" />
			<NotFound path="/404"/>
		</Router>
	);
}

export default App;
