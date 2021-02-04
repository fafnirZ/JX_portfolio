import React, { Component } from 'react'
import {texts} from './text'
import './body.css'



function Body()  {
	const contains_title = (item) =>  {
		if(item.title){
			return(
				<h2 className={item.title_style} id={item.id}>
					{item.title}
				</h2>
			)
		}
	}

	const contains_body = (item) => {
		if(item.body) {
			return(
			<p className={item.body_style}>
				{
					item.body.split('\n').reduce((total, line) => [total, <br/>, line])
				}
			</p>
			)
		}
	};

	const contains_img = (item) => {
		if(item.image) {
			return(
				<div>
					<img src={item.image} className={item.image_style}/>
				</div>
			)
		}
	};

	const contains_children = (item) => {
		if(item.children) {
			return item.children.map((i, index) => {
				return (
					<div>
						{contains_title(i)}
						{contains_body(i)}
						{contains_img(i)}
					</div>
				)
			})
		}
	}


	return ([
		<div className='main-body'>
		{
			texts.map((item,index) => {
				return (
					<div className={item.container}>

						{contains_title(item)}
						{contains_body(item)}
						{contains_img(item)}
						{contains_children(item)}
						
					</div>	
					)
			})

		}
		</div>

	])

}

export default Body