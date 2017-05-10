import React, { Component } from 'react';
import styles from './App.css'

class App extends Component {

	constructor(props) {
	    super(props);
        this.state = {};
	}

	render() {
		return(
			<div className={styles.App}>
                <h1> Gift Advisor </h1>
				<FeatureForm/>
				<button className={styles.PickGiftButton}> Pick a Gift </button>
			</div>
		);
	
	};
};

class FeatureForm extends Component {

	constructor(props) {
	    super(props);
        this.state = {};
	}

	render(){ 
		return(
			<div className={styles.FeatureForm}>
				<ChoiceBar/>
				<ChoiceBar/>
			</div>
		)
	};
};

class ChoiceBar extends Component{
	constructor(props) {
	    super(props);
        this.state = {};
	}

	render(){ 
		return(
			<div className={styles.ChoiceBar}>
				<div className={styles.FeatureName}>
					 <span style={{position:'relative',top:'3px'}}> Holliday</span> 
				</div>
				<FeatureList/>
			</div>
		)
	};
};

class FeatureList extends Component{
	constructor(props) {
	    super(props);
        this.state = {};
	}

	render(){ 
		return(
				<div className={styles.FeatureList}>
					<button style={{float:"left",marginLeft:"5%"}}>&#9668;</button>
					<button style={{float:"right",marginRight:"5%"}}>&#9658;</button>
				</div>
		)
	};
};

export default App;
