import React, {Component} from 'react';
import Classes from "./components/classes/index";
import ItemsWrapper from "./components/itemsWrapper/index";
import ChampionsWrapper from "./components/championsWrapper/index";
import NavBarWrapper from "./components/navbarWrapper/index";
import './index.css';

class Site extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeTab: 0
		};

		console.log(this.props.theme);
	}

	// scroll the page to the selected tabs content
	showTabContent(tabIndex) {
		let scrollToEl;

		switch(tabIndex) {
			case 0:
				scrollToEl = document.getElementById("items");
				break;
			case 1:
				scrollToEl = document.getElementById("classes");
				break;
			case 2:
				scrollToEl = document.getElementById("champions");
				break;
			default:
				scrollToEl = document.getElementById("items");
		}

		let boundingBox = scrollToEl.getBoundingClientRect();
		window.scrollTo(0, window.scrollY + boundingBox.y);
	}

	// returns how visible an elemnt is horizontally as a percentage.
	// For example, if an element is scrolled halway off the screen, 
	// its percentage would be 50%.
	_getPercentageOfHorizontalVisibleEl(el) {
		let clientRect = el.getBoundingClientRect();
		let screenHeight = window.innerHeight;

		let visiblePercentage;

		// if the el is completely below what is visible, or completely above
		// then 0% of it is visible.
		if((clientRect.bottom < 0) || (clientRect.y > screenHeight)) {
			visiblePercentage = 0;
		}
		// div takes up entire screen view
		else if(clientRect.y <= 0 && clientRect.bottom > screenHeight) {
			visiblePercentage = 1;
		}
		// otherwise, it is partially visible.
		// TODO clean this up
		else {
			let visibleHeight;
			if(clientRect.y <= 0) {
				visibleHeight = clientRect.height - Math.abs(clientRect.y);
			}
			else {
				visibleHeight = screenHeight - clientRect.y;
			}

			visiblePercentage = visibleHeight / screenHeight;
		}
		return visiblePercentage;
	}


	// checks which section (items, classes, champions) is most in view (percentage)
	// and sets it as the active section on navbar
	handleScroll() {
		let items = document.getElementById("items");
		let classes = document.getElementById("classes");
		let champions = document.getElementById("champions");

		let els = [items, classes, champions];
		let maxVisiblePercentage = 0;
		let maxVisiblePercentageTabIndex = 0;

		for(let i = 0, len = els.length; i < len; i++) {
			let elVisiblePercentage = this._getPercentageOfHorizontalVisibleEl(els[i]);
			if(elVisiblePercentage > maxVisiblePercentage) {
				maxVisiblePercentage = elVisiblePercentage;
				maxVisiblePercentageTabIndex = i;
			}
		}

		if(maxVisiblePercentageTabIndex != this.state.activeTab) {
			this.setState({
				activeTab: maxVisiblePercentageTabIndex
			});
		}
		
	}

	render() {
		return (
			<div className={"site " + (this.props.theme === "DARK" ? "dark-theme":"light-theme")}>
				<NavBarWrapper activeTab={this.state.activeTab} onSelectTab={(tabIndex) => this.showTabContent(tabIndex)} onScroll={() => this.handleScroll()}/>
				<div className={"content"}>
					<ItemsWrapper id={"items"}/>
					<Classes id={"classes"}/>
					<ChampionsWrapper id={"champions"}/>
				</div>
			</div>
		);
	}
  
}

export default Site;
