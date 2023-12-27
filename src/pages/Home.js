import React from 'react'
import { Link} from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='container-home mt-5 mb-5 ml-5 mr-5'>
      <div className='row'>
        <div className='col'>
          <div className='text-white text-center'>
            <h3>welcome to Screen Play</h3>
            <h4>Welcome to our movie software, the ultimate destination for movie lovers! Our software is designed to provide an immersive movie-watching experience and a vibrant community for movie enthusiasts. With our software, you can watch hundreds of movies, leave ratings and connect with other movie fans from around the world.</h4>
            <h5>Press login button</h5>
          </div>
          <div className='clearfix'></div>
          <div className='text-white text-center'>
            <h4>Already have an account? Please</h4>
            <Link to='/login' className='btn btn-primary'> Login</Link>
          </div>
        </div>
      </div>
      <div className='clearfix'></div>
      <div className='text-white text-center'>
        <h4>If you don't have an account Please</h4>
        <Link to='/register' className='btn btn-secondary'> Register</Link>
      </div>  
    </div>
  )
}

export default Home 
