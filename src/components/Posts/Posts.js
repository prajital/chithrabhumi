import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import Card from "./Card";
import Loading from './../Loading';

const Posts = props => {
	const { loading, posts } = props.data;

	if (loading) {
		return <Loading />
	}
//console.log(posts);
	if (posts.edges) {
		return (
			<div className="container post-listing post-listing-first-large">
				{posts.edges.map(post => {
					//const { post } = item;
					return <Card key={post.node.postId} post={post.node} ></Card>
				})}
			</div>
		);
	}
	else{
	return <div>No Posts</div>;}
};

const getPosts = gql`
query getPosts {
	posts(first: 10) {
		edges {
		  cursor
		  node {
			postId
			title
			slug
			link
			date
			excerpt
			slug
			categories {
			  nodes {
				categoryId
				name
			  }
			}
			featuredImage {
			  node {
				altText
				sourceUrl
				srcSet
			  }
			}
		  }
		}
		pageInfo {
		  hasNextPage
		  endCursor
		}
	  }
  }
  
`;

export default graphql(getPosts)(Posts);
