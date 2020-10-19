import './Header.css';

//Router import for redirection.
import {Redirect} from 'react-router-dom';

import {Avatar, IconButton, Input, InputAdornment, Menu, MenuItem, Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


/**
 * Header Component serves header for multiple pages.
 */
class Header extends Component {
        super();
        this.state = {
            menuState: false,
            anchorEl: null
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
                this.props.isLoggedIn !== true ?anchorOrigin={{vertical: "bottom", horizontal: "right"}} keepMounted>
                <MenuItem><Typography>My Account</Typography></MenuItem>
                <hr className='horizontal-line'/>
                <MenuItem><Typography>Logout</Typography></MenuItem>
                <MenuItem onClick={this.onLogout}><Typography>Logout</Typography></MenuItem>
            </Menu>
        </div>
    </div>
</Fragment>
}
</div>
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
