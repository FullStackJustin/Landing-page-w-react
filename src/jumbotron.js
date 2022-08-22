import React from "react";
export const Jumbotron = () => {
	return (
		<div className="jumbotron" style={{textAlign:'left', padding:'25px', backgroundColor: 'darkgrey', margin: '2% 8% 0% 8%'}}>
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<h5 className="my-4"></h5>
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};