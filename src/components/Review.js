import React, { useEffect } from 'react'
import Questions from './Aspect';
import { useState } from 'react';
import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import { moveNextAspect, movePrevAspect } from '../hooks/FetchAspect';
import { PushAnswer } from '../hooks/setResult';
function Quiz() {

  const [check, setChecked] = useState(undefined);

  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions);

  const dispatch = useDispatch();
 
  useEffect(() => {
    console.log(queue);
  })


  function onNext() {

    if (trace < queue.length) {
      dispatch(moveNextAspect());
      if (result.length <= trace)
        dispatch(PushAnswer(check))
    }
    // console.log("next")

    setChecked(undefined);
  }
  function onPrev() {
    if (trace > 0) {
      // console.log("prev")
      dispatch(movePrevAspect());
    }

  }

  function onChecked(check) {
    setChecked(check);
  }
  if (result.length && result.length >= queue.length) {
    return <Navigate to="/result" replace={true}></Navigate>
  }

  return (
    <div className="container">
      <h1 className="title text-light">Attempt the Question's</h1>

      <Questions onChecked={onChecked} />

      <div className='grid'>
        {trace > 0 ? <button className='btn prev' onClick={onPrev}>PREV</button> : <div></div>}
        <button className='btn next' onClick={onNext}>NEXT</button>
      </div>

    </div>
  )
}

export default Quiz;

