import React from "react";
import { Link } from "@reach/router";
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import logoImage from "../../talkieslogo.svg";
import Loading from './../../components/Loading';
const Header = (props) => {
	const loading = props.data.loading;
	const user = props.data.menu;
	if (loading) {
		return <Loading />;
	}
	return (
		<header className="site-header-wrapper bg-dark mb-5">
			<div className="site-header container">
			<nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/"><img src={logoImage} alt="talkieslogo" /></a>
          <span className="text-light">Exclusively for movies</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

	<div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">{user.menuItems.edges.map(item => {
					return <Link key={item.node.id} className="nav-link unstyle-link text-light" to={item.node.path}>{item.node.label}</Link>
				})}
            </ul>

          </div>
		  
        </nav>
			
			</div>
		</header>
	);
}
const getMenu = gql`
	query MyQuery($id: ID = "NavMenu") {
		menu(id:$id, idType: NAME) {
			menuItems {
			  edges {
				node {
				  id
				  label
				  order
				  path
				  target
				}
			  }
			}
		  }
	}
`;

export default graphql( getMenu )( Header );

