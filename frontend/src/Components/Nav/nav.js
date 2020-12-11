import React, {useEffect} from 'react'
import { MenuItems, MenuIcons } from './MenuItems'
import {Button} from '../button'
import {Link, animateScroll as scroll, scrollSpy} from "react-scroll"
import './nav.css'


function Navbar () {
	const [clicked, setClicked] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);



	const handleClick = () => {
		setClicked(!clicked);
	};

	const handleScroll = () => {
		const offset = window.scrollY;
		if(offset > 200) {
			setScrolled(true);
		}
		else {
			setScrolled(false);
		}
	}


	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})


	return (
		<nav id='navbar' className= "NavbarItems">
			<h1 className="navbar-logo">Jacky Xie<i className="fab fa-react"></i></h1>
			<div className= "menu-icon" onClick={handleClick}>
				<i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

			</div>

			<ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
		
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

export default Navbar