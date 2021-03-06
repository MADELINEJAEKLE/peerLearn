import React from "react";
import {Link} from "react-router-dom";


const LearningOptions = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="header">
                    <h1>What activity do you want to work on?</h1>
                </div>
            </div>
            
                <div className="row btnContainer">
                    <btn className="btn-lg col-sm-10"><Link to="/meditate">Meditate</Link></btn>
                    <btn className="btn-lg col-sm-10"><Link to="/assert">Assertive role play</Link></btn>
                </div>
        </div>            
    )
}

export default LearningOptions;