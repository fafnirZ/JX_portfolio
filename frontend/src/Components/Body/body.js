import React, { Component } from 'react'
import {texts} from './text'
import './body.css'



class Body extends Component {

	render() {
		return ([
			<div>
			{
				texts.map((item,index) => {
					return (
						<div>
							<h2 className={item.title_style}>
								{item.title}
							</h2>
							<p className={item.body_style}>
								{
									item.body.split('\n').reduce((total, line) => [total, <br/>, line])
								}
							</p>
							<div>
								<img src={item.image} className="image_icon"/>
							</div>
						</div>	
						)
				})

			}
			</div>

		])
	}


}

export default Body