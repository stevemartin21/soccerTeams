import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import {createPlayer } from '../../actions/createActions';
import {withRouter} from 'react-router-dom';

 class AddPlayer extends Component {
     constructor() {
         super()
         this.state = {
             name: ''
         }
     }

     onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     onSubmit = (e) => {
         e.preventDefault();

         const newPlayer = {
             name: this.state.name
         }

         console.log(newPlayer);

         this.props.createPlayer(newPlayer, this.props.history)
     }
  render() {
    return (
      <div className='container mt-5 mb-5'>
            <h1 className='text-center'>Add Player</h1>

        <form onSubmit={this.onSubmit}>

        <div className='md-form '>

            <input

                type='text'
                name='name'
                placeholder='Add Name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
            />
        
        
        
        </div>

        <input 
            type='submit'
            className='btn btn-default mt-3'
            value='Submit'
        />

        </form>
          
        
      </div>
    )
  }
}

AddPlayer.propTypes = {
    createPlayer: Proptypes.func.isRequired,
    errors: Proptypes.object.isRequired,
    
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    auth: state.auth,
    player: state.player
})

export default connect(mapStateToProps, {createPlayer})(withRouter(AddPlayer))
