import React, {Component} from 'react';

import Header from "../../common/header/Heaer";
import {Redirect} from 'react-router-dom';

/*Home Page*/

class Home extends Component{
    render(){
        return<span>HomePage</span>
        if(this.props.location.state===undefined){
            return <Redirect to ='/' />

        }
        if(this.props.location.state.loginSuccess===true){
            return <div>
                <div>Header</div>
                <div><span>Succeess</span></div>
            </div>
        }
    }
}
export default Home;