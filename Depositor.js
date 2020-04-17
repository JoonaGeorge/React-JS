import React,{Component} from 'react';
import './fb';
import * as firebase from 'firebase';
import './Depositor.css';
class Depositor extends Component {
  constructor(props){
    super(props);

    this.state = {
      name:'',
      address:'',
      city:'',
      district:'',
      phoneno:'',
      status:"false",
      data:[]
    };
    this.namechange=this.namechange.bind(this);
    this.addresschange=this.addresschange.bind(this);
    this.citychange=this.citychange.bind(this);
    this.districtchange=this.districtchange.bind(this);
    this.phonenochange=this.phonenochange.bind(this);
    this.submitted=this.submitted.bind(this);
  }
  componentDidMount(){
    //firebase
    //.database()
    //.ref("users")
    //.child("-M0aZ2vvd1_QrXfojeRY")
    //.remove();

              firebase
              .database()
              .ref("users")
              .once("value")
              .then(snapShot=>{
                           snapShot.forEach(item=>{
                                  this.state.data.push({
                                  id:item.key,
                    //              ...item.val()
                                  name:item.val().name,
                                  address:item.val().address,
                                  city:item.val().city,
                                  district:item.val().district,
                                  phoneno:item.val().phoneno
                                });

                           });
                         });
                             console.log(this.state.data);



  }
namechange(e)
{
  this.setState({name:e.target.value});

}
addresschange(e){
this.setState({address:e.target.value});
}
citychange(e){
this.setState({city:e.target.value});
}
districtchange(e){
this.setState({district:e.target.value});
}
phonenochange(e){
  this.setState({phoneno:e.target.value});
}
submitted(e){
  e.preventDefault();
    firebase
    .database()
    .ref("users")
    .push({
      name:this.state.name,
      address:this.state.address,
      city:this.state.city,
      district:this.state.district,
      phoneno:this.state.phoneno
    });
     alert('Data submitted successfully');
      if(this.state.name!=='')
      {
      this.setState({
        name:'',
        address:'',
        city:'',
        district:'',
        phoneno:'',

      });
    }
}

  render(){

    return(
      <div className="d-info">
      <h1 className="h-info">Register</h1>
      <form onSubmit={this.submitted}>
      <label>Name</label><br/>
        <input className="i-info" type="text" onChange={this.namechange}/><br/>
        <label>Address</label><br/>
        <input className="i-info"type="text" onChange={this.addresschange}/><br/>
        <label>City</label><br/>
        <input className="i-info"type="text" onChange={this.citychange}/><br/>
        <label>District</label><br/>
        <input className="i-info" type="text" onChange={this.districtchange}/><br/>
        <label>PhoneNumber</label><br/>
        <input className="i-info" type="text" onChange={this.phonenochange}/><br/>
        <br/><button className="btn" type="submit">Submit</button><br/>
        </form>

      </div>


    );
  }
}
export default Depositor;
