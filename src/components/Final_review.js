import React from 'react';
import '../styles/Final_review.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/Aspect_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';
import { useEffect } from 'react';

function Result() {

  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);
  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());

  }

  useEffect(() => {

  })

  const totalPoints = queue.length ;
  const attempts = attempts_Number(result)
  const earnPoints = earnPoints_Number(result, answers, 10)/10;
  const flag = flagResult(totalPoints, earnPoints);

  return (

    <div className='container'>

      <h1 className='title text-light'>Apptitude Reasoning Score</h1>

      <div className="result flex-center">

        <div className="flex">
          <span>Username :</span>
          <span className="bold">{userId || ""}</span>
        </div>


        {/* <div className="flex">
          <span>Total Reviews :</span>
          <span className="bold">{queue.length || 0}</span>
        </div> */}

        <div className="flex">
          <span>Questions Attempted :</span>
          <span className="bold">{attempts || 0}</span>
        </div>

        <div className="flex">
          <span>*Max Performance :</span>
          <span className="bold" >{totalPoints || 0} &#9733;</span>
        </div>
        <div className="flex">
          <span>*Your Performance :</span>
          <span className="bold">{earnPoints || 0} &#9733;</span>
        </div>
        <div className='flex'>
          <span>Performance :</span>
          <span style={{ color: `${flag ? "green" : "#9ac895"}` }} className='bold'>{flag ? "HOLA!! You have good Apptitude Reasoning" : "Its not over untill you WIN"}</span>
        </div>


      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>Review Again</Link>
      </div>

    </div>

  )
}

export default Result;