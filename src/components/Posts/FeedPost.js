import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './../../components/Loading'
//import dateFormat from "dateformat";
import XMLViewer from 'react-xml-viewer'
import beautify from "xml-beautifier";

const FeedPost = ( props ) => {

	const loading = props.data.loading;
	const post = props.data.posts;
//console.log(post);
	if (loading) {
		return <Loading />;
	}
	var xml='';
	let c = 0;
	if (post.edges) {return (<div>
		{post.edges.map(post => {
			//const { post } = item;
			var today = new Date();
			if(c===0){xml=xml+'<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/"><channel><title>Talkies</title><atom:link href="https://talkies.online/feed/" rel="self" type="application/rss+xml" /><link>https://talkies.online</link><description>exclusively for movies</description><lastBuildDate>'+(today, "dddd, mmmm dS, yyyy, h:MM:ss TT")+'</lastBuildDate><language>en-US</language><sy:updatePeriod>	hourly	</sy:updatePeriod><sy:updateFrequency>	1	</sy:updateFrequency><generator></generator><image><url>https://talkies.online/favicon.ico </url><title>Talkies</title><link>https://talkies.online</link><width>32</width><height>32</height></image> ';}
			else{xml='';}
			c=c+1;
			xml= xml +'<item><title>'+ post.node.title+'</title>';
			xml= xml + '<link>https://talkies.online/'+ post.node.slug +'</link><dc:creator><![CDATA[eparu]]></dc:creator>';
			xml= xml + '<pubDate>'+(post.node.date, "dddd, mmmm dS, yyyy, h:MM:ss TT") +'</pubDate>';
			post.node.categories.edges.map(category => {
			return (xml=xml+'<category><![CDATA['+category.node.name+']]></category>');
			})
			xml=xml+'<description><![CDATA['+post.node.excerpt +']]></description>';
			xml=xml+'<content:encoded><![CDATA['+post.node.content +']]></content:encoded>';
			xml=xml+'<enclosure url="'+post.node.featuredImage.node.sourceUrl+'" />';
			xml= xml + '</item>';
			if(c===10){xml=xml+'</channel></rss>'}
			return(beautify(xml))
		})}</div>
	)
	}
	xml=xml+'</channel></rss>';
	const customTheme = {
		attributeKeyColor: "#fff",
		attributeValueColor: "blue",
		tagColor:"#fff",
		textColor:"#fff",
		separatorColor:"#f2f2f2"
	  };
	return (
		<XMLViewer xml={xml}  theme={customTheme}/>

	);
}

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
			content
			slug
			categories {edges{
			  node {
				categoryId
				name
			 } }
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
export default graphql(getPosts)(FeedPost);
