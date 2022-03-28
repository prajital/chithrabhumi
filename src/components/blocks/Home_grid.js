import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from "@reach/router";
import * as Icon from 'react-bootstrap-icons';
import Loading from './../../components/Loading'
//import dateFormat from "dateformat";
import Moment from 'react-moment';
const Home_Grid = ( props ) => {
    if (!props.data ) return false;
	const loading = props.data.loading;
	const post = props.data.posts;
    const gridno=props.gridno;
    //console.log(post);
	if (loading) {
		return <Loading />;
	}
   
    if (gridno===1 && props.limit===1){
        return (
            <div className="pe-0">
             {post.edges.map(item => {
                         return (<div key={item.node.id}>
                                <img className="article-image rounded"
                    alt={item.node.featuredImage.node.altText}
                    src={item.node.featuredImage.node.sourceUrl}
                    srcSet={item.node.featuredImage.node.srcSet}
                />
                <div className={"article-meta mb-2 mt-2 "} >
                    <span className="d-inline"><Icon.Calendar2Check /> <Moment format="dddd, mm MM yyyy" date={post.date} /></span>
                </div>
                <Link key={item.node.id} className="unstyle-link fs-3 malayalam"
                        to={`/${item.node.slug}`}>
                        {item.node.title} 
                    </Link></div>
                                     );
                        })}
                    
                </div>
           
        );
    }else if(gridno===1 && props.limit!==1 && props.excerpt === 0){
    return (
        
			<div className="row">
				{post.edges.map(item => {
                 	return (
                            <div className={"row "} key={item.node.id}><div className="col-md-4 col-12 pe-0">
                                <img className="article-image rounded"
				alt={item.node.featuredImage.node.altText}
				src={item.node.featuredImage.node.sourceUrl}
				srcSet={item.node.featuredImage.node.srcSet}
			/></div>
            <div className={"col-md-8 col-12 pe-0 malayalam homerightblk"}>
           
            <Link key={item.node.id}
					className="unstyle-link titlelink"
					to={`/${item.node.slug}`}>
					{item.node.title} 
				</Link>
                
				</div></div>
						);
					})}
                
            </div>
		
	);
}else if(gridno===1 && props.limit!==1 && props.excerpt === 1){
    return (
        
        <div className="row">
            {post.edges.map(item => {
                 return (
                        <div className={"row pt-4"} key={item.node.id + 1}><div className="col-md-4 col-12 pe-0">
                            <img className="article-image rounded"
            alt={item.node.featuredImage.node.altText}
            src={item.node.featuredImage.node.sourceUrl}
            srcSet={item.node.featuredImage.node.srcSet}
        /></div>
        <div className={"col-md-8 col-12 pe-0 malayalam"}>
       
        <Link key={item.node.id+0}
                className="unstyle-link titlelink fw-bold fs-5"
                to={`/${item.node.slug}`}>
                {item.node.title} 
            </Link>
            <div className="post-listing-excerpt pt-3 malayalam" dangerouslySetInnerHTML={{ __html: item.node.excerpt.substr(3,200)}}/>
            <Link key={item.node.id}
					className="unstyle-link eng_font p-1 text-warning"
					to={`/${item.node.slug}`}>Read More &raquo;</Link>
            </div></div>
                    );
                })}
            
        </div>
    
);
}
}

const getlatestPosts = gql`
	query MyQuery( $slug : Int! ,$offset : Int!) {
        posts(where: { offsetPagination: { offset:$offset, size: $slug } }){
            edges {
                node {
                  date
                  id
                  title
                  excerpt
                  slug
                  featuredImage {
                    node {
                      altText
                      sourceUrl
                      srcSet
                    }
                  }
                  
                }
              }
            }
        }
	
`;

export default graphql(getlatestPosts, {
	options: (props) => {
		const slug = props.limit;
        const offset =props.offset;
        return {
			variables: {
				slug,
                offset
                
			}
		}
	}
})(Home_Grid);
