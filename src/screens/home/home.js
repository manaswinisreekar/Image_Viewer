import React, {Component} from 'react';
import Header from "../../common/header/Header";
import './Home.css'
//Router import for redirection.
import {Redirect} from 'react-router-dom';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    Input,
    InputLabel,
    TextField
} from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
class Home extends Component {
        this.state = {
            profile_picture: '',
            recent_media: null,
            filtered_media: null,
            likes: [],
            comments: []
            comments: [],
            searchText: ''
        }
    }


    render() {

        console.log(this.state.recent_media)
        if (this.props.location.state === undefined) {
            return <Redirect to='/'/>
        }
        if (this.props.location.state.loginSuccess === true) {
            return <div>
                <div><Header {...this.props} isLoggedIn={true} profilePictureUrl={this.state.profile_picture}/></div>
                <div><Header {...this.props} isLoggedIn={true} profilePictureUrl={this.state.profile_picture}
                             onSearch={this.onSearch}/></div>
                <div className='posts-card-container'>
                    {
                        (this.state.recent_media || []).map((details, index) => (
                        (this.state.filtered_media || []).map((details, index) => (
                            <Card key={details.id + '_card'} className='post-card'>
                                <CardHeader avatar={<Avatar src={details.user.profile_picture}/>}
                                            title={details.user.username}

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({recent_media: JSON.parse(this.responseText).data});
                that.setState({
                    recent_media: JSON.parse(this.responseText).data,
                    filtered_media: JSON.parse(this.responseText).data
                });
            }
        });


        this.setState({'comments': currentComment})
    }

    onSearch = (e) => {
        this.setState({'searchText': e.target.value})
        if (this.state.searchText == null || this.state.searchText.trim() === "") {
            this.setState({filtered_media: this.state.recent_media});
        } else {
            let filteredRecentMedia = this.state.recent_media.filter((element)=>{return element.caption.text.toUpperCase().split("\n")[0].indexOf(e.target.value.toUpperCase()) > -1});
            this.setState({filtered_media: filteredRecentMedia});
        }
    }
    if (this.state.searchText == null || this.state.searchText.trim() === "") {
        this.setState({filtered_media: this.state.recent_media});
    } else {
        let filteredRecentMedia = this.state.recent_media.filter((element)=>{return element.caption.text.toUpperCase().split("\n")[0].indexOf(e.target.value.toUpperCase()) > -1});
        let filteredRecentMedia = this.state.recent_media.filter((element) => {
            return element.caption.text.toUpperCase().split("\n")[0].indexOf(e.target.value.toUpperCase()) > -1
        });
        this.setState({filtered_media: filteredRecentMedia});
    }
}
}
export default Home;

}

export default Home;
