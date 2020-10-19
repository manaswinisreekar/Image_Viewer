import React, {Component, Fragment} from 'react';
import './Header.css';
import {Redirect} from 'react-router-dom';
import {Avatar, IconButton, Input, InputAdornment, Menu, MenuItem, Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            menuState: false,
            anchorEl: null,
            loggedOut: false
        }
    }
    render() {
        if (this.state.loggedOut === true) {
            return <Redirect to='/'/>
        }
        return <div className='header-flex-container'>
            {
                this.props.isLoggedIn !== true ?
                    <div>
                        <header className='logo'>Image Viewer</header>
                    </div>
                    :
                    <Fragment>
                        <div onClick={() => this.onLogoClick()}>
                            <header className='logo'>Image Viewer</header>
                        </div>
                        <div className='header-right-flex-container'>
                            <Input className='search-box' type='search' placeholder='Search...' disableUnderline
                                   startAdornment={
                                       <InputAdornment position="start"><SearchIcon/></InputAdornment>
                                   } onChange={this.props.onSearch}/>
                            <IconButton id='profile-icon' onClick={this.onProfileIconClick}>
                                <Avatar alt="profile_picture"
                                <Avatar variant="circle" alt="profile_picture"
                                        src={this.props.profilePictureUrl}/>
                            </IconButton>
                            <div>
                                <Menu open={this.state.menuState} onClose={this.onMenuClose}
                                      anchorEl={this.state.anchorEl} getContentAnchorEl={null}
                                      anchorOrigin={{vertical: "bottom", horizontal: "right"}} keepMounted>
                                    <MenuItem><Typography>My Account</Typography></MenuItem>
                                    <hr className='horizontal-line'/>
                                    <MenuItem onClick={this.onLogout}><Typography>Logout</Typography></MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </Fragment>
            }
        </div>
    }
    onLogoClick = () => {
        this.props.history.push('/home');
    }
    onLogout = () => {
        sessionStorage.removeItem('access-token');
        this.setState({loggedOut: true})
    }
    onProfileIconClick = (e) => {
        this.setState({'menuState': !this.state.menuState, 'anchorEl': e.currentTarget});
    }
    onMenuClose = () => {
        this.setState({'menuState': !this.state.menuState, 'anchorEl': null});
    }
}
export default Header;