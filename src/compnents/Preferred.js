import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from 'redux';
//import {ProductConsumer} from "../context";


  class Shop extends Component{

    render(){

        const {img,inCart,title}=this.props.preferred;
        return(
            <ProductWapper className="col-9 mx-auto col-md-6 my-3">
                <div className="container">
                  <div className="card">
                      <div className="card-header">
                          {title}
                      </div>
                      <div className="img-container p-5">
                          <Link to="/details">
                              <img src={img} alt="product" className="card-img-top" />
                          </Link>
                          <button className="cart-btn" onClick={()=>this.props.deleteFromPreferred(this.props.preferred.id)} disabled={inCart? true:false} >
                              {

                                  <i className="fas fa-trash-alt"/>
                              }
                          </button>

                      </div>
                  </div>
                </div>
            </ProductWapper>
        )
    }


}
const mapStatetoProps=(state)=>{
    return{
        preferreds :state.preferreds
    }
}
const deleteFromPreferred =(index)=>{
    return{
        type :"deleteFromPreferred",
        payload:index
    }
}
const mapDispatcherToProps =(dispatch)=>{
    return bindActionCreators({deleteFromPreferred:deleteFromPreferred},dispatch)


}
export default connect( mapStatetoProps,mapDispatcherToProps)(Shop)
const ProductWapper = styled.div`

`