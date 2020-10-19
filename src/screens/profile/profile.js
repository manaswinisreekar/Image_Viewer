import React, {Component} from 'react'
import Header from '../../common/header/Header';
import {Redirect} from 'react-router-dom';
import './Profile.css'

import {Avatar, Card, CardMedia,CardContent, Container, Fab,GridList,GridListTile, Typography, Grid} from '@material-ui/core/';
import {
    Avatar,
    Button,
    Card,
    CardMedia,
    Container,
    Fab,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Modal,
    Typography,
    Grid
} from '@material-ui/core/';

import EditIcon from '@material-ui/icons/Edit'

 class Profile extends Component {
        this.state = {
            user_data: null,
            profile_picture: null,
            recent_media: null
            recent_media: null,
            fullName: null,
            newFullName: '',
            fullNameRequired: false,
            openFullNameEditModal: false,
            closeFullNameEditModal: true
        }
    }

    componentDidMount() {
        this.fetchOwnerInfo();
        this.fetchMostRecentMedia();
    }
    render() {
        if (this.props.location.state === undefined) {
            return <Redirect to='/'/>
        } else if (this.props.location.state.loginSuccess === true) {
            console.log(this.state.recent_media)
            return <div>
                <Header {...this.props} isLoggedIn={true} showSearchBox={false}
                        profilePictureUrl={this.state.profile_picture} showMyAccount={false}/>
                <Container>
                    <div style={{height: "2rem"}}></div>
                    <Grid container spacing={3} justify="flex-start">
                        <Grid item xs={2}/>
                        <Grid item xs={2}>
                            {this.state.profile_picture ? (
                                <Avatar
                                    alt='profile_pic'
                                    id="profile-pic"
                                    variant="circle"
                                    src={this.state.profile_picture}
                                    style={{marginTop: 10}}
                                />
                            ) : null}
                        </Grid>
                        <Grid item xs={4} id='user_name'>
                        <Grid item xs={5} id='user_name'>
                            <Typography variant="h4" component="h1" style={{marginBottom: 5}}>
                                {this.state.recent_media
                                    ? this.state.user_data.username
                                    : null}
                            </Typography>
                            <Grid container spacing={3} justify="center">
                                <Grid item xs={4}>
                                    Posts:{" "}
                                    {this.state.user_data
                                        ? this.state.user_data.counts.media
                                        : null}
                                </Grid>
                                <Grid item xs={4}>
                                    Follows:{" "}
                                    {this.state.user_data
                                        ? this.state.user_data.counts.follows
                                        : null}
                                </Grid>
                                <Grid item xs={4}>
                                    Followed By:{" "}
                                    {this.state.user_data
                                        ? this.state.user_data.counts.followed_by
                                        : null}
                                </Grid>
                            </Grid>
                            <Typography variant="h6" component="h2" style={{marginTop: 5}}>
                                {this.state.user_data ? this.state.user_data.full_name : null}
                                {this.state.user_data && !this.state.user_data.full_name
                                {this.state.fullName ? this.state.fullName : null}
                                {this.state.user_data && !this.state.fullName
                                    ? this.state.user_data.full_name
                                    : null}
                                <Fab
                                    color="secondary"
                                    id="edit-profile"
                                    aria-label="edit"
                                    onClick={this.openEditFullNameModal}
                                >
                                    <EditIcon fontSize="small"/>
                                </Fab>
                            </Typography>

                            <Modal
                                open={this.state.openFullNameEditModal}
                                onClose={this.closeEditFullNameModal}
                            >
                                <div className="edit-modal-div">
                                    <h2>Edit</h2>
                                    <FormControl required>
                                        <InputLabel htmlFor="fullName">Full Name</InputLabel>
                                        <Input id="fullName" type="text" onChange={this.onChangeEditFullName}/>
                                        {this.state.fullNameRequired ? <FormHelperText>
                                            <span style={{color: "red"}}>required</span>
                                        </FormHelperText> : null}
                                    </FormControl>
                                    <div style={{marginTop: 15}}>
                                        <Button variant="contained" color="primary"
                                                onClick={this.onUpdateFullName}>Update</Button>
                                    </div>
                                </div>
                            </Modal>

                        </Grid>
                        <Grid item xs={4}/>
                    </Grid>
                </Container>
                <Container>
                    <Grid container spacing={1} direction="row" alignItems="center">
                        {this.state.recent_media &&
                        this.state.recent_media.map((mediaObj, index) => (
                            <Grid
                                // id="media-grids"
                                item
                                xs={4}
                                key={mediaObj.id}>
                                <Card variant="outlined">
                                    <CardMedia style={{height: 0,paddingTop: '56.25%'}}
                                        image={mediaObj.images.standard_resolution.url}
                                        title={mediaObj.images.standard_resolution.url}/>
                                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                                               image={mediaObj.images.standard_resolution.url}
                                               title={mediaObj.images.standard_resolution.url}/>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>

        }
    }

    fetchOwnerInfo = () => {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    user_data: JSON.parse(this.responseText).data,
                    profile_picture: JSON.parse(this.responseText).data.profile_picture
                });
            }
        });
        let url = this.baseUrl + "users/self/?access_token=" + sessionStorage.getItem("access-token");
        xhr.open("GET", url);
        xhr.send(data);
    }
    fetchMostRecentMedia = () => {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    recent_media: JSON.parse(this.responseText).data
                });
            }
        });
        let url = this.baseUrl + "users/self/media/recent/?access_token=" + sessionStorage.getItem("access-token");
        xhr.open("GET", url);

        xhr.send(data);
    }

    onChangeEditFullName = (e) => {
        if (e.target.value === '') {
            this.setState({newFullName: e.target.value, fullNameRequired: true})
        } else {
            this.setState({newFullName: e.target.value, fullNameRequired: false})
        }
    }

    onUpdateFullName = () => {
        if (this.state.newFullName == null || this.state.newFullName.trim() === "") {
            this.setState({
                fullNameRequired: true
            })
        } else {
            this.setState({
                fullName: this.state.newFullName,
                fullNameRequired: false,
                newFullName:''
            })

            this.closeEditFullNameModal();
        }

    }

    openEditFullNameModal = () => {
        this.setState({openFullNameEditModal: true, closeFullNameEditModal: false})
    }

    closeEditFullNameModal = () => {
        this.setState({openFullNameEditModal: false, closeFullNameEditModal: true})
    }
}

export default Profile;