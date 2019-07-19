import React, {Component} from 'react';
import Classes from "./components/classes/index";
import Items from "./components/items/index";
import Champions from "./components/champions/index";
import NavBar from "./components/navbar/index";
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeTab: 0
		};
	}

	// scroll the page to the selected tabs content
	showTabContent(tabIndex) {

		console.log("showing tab content for tab: " + tabIndex);
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
		console.log("scroll to el");
		console.log(scrollToEl);
		console.log(boundingBox);
		window.scrollTo(0, boundingBox.y);
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
		if((clientRect.y > screenHeight) || (clientRect.bottom <= 0)) {
			visiblePercentage = 0;
		}
		// otherwise, it is partially visible.
		else {
			let visibleHeight = screenHeight - Math.abs(clientRect.y);
			visiblePercentage = visibleHeight / screenHeight;
		}

		return visiblePercentage;
	}


	// checks which section (items, classes, champions) is most in view (percentage)
	// and sets it as the active section on navbar
	handleScroll() {
		console.log("handling scroll");
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
		<div className="App">
			<NavBar activeTab={this.state.activeTab} onSelectTab={(tabIndex) => this.showTabContent(tabIndex)} onScroll={() => this.handleScroll()}/>
			<div className={"content"}>
				<Items id={"items"}/>
				<Classes id={"classes"}/>
				<Champions id={"champions"}/>
			</div>
		</div>
		);
	}
  
}

export default App;
