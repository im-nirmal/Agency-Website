import React from 'react'

function About() {
  return (
    <div className="container-fluid bg-dark">
        <div className="d-flex flex-wrap justify-content-center align-items-center mt-5">
           <div className='pic w-50 '> 
                <img  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width:'100%'}} className='mt-5  img-fluid '/>
           </div>
           <div className='about-us mt-5 ms-5'>
                <p className='text-info fw-bolder fs-3'>About Us</p>
                <h3 className='text-light fw-bolder fs-3'>The core mission </h3>
                <h3 className='text-light fw-bolder fs-3'>behind all our</h3>
                <h3 className='text-light fw-bolder fs-3'>work</h3>
                <p className='text-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus</p>
                <p className='text-light '>ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id</p>
           </div>

        </div>
    </div>
  )
}

export default About