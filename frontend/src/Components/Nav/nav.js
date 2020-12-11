import React, { Component } from 'react'
import { MenuItems, MenuIcons } from './MenuItems'
import {Button} from '../button'
import {Link, animateScroll as scroll} from "react-scroll"
import './nav.css'


class Navbar extends Component {
	state = { clicked: false };
	
	handleClick = () => {
		this.setState({clicked : !this.state.clicked})
	}

	render() {
		return (
			<nav className= "NavbarItems">
				<h1 className="navbar-logo">Jacky Xie<i className="fab fa-react"></i></h1>
				<div className= "menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

				</div>

				<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
			
					{MenuIcons.map((item, index) => {
						return (
							<li className={item.cName}>
								<a className={item.Icon} href={item.url}/>
							</li>
							)

						})

					}

					{MenuItems.map((item, index) => {
						return (
							<li>
								<a className={item.cName}>
									<Link 
										to={item.url}									    spy={true}
									    smooth={true}
									    offset={-70}
									    duration={500}
									>
									{item.title}
									</Link>
								</a>
							</li>
							)

						})
					} 

				</ul>

			</nav>

		)
	}
}

export default Navbar