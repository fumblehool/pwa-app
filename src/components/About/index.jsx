import React, { Component } from 'react';

import { Grid, Row } from 'react-bootstrap';


class About extends Component {
	render(){
		return (
			<Grid>
				<Row>
			<div className="row">
        <div className="col-md-12 about-wrapper">
          <h3>About IPL</h3>
          <p>The Indian Premier League (IPL), officially Vivo Indian Premier League for sponsorship reasons, is a 
					professional Twenty20 cricket league in India contested during April and May of every year by teams 
					representing Indian cities and some states. The league was founded by the Board of Control for Cricket 
					in India (BCCI) in 2008, and is regarded as the brainchild of Lalit Modi, the founder and former 
					commissioner of the league. IPL has an exclusive window in ICC Future Tours Programme.</p>

					<p>The IPL is the most-attended cricket league in the world and in 2014 ranked sixth by average attendance 
						among all sports leagues. In 2010, the IPL became the first sporting event in the world to be broadcast 
						live on YouTube. The brand value of IPL in 2017 was US$5.3 billion, according to Duff & Phelps. According 
						to BCCI, the 2015 IPL season contributed ₹11.5 billion (US$182 million) to the GDP of the Indian economy.
					</p>
					<p>There have been ten seasons of the IPL tournament. The current IPL title holders are the Mumbai Indians, 
						who won the 2017 season.</p>

        </div>
      </div>
	  </Row>
		</Grid>
		);
	}
}

export default About;