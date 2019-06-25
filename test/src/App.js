import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {getitem} from './actions'
import axios from 'axios';
import {bindActionCreators} from 'redux'

import {Link}from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component{
componentDidMount(){

axios.get('https://www.anapioficeandfire.com/api/characters/').then(
  res=>{
    console.log(res.data);
    this.setState({data:res.data})

    }
 )

  }
 constructor(Props){
    super(Props)
     this.state={
       data:null

     }



 }




render(){
if(this.state.data){
  return (
    <div className="App">

    <h1>Characters</h1><br/>

   <div  className="char"  >{this.state.data.map((item)=>{
      return<Link to= {item.aliases[0]}><div className="box" onClick={()=>{

         this.props.getitem(item)

       }} key={item.aliases[0]}> <h2>{item.aliases[0]}</h2></div></Link>



    })}</div>










    </div>
  );

}
return<div>Loading..</div>


}
}
function mapDispatchToProps(dispatch){

return bindActionCreators({getitem},dispatch)



}
export default connect(null,mapDispatchToProps)(App);
