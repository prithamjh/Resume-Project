import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AssignmentIndTwoToneIcon from '@material-ui/icons/AssignmentIndTwoTone';
import { connect } from 'react-redux';
import { logout, fetchData } from '../redux/actionCreators';
 // Import the logo image

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        width: '3em',
        height: '3em',
        backgroundColor: 'transparent',
        objectFit: 'contain', // Ensure the image scales properly
        display: 'block' // Ensure the image is displayed as a block element to avoid extra space
    },
    title: {
        flexGrow: 1,
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    appBar: {
        backgroundColor: '#ADD8E6', // Light Blue color
        // You can use a gradient as well
        // background: 'linear-gradient(to right, #ADD8E6, #90EE90)', 
    }
}));

const ButtonAppBar = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push("/dashboard")
    }

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <img className={classes.logo} src="./logo1.jpg" alt="logo" />
                    <Typography variant="h5" className={classes.title}>
                        <Link exact to="/" className={classes.link}>Resume Builder</Link>
                    </Typography>
                    {(!props.token) ?
                        (<React.Fragment>
                            <Button color="inherit">
                                <Link to="/signup" className={classes.link}>Signup</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/login" className={classes.link}>SignIn</Link>
                            </Button>
                        </React.Fragment>) :
                        (<React.Fragment>
                            <Button color="inherit" onClick={handleClick} >
                                <AssignmentIndTwoToneIcon />
                            </Button>
                            <Button onClick={props.logout} color="inherit">
                                <Link to="/login" className={classes.link}>Logout</Link>
                            </Button>
                        </React.Fragment>)
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.resume.token
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => { dispatch(logout()) },
    fetchData: (props, callback) => { dispatch(fetchData(props, callback)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
