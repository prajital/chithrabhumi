import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loading from './../../components/Loading';

const Block_page = ( props ) => {
    if (!props.data ) return false;
    
	const loading = props.data.loading;
	const post = props.data.nodeByUri;
//console.log(post);
	if (loading) {
		return <Loading />;
	}
     
    return (
        <div className="mt-3">
			
			<div className="row"> <div className="col-md-12 col-12">
      <div dangerouslySetInnerHTML={{ __html: post.content}}></div>
      </div>
       </div>    
            
				
		</div>
	);
}
const getpage = gql`
	query MyQuery( $pagename : String! ) {
		nodeByUri(uri: $pagename) {
      ... on Page {
        id
        content
      }
    }
        }
	
`;

export default graphql(getpage, {
	options: (props) => {
		
        const pagename=props.pagename;
       
        return {
			variables: {
			
        pagename
               
			}
		}
	}
})(Block_page);
