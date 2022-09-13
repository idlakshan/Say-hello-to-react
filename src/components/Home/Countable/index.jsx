import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";

class Countable extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    incrementCount(){
        this.setState({
            count:this.state.count+1
        })
    }
    decrementCount(){
        this.setState({
            count:this.state.count-1
        })
    }
    resetCount(){
        this.setState({
            count:this.state.count*0
        })
    }
    render() {
        return(
            <div>
               <Typography variant="h4" gutterBottom>
                    Count :{
                   this.state.count
               }
               </Typography>
                <Button variant="contained" onClick={()=>{
                    console.log("click")
                    this.incrementCount()
                    }
                }>Increase!</Button>

                <Button variant="outlined" onClick={()=>{
                    console.log("click")
                    this.decrementCount()
                }
                } style={{marginLeft:'15px'} }
               >Decrease!</Button>

                <Button variant="outlined" color="error" onClick={()=>{
                    console.log("click")
                    this.resetCount()
                }
                } style={{marginLeft:'15px'}}>Reset!</Button>

            </div>


        )
    }
}
export default Countable