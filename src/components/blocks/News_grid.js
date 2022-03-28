import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from "@reach/router";
import * as Icon from 'react-bootstrap-icons';
import Loading from './../../components/Loading'
//import dateFormat from "dateformat";
import Moment from 'react-moment';
const News_Grid = ( props ) => {
    if (!props.data ) return false;
	const loading = props.data.loading;
	const post = props.data.posts;
    const gridno=props.gridno;
    //console.log(gridno);
	if (loading) {
		return <Loading />;
	}
    if(props.limit===3){var c=4;}else{ c=6;}
    if(gridno <= 2){var dis = "d-none";}else{dis='';}
   
    if (gridno===1){
        return (
            <div className="container mt-3 pe-0">
             {post.edges.map(item => {
                         return (<div className="row gridrow" key={item.node.id}>
                                <div className={"col-12 col-md-3 px-0"}>
                                    <img className="article-image rounded"
                    alt={item.node.featuredImage.node.altText}
                    src={item.node.featuredImage.node.sourceUrl}
                    srcSet={item.node.featuredImage.node.srcSet}
                />
                </div><div className={"col-12 col-md-9 pe-0 lh-sm"}>
                <div className={"article-meta mb-2 mt-2 "+ dis} ><span className="d-inline"><Icon.Calendar2Check /> <Moment format="dddd, mm MM yyyy" date={item.node.date} /></span></div>
                <Link key={item.node.id} className="unstyle-link fs-6"
                        to={`/${item.node.slug}`}>
                        {item.node.title} 
                    </Link>
                    </div> </div>
                            );
                        })}
                    
                </div>
           
        );
    }else{return (
        <div className="container mt-3">
			<div className="row">
				{post.edges.map(item => {
                 	return (
                            <div className={"col-12 col-md-" +c} key={item.node.id}>
                                <img className="article-image rounded"
				alt={item.node.featuredImage.node.altText}
				src={item.node.featuredImage.node.sourceUrl}
				srcSet={item.node.featuredImage.node.srcSet}
			/>
            <div className={"article-meta mb-2 mt-2 "+ dis} ><span className="d-inline"><Icon.Calendar2Check /> <Moment format="dddd, mm MM yyyy" date={item.node.date} /></span></div>
            <Link key={item.node.id} className="unstyle-link"
					to={`/${item.node.slug}`}>
					{item.node.title}
				</Link>
				</div>
			);
		})}
                
            </div>
		</div>
	);
    }
}

const getlatestPosts = gql`
	query MyQuery( $slug : Int,$offset : Int! ) {
		posts(where: { offsetPagination: { offset:$offset, size: $slug } }){
            edges {
                node {
                  date
                  title
                  link
                  id
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
})(News_Grid);
