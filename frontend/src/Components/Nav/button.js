import React, {useEffect} from 'react'
import { MenuItems, MenuIcons } from './MenuItems'
import {Link, animateScroll as scroll, scrollSpy} from "react-scroll"
import './button.css'

function To_top() {

	const [scrolled, setScrolled] = React.useState(false);

	const handleClick = () => {
		scroll.scrollToTop();
	};

	const handleScroll = () => {
		const offset = window.scrollY;

		if(offset > 100) {
			setScrolled(true);
		}
		else {
			setScrolled(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})
	
	let buttonClasses = ['fas fa-caret-square-up'];
	if(scrolled) {
		buttonClasses.push('sticky')
		console.log(buttonClasses)
	}
	

	return (
		<i class={buttonClasses.join(" ")}>
		</i>
	)


}
export default To_top;

