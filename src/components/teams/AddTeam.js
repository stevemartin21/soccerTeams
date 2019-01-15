import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import {createTeam } from '../../actions/createActions';
import {withRouter} from 'react-router-dom';

class AddTeam extends Component {

    constructor() {
        super()
        this.state= {
            name: ''
        }
    }

     onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newTeam = {
            name: this.state.name
        }
        console.log(newTeam);

        this.props.createTeam(newTeam, this.props.history)
    }


  render() {
    return (
      <div>
          <div className='container mt-5 mb-5'>
            <form onSubmit={this.onSubmit}>
            <div className='md-form mt-5 mb-5'>
                <input 
                    type='text'
                    className='form-control'
                    placeholder='Team Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.onChange}
                />
            </div>
            <input 
                type='submit'
                className='btn btn-success'
                value='submit'
            
            />

            </form>
          
          
          
          </div>
        
      </div>
    )
  }
}

AddTeam.propTypes = {
    createTeam: Proptypes.func.isRequired,
    errors: Proptypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    auth: state.auth,
    team: state.team
})

export default connect(mapStateToProps, {createTeam})(withRouter(AddTeam))

// City, Stadium, Year Founded 
