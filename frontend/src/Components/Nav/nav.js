import React, {useEffect} from 'react'
import { MenuItems, MenuIcons } from './MenuItems'
import {Button} from '../button'
import {Link, animateScroll as scroll, scrollSpy} from "react-scroll"
import './nav.css'


function Navbar () {
	const [clicked, setClicked] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);
	const [scrollY, setScrollY] = React.useState(window.scrollY);
	



	const handleClick = () => {
		setClicked(!clicked);
	};

	const handleScroll = () => {
		const offset = window.scrollY;
		setScrollY(offset);
		if(offset > 100) {
			setScrolled(true);
		}
		else {
			setScrolled(false);
		}
	}

	//initialise on mount
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})


	let navbarClasses = ['NavbarItems'];
	//whenever scroll changes
	if(scrolled) {
		navbarClasses.push('sticky')
	
	};





	return (
		<nav id='navbar' className= {navbarClasses.join(" ")}>
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
							<a className={item.cName} onClick={()=>setScrolled(true)}>
								<Link 
									to={item.url}									    
									spy={true}
								    smooth={true}
								    offset={-90}
								    duration={500}
								>
								{console.log(scrollY)}
								{console.log(navbarClasses)}
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