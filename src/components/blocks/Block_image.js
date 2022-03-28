import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from "@reach/router";
import Loading from './../../components/Loading'

const BlockImage = ( props ) => {
    if (!props.data ) return false;
    
	const loading = props.data.loading;
	const post = props.data.posts;
    //console.log(this.props.categoryid.join(", "));
	if (loading) {
		return <Loading />;
	}
     
    return (
        <div className="container mt-3">
			
			<div className="row">
				{post.edges.map(item => { let urll=item.node.featuredImage.node.sourceUrl;
                 	return (
                        <div className='col-6 col-sm-3 col-md-2' key={item.node.id}> 
                         <Link key={item.node.id}
                        className="unstyle-link"
                        to={`/${item.node.slug}`}>
                        <div className="trailerimg w-100 overlay-item overlay-effect" style={{
              backgroundImage:`url(${urll})`
              }}>
               <div className="mask malayalam text-light" >{item.node.title}</div>
               </div>
               </Link>
              </div>    
               );
					})}
                
            </div>
		</div>
	);
}
const getlatestPosts = gql`
	query MyQuery( $slug : Int!,$limit : Int! ) {
		posts(where: {categoryId: $slug}, first: $limit) {
            edges {
                node {
                  title
                  slug
                  id
                  featuredImage {
                    node {
                      
                      sourceUrl
                      
                    }
                  }
                }
              }
            }
        }
	
`;

export default graphql(getlatestPosts, {
	options: (props) => {
		const slug =props.categoryid;
        const limit=props.limit;
       
        return {
			variables: {
				slug,
                limit
               
			}
		}
	}
})(BlockImage);
