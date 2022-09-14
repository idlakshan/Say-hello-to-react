import React,{Component} from "react";
import propTypes from "prop-types";
import {Button} from "@mui/material";

class Button extends Component{
    static propTypes={
        onClick:propTypes.func,
        children:propTypes.node,
        variant:propTypes.string,
        className:propTypes.any,
        label:propTypes.string,
        size:propTypes.string,
        disabled:propTypes.bool,
        color:propTypes.string,
        type:propTypes.string,
        endIcon:propTypes.string,
        startIcon:propTypes.string

    }
    static defaultProps={
        className:"",
        color:"primary",
        label:"",
        size:"medium",
        variant:"contained",
        disabled:"false",
        type:"button"
    }
    handleButtonClick=(event) =>{
        const{onClick,disabled}=this.props
        if(disabled)return;
        onClick && onClick({event});
    }
    renderChildren=(lable,children)=>{
        if(lable)return lable;
        if (children) return children;
    }
    render(){

    }
}