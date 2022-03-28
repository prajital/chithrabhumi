import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from "@reach/router";
import * as Icon from 'react-bootstrap-icons';
import Loading from './../../components/Loading'
import dateFormat from "dateformat";
import Newsgrid from './../../components/blocks/News_grid';
const SinglePage = ( props ) => {

	const loading = props.data.loading;
	const post = props.data.postBy;
//console.log(post);
	if (loading) {
		return <Loading />;
	}
	
	return (
		<article className="article">
			<div className="container">
				<h1 className="article-title">{post.title}</h1>
				<div className="article-meta mb-3 border-top border-bottom pt-2 pb-2 border-secondary"><span className="d-inline"><Icon.Calendar /> {dateFormat(post.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span>
				{post.categories.nodes && (
				<div className="category-listing d-inline bg-black"><Icon.UiChecksGrid className="mx-3"/> 
					{
					post.categories.nodes.map(category => {
						return (
							<Link
					className="unstyle-link"
					to={`/category/${category.slug}`}>
					{category.name}
				</Link>
						
						);
					})}
				</div>
			)}
				</div>
			</div>
			<div className="container">
			<div className="row">
			<div className="col-md-9 col-12">
			<img className="article-image"
				alt={post.featuredImage.node.title}
				src={post.featuredImage.node.sourceUrl}
				srcSet={post.featuredImage.node.srcSet}
			/>
			<div className=" malayalam pt-3">
				<div dangerouslySetInnerHTML={{ __html: post.content}}></div>
				{ post.tags.nodes && (
				<span className="post-listing-author"><Icon.Tags />
					{ post.tags.nodes.map(tags => {
						return (
							<Link
					className="unstyle-link bg-secondary p-1 px-2 mx-1 rounded-pill"
					to={`/tag/${tags.name}`}>
					{tags.name} 
				</Link>
						
						);
					})}
				
					
				</span>
			)}
			<div className="eng_font border-top border-bottom border-secondary mt-5 p-1">MORE LATEST NEWS</div>
			<Newsgrid limit={3} offset={3}/>
			</div>
			</div>
			<div className="col-md-3 col-12 malayalam">
			<div className="eng_font border-bottom border-warning p-1 fw-bold">LATEST NEWS</div>	
			<Newsgrid limit={6} gridno={1} offset={0}/>
			</div>
			</div>
			</div>
		</article>
	);
}


const getPostBySlug = gql`
	query MyQuery( $slug: String ) {
		postBy(uri: $slug) {
			id
			title
			date
			featuredImage {
				node{
				srcSet
				mediaItemUrl
				altText
				}
			}
			content
			tags {
				 nodes {
					name
					link
					slug
				}
			}
			categories {
				nodes {
				  categoryId
				  name
				  link
				  slug
				}
			  }
			  author {
				node {
				  name
				  id
				}
			  }
		}
	}
`;

export default graphql(getPostBySlug, {
	options: (props) => {
		const slug = props.slug;

		return {
			variables: {
				slug
			}
		}
	}
})(SinglePage);
