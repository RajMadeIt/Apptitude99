import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import data ,{answers} from "../database/data"

import * as Action from '../redux/Aspect_reducer' 

export const useAspectQuestion = () => {
    const dispatch = useDispatch();
    const [getData,setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {

        setGetData(prev => ({ ...prev, isLoading: true }));

        (async () => {
            try {
                let question = await data;

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: {question,answers} }));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question,answers }))

                } else {
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData,setGetData];  
}

export const moveNextAspect=()=>async (dispatch)=>{
    try{
        dispatch(Action.moveNextAction())
    }catch(error){
        console.log(error);
    }
}
export const movePrevAspect=()=>async (dispatch)=>{
    try{
        dispatch(Action.movePrevAction())
    }catch(error){
        console.log(error);
    }
}

