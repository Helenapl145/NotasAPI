import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "./Button";
import './Details.css'

const Details = () => {
    const params = useParams()
  
    return(
        <>
            <div className="back-button-container">
                <Link to='/'>
                     <Button>Voltar</Button>
                </Link>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae debitis corrupti similique eos sapiente ratione laborum ullam doloribus quam obcaecati, perspiciatis est laudantium, accusantium sequi neque iste tempore. Error, ex?</p>
            </div>
        </>
    )
}

export default Details