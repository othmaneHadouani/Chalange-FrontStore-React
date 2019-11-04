import React, { Component } from 'react';
import Title from "./Title";
import Preferred from "./Preferred";
import {connect} from 'react-redux'

class ListPreferred extends Component{


    render(){
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="your " title="preferred"/>
                        <div className="row">
                            {
                                this.props.preferreds.map((preferred)=>{
                                    return(<Preferred key={preferred.id} preferred={preferred} />)
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
        preferreds :state.preferreds
    }}
    const mapDispatcherToProps =(dispatch)=>{
        return{

        }
    }
    export default connect( mapStatetoProps,mapDispatcherToProps)(ListPreferred)