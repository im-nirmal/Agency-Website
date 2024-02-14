import React from 'react'

function Content() {
  return (
    <div className="container-fluid  "  >
        <p className="text-info mt-5 fw-bolder fs-3 text-center">Our Services</p>
        <h2 className=" fw-bolder text-center">High-impact services </h2>
        <h2 className=" fw-bolder text-center">for your business</h2>

        <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
            <div className="card  ms-5 mt-3 " style={{width:'21rem', height:'12rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-pen fa-2x mb-3"></i>
                    <h5 className="card-title fw-bolder">Content Marketing </h5>
                    <p className="card-text">Our team creates engaging and shareable content that resonates with your audience, drives organic traffic</p>
                     
                </div>
            </div>

            <div className="card ms-5 mt-3" style={{width:'21rem', height:'12rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-pen-fancy fa-2x mb-3"></i>
                    <h5 className="card-title fw-bolder">Graphic Design </h5>
                    <p className="card-text">Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.</p>
                     
                </div>
            </div>

            <div className="card ms-5 mt-3" style={{width:'21rem', height:'12rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-bullhorn fa-2x mb-3"></i>
                    <h5 className="card-title fw-bolder">Digital Marketing </h5>
                    <p className="card-text">Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing</p>
                     
                </div>
            </div>

            <div className="card ms-5 mt-3" style={{width:'21rem', height:'12rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-palette fa-2x mb-3"></i>
                    <h5 className="card-title fw-bolder">Web Design</h5>
                    <p className="card-text">We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.</p>
                     
                </div>
            </div>

            <div className="card ms-5 mt-3" style={{width:'21rem', height:'12rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-ear-listen fa-2x mb-3"></i>
                    <h5 className="card-title fw-bolder">IT Consulting</h5>
                    <p className="card-text">IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services</p>
                     
                </div>
            </div>

            <div className="card ms-5 mt-3" style={{width:'21rem', height:'12rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-tag fa-2x mb-3"></i>
                    <h5 className="card-title fw-bolder">Brand Identity </h5>
                    <p className="card-text">It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.</p>
                     
                </div>
            </div>
        </div>

        
      </div>
  )
}

export default Content