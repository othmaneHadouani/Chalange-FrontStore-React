import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
//import {ProductConsumer} from "../context";


  class Shop extends Component{

    render(){

        const {img,inCart,title}=this.props.shop;
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
                          <button className="cart-btn" onClick={()=>this.props.addToPreferred(this.props.shop)} disabled={inCart? true:false} >
                              {

                                  inCart?(
                                          <p className="text-capitalize mb-0"  disabled>Liked</p>):
                                      (<i className="far fa-thumbs-up"/>)
                              }
                         </button>
                          <button className="cart-btn" onClick={()=>this.props.deleteFromShops(this.props.shop.id)} disabled={inCart? true:false} >
                              {

                                  inCart?(
                                          <p className="text-capitalize mb-0"  disabled>Liked</p>):
                                      (<i className="far fa-thumbs-down"/>)
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
        shops :state.shops
    }
}
const addToPreferred=(shop)=>{
      return{
          type :"addToPreferred",
          payload:shop
      }
}
const deleteFromShops =(index)=>{
    return{
        type :"deleteFromShops",
        payload:index
    }
}
const mapDispatcherToProps =(dispatch)=>{
    return bindActionCreators({addToPreferred:addToPreferred,deleteFromShops:deleteFromShops},dispatch)


}
export default connect( mapStatetoProps,mapDispatcherToProps)(Shop)
const ProductWapper = styled.div`

`