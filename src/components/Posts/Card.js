import React from 'react';
import { Link } from "@reach/router";

const Card = ( props ) => {

	const { post } = props;

	return(<div className="row catblock pb-3 pt-3">
		<div className="col-md-4 col-12">
			<Link to={`/${post.slug}`}>
				<img
					alt={post.featuredImage.node.altText}
					src={post.featuredImage.node.sourceUrl}
					srcSet={post.featuredImage.node.srcSet}
				/>
			</Link>
		</div>
		<div className="col-md-8 col-12">
			{post.categories.nodes && (
				<div className="category-listing rounded-pill px-2 mb-2">
					{post.categories.nodes.map(category => {
						return (
							<Link
					className="unstyle-link text-black"
					to={`/category/${category.slug}`}>
					{category.name}
				</Link>
						
						);
					})}
				</div>
			)}
			<h2 className="post-listing-title malayalam fs-4">
				<Link
					className="unstyle-link"
					to={`/${post.slug}`}>
					{post.title}
				</Link>
			</h2>

			<div className="post-listing-excerpt pt-3" dangerouslySetInnerHTML={{ __html: post.excerpt.substr(3,140)}}/>

			{ post.author && (
				<span className="post-listing-author">
					By: <Link
						to={`/author/${post.author.id}`}>
						{post.author.name}
					</Link>
				</span>
			)}
			<Link key={post.id}
					className="unstyle-link eng_font border border-secondary p-1"
					to={`/${post.slug}`}>Read More &raquo;</Link>
		</div>
		</div>
	);
}

export default Card;
