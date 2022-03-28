import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from "@reach/router";
import * as Icon from 'react-bootstrap-icons';
import Loading from './../../components/Loading'
//import dateFormat from "dateformat";
import Moment from 'react-moment';
import Newsgrid from './../../components/blocks/News_grid';
import {Helmet} from "react-helmet";
import {FacebookShareButton,FacebookIcon,EmailIcon,TelegramIcon,TwitterIcon,WhatsappIcon,TelegramShareButton,TwitterShareButton,WhatsappShareButton,EmailShareButton} from 'react-share';

const SinglePost = ( props ) => {

	const loading = props.data.loading;
	const post = props.data.postBy;

	if (loading) {
		return <Loading />;
	}
	
	const sourceUrl= post.seo.opengraphImage;

	if(( sourceUrl  === null)){
		var src=post.featuredImage.node.sourceUrl;
	}else{
	
		src=post.seo.opengraphImage.sourceUrl;
		}
		const metaDesc=post.seo.metaDesc;
		//console.log(src);
	return (
			<article className="article">
			<div className="container">
			 <Helmet>
			<meta name="description" content={metaDesc} />
			<meta property="og:type" content="Article" />
			<meta name="og:title" property="og:title" content={post.title} />
			<meta name="og:description" property="og:description" content={metaDesc}  />
			<meta property="og:site_name" content="talkies.online" />
			
			<meta name="twitter:card" content={metaDesc} /> 
			<meta name="twitter:title" content={post.title}  />
			<meta name="twitter:description" content={metaDesc} />
			<meta name="twitter:site" content="talkies.online" />
			<meta name="twitter:creator" content="talkies" />
			<meta property="og:updated_time" content= {post.date}/> 
			<meta property="og:image" content={src} /> 
			<meta property="og:image:width" content="800"/>
			<meta property="og:image:height" content="600"/>	
			<meta name="twitter:image" content={src}/>				
			<meta property="fb:app_id" content="233374164270567"/>
			<meta property="article:publisher" content="https://www.facebook.com/talkiesonline"/>
			<link rel="canonical" href={`https://talkies.online/${props.slug}`} />
			<meta property="og:url" content={`https://talkies.online/${props.slug}`}/>  
			<meta name="keywords" content={post.tags.nodes.map(x => x.name).join(", ")+', talkies,film news, malayalam, bollywood,tollywood,trailer,teaser'} />
			</Helmet>
				<h1 className="article-title">{post.title}</h1>
				<div className="article-meta mb-3 border-top border-bottom pt-2 pb-2 border-secondary">
					<span className="d-inline"><Icon.Calendar /> <Moment format="dddd, mm MM yyyy" date={post.date} /></span>
				{post.categories.nodes && (
				<div className="category-listing d-inline bg-black"><Icon.UiChecksGrid className="mx-3"/> 
					{
					post.categories.nodes.map(category => {
						return (
							<Link key={category.categoryId}
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
				<div className="col-12 mt-3 mb-3">Share this: 	<FacebookShareButton  url={`https://talkies.online/${props.slug}`} quote={post.title}>
    <FacebookIcon logofillcolor="white" size={32}/></FacebookShareButton>
<TwitterShareButton url={`https://talkies.online/${props.slug}`} quote={post.title}><TwitterIcon logofillcolor="white" size={32} /></TwitterShareButton>
<EmailShareButton url={`https://talkies.online/${props.slug}`} subject={post.title} body={post.excerpt}><EmailIcon logofillcolor="white" size={32} /></EmailShareButton>
<TelegramShareButton url={`https://talkies.online/${props.slug}`} title ={post.title}><TelegramIcon logofillcolor="white" size={32} /></TelegramShareButton>
<WhatsappShareButton url={`https://talkies.online/${props.slug}`} title ={post.title}><WhatsappIcon logofillcolor="white" size={32} /></WhatsappShareButton>
</div>
			<div className=" malayalam pt-3">
				<div dangerouslySetInnerHTML={{ __html: post.content}}></div>
				{ post.tags.nodes && (
				<span className="post-listing-author"><Icon.Tags />
					{ post.tags.nodes.map(tags => {
						var name= tags.name.replace(/\s+/g, '-');
						return (
							<Link key={tags.id}
					className="unstyle-link bg-secondary p-1 px-2 mx-1 rounded-pill"
					to={`/tag/${name}`}>
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
					id
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
			  seo {
				breadcrumbs {
				  text
				  url
				}
				metaDesc
				metaKeywords
				opengraphImage {
				  sourceUrl
				}
				opengraphDescription
				canonical
				opengraphAuthor
				opengraphPublishedTime
				opengraphSiteName
				opengraphPublisher
				opengraphTitle
				opengraphUrl
				opengraphType
				opengraphModifiedTime
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
})(SinglePost);
