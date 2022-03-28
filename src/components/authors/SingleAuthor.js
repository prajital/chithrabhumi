import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import {Helmet} from "react-helmet";
import Loading from './../../components/Loading';
import Card from "./../Posts/Card";

const SingleAuthor = (props) => {

	
	if (!props.data ) return false;

	const loading = props.data.loading;
	const user = props.data.user;
	//console.log(user);

	if (loading) {
		return <Loading />;
	}

	return(
		<div className="container">
			<Helmet>
			<link rel="canonical" href={"https://talkies.online/author/onlinetalkies"}/>
			<meta property="og:type" content="article" />
			<meta name="og:title" property="og:title" content={props.id +" Archives - Talkies"} />
			<meta name="og:description" property="og:description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam"  />
			<meta property="og:site_name" content="Talkies" />
			<meta property="og:url" content={"https://talkies.online/author/onlinetalkies"} />  
			<meta property="fb:app_id" content="233374164270567" />
			<meta property="article:publisher" content="https://www.facebook.com/talkiesonline" />
			<meta name="keywords" content="talkies,film news, malayalam, bollywood,tollywood,trailer,teaser" />
			<meta name="description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam" />
			</Helmet>
			<h2>{user.name}</h2>

			<div className="post-listing post-listing-first-large">
				{user.posts.items.map(item => {
					const { post } = item;

					return <Card key={post.id} post={post} ></Card>
				})}
			</div>
		</div>
	);
}

const getAuthor = gql`
	query MyQuery( $id: ID! ) {
		user(id: $id) {
			name
			posts {
				items: edges {
					post: node {
						id
						title
						slug
						link
						date
						excerpt
						featuredImage {
							node{
							title
							sourceUrl
							srcSet
							}
						}
						categories {
							nodes {
								categoryId
								name
							}
						}
					}
				}
			}
		}
	}
`;

export default graphql( getAuthor, {
	options: ( props ) => {
		const id = props.id;

		return {
			variables: {
				id
			}
		}
	}
} )( SingleAuthor );
