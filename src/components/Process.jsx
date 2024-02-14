import React from 'react'

function Process() {
  return (
    <div className="container-fluid">
        <p className="text-info mt-5 fw-bolder fs-3 text-center">Process</p>
        <h2 className=" fw-bolder text-center">Process that moves  </h2>
        <h2 className=" fw-bolder text-center">things forward</h2>

        <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
            <div className="card  ms-5 mt-3 " style={{width:'18rem', height:'14rem'}}>
                
                <div className="card-body">
                    <i class="fa-regular fa-lightbulb fa-3x mb-3"></i>
                    <h5 className="card-title fw-bolder text-end me-5">Ideate </h5>
                    <p className="card-text">The ideation process is a crucial phase in the design process where creative thinking and brainstorming</p>
                     
                </div>
            </div>

            <div className="card ms-5 mt-3" style={{width:'18rem', height:'14rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-message fa-3x mb-3"></i>
                    <h5 className="card-title fw-bolder text-end me-5">Reserach </h5>
                    <p className="card-text">Research is a critical component of the design process, helping designers understand the problem</p>
                     
                </div>
            </div>

            <div className="card ms-5 mt-3" style={{width:'18rem', height:'14rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-sliders fa-3x mb-3"></i>
                    <h5 className="card-title fw-bolder text-end me-5">Create</h5>
                    <p className="card-text">Designing a process involves several key steps to ensure clarity, efficiency, successful implementation</p>
                     
                </div>
            </div>

            <div className="card ms-5 mt-3" style={{width:'18rem', height:'14rem'}}>
                
                <div className="card-body">
                    <i className="fa-solid fa-check-double fa-3x mb-3"></i>
                    <h5 className="card-title fw-bolder text-end me-5 ">Testing </h5>
                    <p className="card-text">Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements</p>
                     
                </div>
            </div>
        </div>

    </div>
  )
}

export default Process