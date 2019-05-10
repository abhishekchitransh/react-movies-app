import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import BookShow from '../../screens/bookshow/BookShow';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding:0, textAlign:"center" }}>
        {props.children}
      </Typography>
    );
  }

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
  class Header extends Component{
    constructor(){
        super();
        this.state = {
            modalIsOpen: false,
            value:0,
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            username: "",
            password: ""
        };
    }
    openModalHandler = () => {
        this.setState({modalIsOpen : true})
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen : false,
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            value:0
        })        
    }
    tabChangeHandler = (event, value) => {
        this.setState({value})
    }
    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    bookShowHandler = (e) => {
        ReactDOM.render(<BookShow />, document.getElementById('root'));
    }

    render(){
        return (            
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                    {this.props.showBookShowButton === "true" ?
                        <div className="bookshow-button">
                            <Button variant="contained" color="primary" onClick={this.bookShowHandler}>
                                Book Show
                            </Button>
                        </div>
                        : ""}
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" 
                onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="userName">User Name</InputLabel>
                            <Input id="userName" type="text" onChange={this.inputUsernameChangeHandler}/>
                            <FormHelperText className={this.state.usernameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl> <br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="Password" onChange={this.inputPasswordChangeHandler} />
                            <FormHelperText className={this.state.passwordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
                    </TabContainer>
                    },
                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <Input id="firstName" type="text" onChange={this.inputFirsNameChangeHandler}/>
                            <FormHelperText className={this.state.firstNameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl> <br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <Input id="lastName" type="text" onChange={this.inputLastNameChangeHandler} />
                            <FormHelperText className={this.state.lastNameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="text" onChange={this.inputEmailChangeHandler} />
                            <FormHelperText className={this.state.EmailRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="text" onChange={this.inputPasswordChangeHandler} />
                            <FormHelperText className={this.state.PasswordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="contactno">Contact No.</InputLabel>
                            <Input id="contactno" type="text" onChange={this.inputContactnoChangeHandler} />
                            <FormHelperText className={this.state.ContactnoRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}>Register</Button>
                    </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}

export default Header;