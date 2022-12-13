import React from 'react';
import pic1 from './images/online_learning1.jpg';
import pic2 from './images/online_library2.jpg';
import pic3 from './images/online_library3.jpg';
import pic4 from './images/online_library4.jpg';
import './home.css'
/**
 * home page the first page during hosting website
 * @returns 
 */
function Home() {
	return (
		<>
			<div id="banner">
				<div ><img alt="#" src={pic1} height="300px" /></div>
			</div>
			<div id="featured-content">
				<div id="column1">

					<p><img alt="#" src={pic2} width="300" height="150" /></p>
					<h4>A digital library, also called an online library, an internet library, a digital repository, or a digital collection is an online database of digital objects that can include text, still images, audio, video, digital documents, or other digital media formats or a library accessible through the internet</h4>

				</div>
				<div id="column2">

					<p><img alt="#" src={pic3} width="300" height="150" /></p>
					<h4>With the use of a digital library, every reader or student can learn on their own pace and do not have to worry about not having access to the required resources needed to learn since a digital library is always available and easily accessible through any of your personal mobile devices such as your tablets, smartphones or laptop.</h4>

				</div>
				<div id="column3">

					<p><img alt="#" src={pic4} width="300" height="150" /></p>
					<h4>Digital library to a conventional one because most management software for digital libraries improves the interactions between the readers and administrators in real time  and also you do not have to be physically present to ask any questions as you can easily interact with the administrators online.</h4>

				</div>
			</div>
		</>
	)
}

export default Home;