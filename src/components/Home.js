import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import "../styles/Home.css"
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';

function Main() {

    const inputRef = useRef(null);
    const dispatch=useDispatch();

    function startQuiz(){
        if(inputRef.current?.value) 
        {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
        <div className='container'>
            
            <h1 className='title text-light'>Apptitude Reasoning</h1>
            <br></br>
            <ol type ="i">
                <li>Apptitude Reasoning is an important aspect of your preparation</li>
                <li>Let hop on a basic Reasoning Quiz ...</li>
                <li>Remember you can always be better !!</li>
                <li>**Folks don't forget to enter your UserName..</li>
                <li>Your final REVIEW will be judged by treshold of 70% </li>
            </ol>

            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'} onClick={startQuiz}>Review</Link>
            </div>

        </div>
    )
}
export default Main;