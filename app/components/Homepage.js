import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage () {
  return (
    <div className="row align-items-center content">

        <div className="col-md-6 order-2 order-md-1">
          <img className="img-fluid" src='/robots.png' />
        </div>

        <div className="col-md-6 text-center order-1 order-md-2">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 mb-5 mb-md-0">
              <h2 className="title">Welcome to StackBot <i className="bi bi-robot"></i></h2>
              <h2 className="title"> Project Management</h2>
              <br />
              <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur placeat magni accusantium doloribus aliquid veritatis, tempore cumque error quos iste doloremque repellat? Eveniet sit culpa soluta amet exercitationem est sunt. Magnam omnis veniam illo ex!</p>
              <p>Start exploring our featured <Link to='/robots'>Stackbots</Link> <i className="bi bi-heart-fill"></i></p>
            </div>
          </div>
        </div>

    </div>
  )
}