import React from 'react'

const Item = ({ link, icon, text }) => (
	<li>
		<a href={link} className={`icon fa-${icon}`}>
			<span class="label">{text}</span>
		</a>
	</li>
)

const Footer = () => {
	return (
		<div id="footer">
			<div className="inner">
				<ul class="icons">
					<Item
						link="https://github.com/yuritoledo"
						icon='github'
						text='Github'
					/>
					<Item
						link="https://medium.com/@yuriwtoledo"
						icon='medium'
						text='Medium'
					/>
					<Item
						link="mailto:yuriwtoledo@gmail.com"
						icon='envelope'
						text='Email'
					/>
				</ul>
			</div>
		</div>
	)
}

export default Footer
