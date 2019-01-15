import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import {createGame } from '../../actions/createActions';
import {withRouter} from 'react-router-dom';

 class AddGame extends Component {
     constructor() {
         super()
         this.state = {
             date: ''
         }
     }
     onChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     onSubmit = (e) => {
         e.preventDefault();

         const newGame = {
             date: this.state.date
         }

         console.log(newGame)

         this.props.createGame(newGame, this.props.history)
     }
  render() {
    return (
      <div className='container mt-5'>

        <form onSubmit={this.onSubmit}>

            <div className='md-form'>

                <input 
                    type='text'
                    placeholder='Add Date'
                    className='form-control'
                    value={this.state.date}
                    name='date'
                    onChange={this.onChange}
                />
            </div>

            <input 
                type='submit'
                className='btn btn-default'
                value='Submit'
            
            />
        </form>
      </div>
    )
  }
}

AddGame.propTypes = {
    createGame: Proptypes.func.isRequired,
    errors: Proptypes.object.isRequired,
    
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    auth: state.auth,
    game: state.game
})

export default connect(mapStateToProps, {createGame}) (withRouter(AddGame))

// date, time location, score
