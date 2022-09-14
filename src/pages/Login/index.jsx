import React,{Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Button, TextField, Typography} from "@mui/material";

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
          const {classes}=this.props;
        return(
            <div className={classes.container}>

                <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                        <Typography variant="h4">Login</Typography>
                    </div>


                    <div className={classes.form_container}>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" />
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
                    </div>


                    <div className={classes.btn_container}>
                        <Button variant="contained" color="success">
                            Login
                        </Button>
                    </div>
                </div>




            </div>
        )
    }
}
export default withStyles(styleSheet)(Login)