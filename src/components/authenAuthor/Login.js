import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {loginUser} from '../../actions/authActions';
import classnames from 'classnames';

 class Login extends Component {
   constructor() {
     super()
     this.state = {
        email: '',
        password: '',
        errors: ''
     }
   }

   componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

   componentWillReceiveProps(nextProps) {

    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
    if(nextProps.errors) {
      this.state({errors: nextProps.errors})
    }
  }

   onChange = (e) => {
     this.setState({
       [e.target.name]: e.target.value
      })
   }

   onSubmit = (e) => {
      e.preventDefault();

      const newUser = {
        email: this.state.email,
        password: this.state.password
      }

      console.log(newUser);
      this.props.loginUser(newUser)
   }


  render() {
    console.log(this.state.errors)

    const {errors} = this.state
    return (
      <div>
        <div className='container'>
        <h1 className='text-center mt-5 mb-5'>Login</h1>
        <div className='card registerForm mb-5 '>
        <div className='card-header text-center'>
        Soccer Management App
        </div>
        <form onSubmit={this.onSubmit}>

        <div className="md-form px-5">
          <input 
          type="text"
          className={classnames('form-control', {
            'is-inValid': errors.email
          })}
          name='email'
          value={this.state.email}
          onChange={this.onChange}
          placeholder='Email'
           />
            {errors.email && (<div className='invalid-feedback'>{errors.email}</div>)}
        </div>

        <div className="md-form px-5">
          <input 
          type="text"
          className="form-control"
          name='password'
          value={this.state.passowrd}
          onChange={this.onChange}
          placeholder='Password'
           />
        </div>

        <input 
        type='submit'
        className='btn btn-default btn-block'
        value='Submit'
        />
        </form>
        </div>
        </div>  
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(Login);
