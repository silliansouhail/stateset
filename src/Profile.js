import React ,{Component} from "react";

class Profile extends Component {
constructor(props){
    super(props);
    this.state = {
        Person :{
            fullName:"Souhail Sillian",
            bio:"Gamer",
            imgSrc:"https://thumbs.dreamstime.com/b/unicorn-astronaut-vector-illustration-unicorn-astronaut-image-very-cute-t-shirts-posters-design-247682684.jpg" ,
            profession:"Web Developer",
            show:true,
        },
        cont:0,
    }}


    change = () => {
        this.setState({Person:{...this.state.Person,show:!this.state.Person.show}});
        this.setState({cont:0});
    }

    componentDidMount (){
        setInterval(() =>{
            this.setState({cont:this.state.cont+1});
        },1000)
    }

    render(){
        return(
            <div className="container">
                {this.state.Person.show &&
                    <div className="container__profile">
                        <img className="image" src={this.state.Person.imgSrc} alt={this.state.Person.fullName} />
                        <h1>{this.state.Person.fullName}</h1>
                        <h2>{this.state.Person.bio}</h2>
                        <h2>{this.state.Person.profession}</h2>
                        <h3>Time = {this.state.cont} s</h3>
                    </div>
                }
                <button className="btn" onClick={this.change} >Show Profile</button>
            </div>

        )
    }
}
export default Profile;