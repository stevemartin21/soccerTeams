import React, { Component } from 'react';

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

export default AddTeam

// City, Stadium, Year Founded 
