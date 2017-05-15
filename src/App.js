import React, { Component } from 'react';
import styles from './App.css'

class App extends Component {

	constructor(props) {
	    super(props);
        this.state = {Requisite:{},Advice:{Name:'',img:'',link:''},Mode:'Advice'};
	}

	pushRequisite(){
		console.log(this.state.Requisite[0])	
		console.log(this.state.Requisite[1])
		this.setState({Advice:{
			Name:'HandMake Rose',
			img:'http://www.zhidiy.com/uploadfile/201304/17/04155586.jpg',
			link:'http://www.zhidiy.com/zhimeigui/5529.html'
		}})
	}
	getAdvice(){
		this.pushRequisite()
	}

	returnFeature(requisite){
		this.setState({Requisite:requisite})
	}

	render() {
		return(
			<div className={styles.App}>
                <h1> Gift Advisor </h1>
				<FeatureForm returnFeature={this.returnFeature.bind(this)}/>
				<div style={{height:"60px"}}>
					<button className={styles.PickGiftButton} onClick={this.getAdvice.bind(this)}> Pick a Gift </button>
				</div>
				{
					this.state.Advice.img !== '' ? 
					<Advice name={this.state.Advice.Name} img={this.state.Advice.img} link={this.state.Advice.link}/>
					: null
					}
				}
			</div>
		);
	
	};
};

class FeatureForm extends Component {

	constructor(props) {
	    super(props);
        this.state = {feature:[
			{ Name:"Holliday",Choice:["Mother's Day","Father's Day","Valentine's Day"],idx:0},
			{ Name:'Type',Choice:["HandMake","Resturant","Shopping"],idx:0}
		]};
	}

	returnFeature(newFeature){
		let summary=[]
		for(let n=0;n<newFeature.length;n++){
			summary=summary.concat({Name:newFeature[n].Name, Choice:newFeature[n].Choice[newFeature[n].idx]})
		}
		this.props.returnFeature(summary)
	}
	
	componentDidMount(){
      this.returnFeature(this.state.feature)
   	}

	ChangeIdx(FeatureIdx, ChoiceIdx){
		let newFeature=this.state.feature
		newFeature[FeatureIdx].idx=ChoiceIdx
		this.returnFeature(newFeature);
		this.setState({feature:newFeature})
	}

	render(){ 
		return(
			<div className={styles.FeatureForm}>
				{
					this.state.feature.map((item,idx) => (
						<ChoiceBar key={item.Name} Name={item.Name} Choice={item.Choice} ChangeIdx={this.ChangeIdx.bind(this,idx)}/>
               		))
				}
			</div>
		)
	};

};

class ChoiceBar extends Component{
	constructor(props) {
	    super(props);
        this.state = {Name:this.props.Name,Choice:this.props.Choice};
	}

	render(){ 
		return(
			<div className={styles.ChoiceBar}>
				<div className={styles.FeatureName}>
					 <span style={{position:'relative',top:'3px'}}> {this.state.Name}</span> 
				</div>
				<FeatureList Choice={this.state.Choice} ChangeIdx={this.props.ChangeIdx}/>
			</div>
		)
	};
};

class FeatureList extends Component{
	constructor(props) {
	    super(props);
        this.state = {choice:this.props.Choice,idx:0};
	}

	nextChoice(){
		let newIdx=(this.state.idx + 1)%this.state.choice.length
		this.setState({idx:newIdx})
		this.props.ChangeIdx(newIdx)
	}

	prevChoice(){
		let newIdx=(this.state.idx + this.state.choice.length - 1)%this.state.choice.length
		this.setState({idx:newIdx})
		this.props.ChangeIdx(newIdx)
	}

	render(){ 
		return(
				<div className={styles.FeatureList}>
					<button style={{float:"left"}} onClick={this.prevChoice.bind(this)}>&#9668;</button>
						{this.state.choice[this.state.idx]}
					<button style={{float:"right"}} onClick={this.nextChoice.bind(this)}>&#9658;</button>
				</div>
		)
	};
};

class Advice extends Component{
	constructor(props) {
	    super(props);
        this.state = {};
	}

	render(){ 
		return(
				<div className={styles.AdviceBlock}>
					<form>
						<div> {this.props.name} </div>
						<img src={this.props.img}/>
						<div> <a href={this.props.link}> link </a> </div>
					</form>
				</div>
		)
	};
}

export default App;
