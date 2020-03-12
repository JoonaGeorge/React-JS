import React,{Component} from 'react';
import './fb';
import * as firebase from 'firebase';
import View from './View';
import './Collector.css'
class Collector extends Component{
  constructor(props){
    super(props);

    this.state = {
      mydata:[]
    };

  }

componentDidMount(){
  firebase
  .database()
  .ref("users")
  .once("value")
  .then(snapShot=>{
               let newData=[];
               snapShot.forEach(item=>{
                      newData.push({
                      id:item.key,
        //              ...item.val()
                      name:item.val().name,
                      address:item.val().address,
                      city:item.val().city,
                      district:item.val().district,
                      phoneno:item.val().phoneno
                    });
                 });
                 this.setState({mydata:newData});
                 console.log(newData);
             });

}


  render()
  {
    return (

      <View item={this.state.mydata}/>

  );
}
}
export default Collector;
