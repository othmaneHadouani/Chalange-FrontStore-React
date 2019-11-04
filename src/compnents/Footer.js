import React, { Component } from 'react';
import styled from "styled-components";
//import {Link} from "react-router-dom"
//import {ProductConsumer} from "../context";


export default class Footer extends Component{

    render(){

        return(
            <ProductWapper className="card-footer badge-dark text-white" >
               copyRight Hadouani othmane
            </ProductWapper>
        )
    }


}

const ProductWapper = styled.div`

`