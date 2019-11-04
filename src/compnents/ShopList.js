import React, { Component } from 'react';
import Title from "./Title";
import Shop from "./Shop";
import {connect} from 'react-redux'

class ShopList extends Component{


    render(){
        return(
            <React.Fragment>
              <div className="py-5">
                  <div className="container">
                      <Title name="our" title="products"/>
                      <div className="row">
                          {
                              this.props.shops.map((shop)=>{
                                  return(<Shop key={shop.id} shop={shop} />)
                              })
                          }
                      </div>
                  </div>
              </div>
            </React.Fragment>
        )
    }

}
const mapStatetoProps=(state)=>{
    return{
        shops :state.shops
    }
}
const mapDispatcherToProps =(dispatch)=>{
    return{

    }
}
export default connect( mapStatetoProps,mapDispatcherToProps)(ShopList)