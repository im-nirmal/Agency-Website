import React from 'react'

function Footer() {
  return (
    <div style={{height:'300px'}} className="container-fluid bg-dark mt-5 text-light">
        <div className="footer-content d-flex justify-content-between ">
            <div style={{width:'300px'}} className="canvix mt-5 ms-5">
                <h5 className='d-flex'><i style={{height:'25px'}} className="fa-solid fa-globe me-3"></i>Canvix</h5>
                <span>We’re a team of strategic creator and </span>
                <span>digital innovator, united focus in our </span>
                <span>pursuit of mastery and joyful.</span>
            </div>
            <div className="pages d-flex flex-column mt-5">
                <h5>Pages</h5>
                <a href="" style={{textDecoration:'none', color:'white'}}>Home</a>
                <a href="" style={{textDecoration:'none', color:'white'}}>About </a>
                <a href="" style={{textDecoration:'none', color:'white'}}>Contact Us</a>
                <a href="" style={{textDecoration:'none', color:'white'}}>Portfolio</a>
            </div>
            <div className="utility-pages d-flex flex-column mt-5">
                <h5>Utility Pages</h5>
                <a href="" style={{textDecoration:'none', color:'white'}}>Style Guide</a>
                <a href="" style={{textDecoration:'none', color:'white'}}>Instruction </a>
                <a href="" style={{textDecoration:'none', color:'white'}}>License</a>
                <a href="" style={{textDecoration:'none', color:'white'}}>Changelog</a>
            </div>
            <div className="subscribe d-flex flex-column mt-5">
                <h5>Subscribe</h5>
                <input type="text" className='form-control me-1' placeholder='Enter your e-mail here' />
                <button className='btn btn-dark mt-2'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer