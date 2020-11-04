import React from "react";
import loader from "../../assets/images/loader.gif"

type PropsType = {}

const Loader: React.FC<PropsType> = () => {
    return (<div>
        <img src={loader}/>
    </div>)
}

export default Loader