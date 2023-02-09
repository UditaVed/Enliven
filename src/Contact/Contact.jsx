import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
  return (
    <div className="container vh-100">
            <div className="row">
                <div className="col-sm-8 ">
                    <div className="container txt-content text-white">
                        <h1 className="underline">Contact Us</h1>
                        <h1 className="mt-5"><span className="text-warning">YOUR IDEA </span>IS OUR <br/> SOLUTION</h1>
                    </div>
                </div>
                <div className="Specify_border col-sm-4 bg-white mb-5 container form_fill border border-dark border-top-5">
                    <form action="" className="form_content">
                        <div className="mb-3 mt-3">
                            <label className="form-label text-dark">Full Name</label>
                            <input type="text" id="formGroupExampleInput" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-dark">Email</label>
                            <input type="email" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-dark">Phone</label>
                            <input type="number" id="formGroupExampleInput2" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-dark">Message</label>
                            <input type="text" id="formGroupExampleInput2" />
                        </div>
                        <div className="text-right mb-5 d-flex justify-content-end">
                            <button type="submit" className="btn btn-warning rounded-0 ">Send Message</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact