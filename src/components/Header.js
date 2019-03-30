import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => {
	return (
		<header id="header">
			<div className="inner">
				<a href="#" className="image avatar">
					<img src={avatar} alt="" />
				</a>
				<h1>
					<strong>Hi, my name is Yuri</strong>, a front-end dev<br />
					moved to improve the relationship among humans and machines<br />
				</h1>
			</div>
			<Footer />
		</header>
	)
}

export default Header
