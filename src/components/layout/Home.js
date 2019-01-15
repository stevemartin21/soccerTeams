import React, { Component } from 'react';
import Features from './Features';
import Projects from './Projects';

class Home extends Component {
  render() {
    return (
      <div>
          <div className="card card-image" style={{backgroundImage: " url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)"}}>
  <div className="text-white text-center py-5 px-4 my-5">
    <div>
      <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
      <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
      </p>
      <a className="btn btn-outline-white btn-md"><i className="fas fa-clone left"></i> View project</a>
    </div>
  </div>
</div>

      <Features />
      <Projects />
        
      </div>
    )
  }
}

export default Home;
