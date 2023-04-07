import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAspectQuestion } from '../hooks/FetchAspect'
import { updateResult } from '../hooks/setResult';


export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined);
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError }] = useAspectQuestion();

    const questions = useSelector(state => state.questions.queue[state.questions.trace]);
    const dispatch = useDispatch()

    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({ trace, checked }))
    }

    useEffect(() => {
        dispatch(updateResult({ trace, checked }))
    }, [checked])

    if (isLoading) {
        return <h3 className="text-light">isLoading</h3>
    }

    if (serverError) {
        return <h3 className="text-light">{serverError || "Unknown Error"}</h3>
    }

    return (
        <div className="questions">

            <h2 className="text-light">{questions?.question}</h2>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                id={`q${i}-option`}
                                value={false}
                                name="options"
                                onChange={() => onSelect(i)}
                            />

                            <label htmlFor={`q${i}-option`} className="text-primary">{q}</label>
                            <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>

                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
