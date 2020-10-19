
import React, {Component} from 'react';

import React, {Component, Fragment} from 'react';

import './Header.css';


import {Input, InputAdornment} from "@material-ui/core";
import {Avatar, IconButton, Input, InputAdornment} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

render() {
    return <div className='header-flex-container'>
            {
                this.props.isLoggedIn !== true ?
                    <div>
                            <header className='logo'>Image Viewer</header>
                    </div>
                    :
                    <div className='header-right-flex-container'>
                    {
                        this.props.showSearchBox ?
                            <Input className='search-box' type='search' placeholder='Search...' disableUnderline
                                   startAdornment={
                                       <InputAdornment position="start"><SearchIcon/></InputAdornment>
                                   } onChange={this.props.onSearch}/>
                            :
                            null
                    }
            }
            export default header;
