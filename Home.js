import React,{Component} from 'react'
import './Home.css'

class Home extends Component{
  render(){
    return (

        <div className="row">
          <div className="col-4">
            <img className="imag1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJLz68rT-aTbFJX6nMEnWVqeK68EPtEK_bXtJkI4I80Irr9vkH" alt="image"/>
          </div>
          <div className="col-8">
            <h1 className="header-info">GOING ABOVE AND BEYOND TO SERVE YOUR HOUSEHOLD WASTE NEEDS</h1>
            <p>Running a home can be a full-time job and daily garbage disposal is simply part of it. Let Waste Management be your partner in taking care of your trash pickup. We offer a variety of trash collection and recycling services and solutions, no matter your needs. And to make your life easier, in some areas we're able to bundle our most popular trash removal services so you can manage them all in one convenient place.</p>
          </div>

          </div>


      );
  }
}
export default Home;
