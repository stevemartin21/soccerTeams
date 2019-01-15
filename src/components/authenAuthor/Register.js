import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import {registerUser } from '../../actions/authActions';
import {withRouter} from 'react-router-dom';

 class Register extends Component {
   constructor() {
     super()

     this.state = {
       name: '',
       email: '',
       password: '',
       errors: {}
     }
   }

   componentWillReceiveProps(nextProps) {
     if(nextProps.errors) {
       this.setState({errors: nextProps.errors})
     }
   }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
   }

   onSubmit = (e) => {
     e.preventDefault()
     console.log(this.state);

     const newUser = {
       name: this.state.name,
       email: this.state.email,
       password: this.state.password
     }

     console.log(newUser);

     this.props.registerUser(newUser, this.props.history);
   }


  render() {

    const {errors} = this.state;
    
    return (
      <div>

        <div className='container'>
          <h1 className='text-center mt-5 mb-5'>Register</h1>
            <div className='card registerForm mb-5'>
              <div className='card-header text-center'>Soccer Management App</div>
              <form onSubmit={this.onSubmit}>
              <div className="md-form px-5">
                <input type="text"
                  className={classnames('form-control', {
                    'is-inValid' : errors.name
                  })}
                  placeholder='Name'
                  value={this.state.name}
                  name='name'
                  onChange={this.onChange}
                  />
                  {errors.name && (<div className='invalid-feedback'>{errors.name}</div>)}
              </div>

              <div className="md-form px-5">
                <input type="text"
                  className="form-control "
                  placeholder='Email'
                  value={this.state.email}
                  name='email'
                  onChange={this.onChange}
                  />
              </div>

              <div className="md-form px-5">
                <input type="text"
                  className="form-control "
                  placeholder='Password'
                  value={this.state.password}
                  name='password'
                  onChange={this.onChange}
                  
                  />
              </div>

              <input type='submit'
               className='btn btn-default mt-3 btn-block' 
               value='submit' 
               />
              </form>
              </div>
          </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: Proptypes.func.isRequired,
  auth: Proptypes.object.isRequired,
  errors: Proptypes.object.isRequired

}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
