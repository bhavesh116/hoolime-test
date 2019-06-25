import React ,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios';

class Details extends Component{
  componentDidMount(){

    var url = this.props.check.map((data)=>{
      return data.url
    })


    axios.get(url).then(res=>{
       this.setState({data:res.data})
       console.log(res.data);
    })
  }
  constructor(Props){
     super(Props)
      this.state={
        data:JSON.parse(window.localStorage.getItem("data"))||null

      }



  }
render(){
  if(this.state.data){
return(
<div >
<button className="ui button primary" onClick={()=>{
  window.localStorage.setItem("data",JSON.stringify(this.state.data))
  alert('saved')


}}>add to bookmark</button>
<div className='box1'>
Name:<h1>{this.state.data.aliases}</h1>
Gender:<h3>{this.state.data.gender}</h3>
culture:<h3>{this.state.data.culture}</h3>
father:<h3>{this.state.data.father}</h3>
born:<h3>{this.state.data.father}</h3>
died:<h3>{this.state.data.father}</h3>


</div>

</div>



)}
return(<div>Loading..</div>)



}}



function mapStateToProps(state) {

     return ({check:state.item})
   }



export default connect(mapStateToProps)(Details)
