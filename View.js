import React,{Component} from 'react'
import './View.css';
import './fb';
import * as firebase from 'firebase';
class View extends Component{
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete(e)
  {
    e.preventDefault();
    firebase
    .database()
    .ref("users")
    .child(e.target.value)
    .remove();

  }
  render(){

  return(<div>
     <table border="1">
     <thead>
     <tr>
     <th>Name</th>
     <th>Address</th>
     <th>City</th>
     <th>District</th>
     <th>PhoneNumber</th>
     <th>Operation</th>
     </tr>
     </thead>
     <tbody>
     {this.props.item.map((items,index)=>
    <tr key={index}>
    <td>{items.name}</td>
    <td>{items.address}</td>
    <td>{items.city}</td>
    <td>{items.district}</td>
    <td>{items.phoneno}</td>
    <td><button onClick={this.delete} value={items.id}>Delete</button></td>
    </tr>
  )}
     </tbody>
     </table>
     </div>);
}
}

export default View;
