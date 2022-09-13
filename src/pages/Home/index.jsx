import Greeting from "../../components/Home/Greeting";

import {Component} from "react";

class HomePage extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Greeting name="IJSE"/>

        )
    }
}

export default HomePage