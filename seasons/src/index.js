import React from 'react';
import ReactDOM from 'react-dom'; 
import SeasonDisplay from './season';
import Loader from './Spinner';


class App extends React.Component{
    state ={lat:null,errMsg:null};

    // constructor(props){
    //     super(props);

    //     this.state ={lat:null,errMsg:null};
    //     console.log("Constructor called!")
        
    // }

    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({lat:position.coords.latitude});
            },
            (err) =>{
                this.setState({errMsg:err.message});
            }
            );
    }

    // componentDidUpdate(){
    //     console.log("componentdid update called!");
    // }

    // componentWillUnmount(){
    //     console.log("Component will unmount called!");
    // }

    renderBody (){
        if(this.state.errMsg && !this.state.lat){
            return <div>Error: {this.state.errMsg}</div> ;
        }
        if(this.state.lat && !this.state.errMsg){
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        }

        return <Loader message="Please accept location request.."></Loader>;
    }

    render()
    {  
        return (    
            <div className="border red">{this.renderBody()}</div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);