import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import {Helmet} from "react-helmet";
import Loading from './../../components/Loading';
import Card from "./../Posts/Card";

const SingleTag = (props) => {


//console.log(props.id);
	if (!props.data ) return false;

	const loading = props.data.loading;
	const user = props.data.posts;
	if (loading) {
		return <Loading />;
	}
//console.log(user.edges);
	return(
		<div className="container">
			<Helmet>
			<link rel="canonical" href={"https://talkies.online/tag/"+ props.id}/>
			<meta property="og:type" content="article" />
			<meta name="og:title" property="og:title" content={props.id +" Archives - Talkies"} />
			<meta name="og:description" property="og:description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam"  />
			<meta property="og:site_name" content="Talkies" />
			<meta property="og:url" content={"https://talkies.online/tag/"+ props.id} />  
			<meta property="fb:app_id" content="233374164270567" />
			<meta property="article:publisher" content="https://www.facebook.com/talkiesonline" />
			<meta name="keywords" content="talkies,film news, malayalam, bollywood,tollywood,trailer,teaser" />
			<meta name="description" content="Talkies exclusively for movies. Film news in malyalam, bollywood , kollywood, tollywood, mollywood news in malayalam" />
			</Helmet>
			<div className="post-listing-first-large malayalam">
				{user.edges.map(item => {
					return <Card key={item.node.id} post={item.node} ></Card>
				})}
			</div>
		</div>
	);
}

const getTag = gql`
	query MyQuery( $id: String ) {
		posts(where: {tag: $id}) {
				edges {
					node {
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
								slug
							}
						}
					}
				}
			}
		}
`;

export default graphql( getTag, {
	options: ( props ) => {
		const id = props.id;

		return {
			variables: {
				id
			}
		}
	}
} )( SingleTag );
