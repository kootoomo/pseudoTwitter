import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/app/';
class WhoAmI extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         years: 26
    //     }
        // this.nextYear = this.nextYear.bind(this);    // 1st Method
        
        // this.nextYear = () => {             //2nd Method
        //     this.setState(state => ({       //2nd Method
        //         years: ++state.years        //2nd Method
        //     }));                            //2nd Method
        // } 
                                          //2nd Method
    // }

    state = {                            //class fields method (3rd Method)
        years: 26                       //class fields method (3rd Method)
    }                                   //class fields method (3rd Method)

    nextYear = () => {                  //class fields method (3rd Method)
        this.setState(state => ({       //class fields method (3rd Method)
            years: ++state.years        //class fields method (3rd Method)
        }));                            //class fields method (3rd Method)
    } 

    // nextYear() {                                     // 1st Method
    //     //this.state.years++ //WRONG                 
    //     this.setState(state => ({                    // 1st Method
    //         years: ++state.years                     // 1st Method
    //     }));                                         // 1st Method
    // }                                                // 1st Method
    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname - {surname}, years = {years}</h1>
                <a href={link}>My profile</a>
            </> 
        );  
    }
}


const All = () => {
    return (
        <>
            <WhoAmI name="CoolName" surname="AwesomeSurname" link="https://translate.google.com"/>
            <WhoAmI name="Joshua" surname="Googler" link="https://google.com"/>
            <WhoAmI name="Gargantua" surname="Githubner" link="https://github.com"/>
        </>
    )
}

ReactDOM.render(<All/>, document.getElementById('root'));
