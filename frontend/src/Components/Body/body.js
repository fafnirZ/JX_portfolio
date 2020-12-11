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
							<h1>
								{item.title}
							</h1>
							<p>
								{
									item.body.split('\n').reduce((total, line) => [total, <br/>, line])
								}
							</p>
						</div>	
						)
				})

			}
			</div>,
			<div>
				<img src="macsublime.jpg"/>
			</div>
		])
	}


}

export default Body