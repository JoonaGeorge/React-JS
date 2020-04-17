import React,{Component} from 'react'
class Sam extends Component{
render(){
  return(<div>
     <table border="1">
     <thead>
     <tr>
     <td>Name</td>
     </tr>
     </thead>
     <tbody>
     {this.props.item.map((items,index)=>
    <tr key={index}>
    <td>{items.name}</td>
    </tr>
  )}
     </tbody>
     </table>
     </div>);
}
}

export default Sam;
