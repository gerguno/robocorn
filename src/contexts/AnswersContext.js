import React, { createContext, useState } from 'react';

export const AnswersContext = createContext()

const AnswersContextProvider = (props) => {
    const [ answers, setAnswers ] = useState({
        step: 0,
    })

    const updateAnswers = (answers) => {
        setAnswers(answers)
    }

    const resetAnswers = () => {
        setAnswers({
            step: 0,
        })
    }

    return (
        <AnswersContext.Provider value={{ answers, updateAnswers, resetAnswers }}>
            {props.children}
        </AnswersContext.Provider>
    )
}
export default AnswersContextProvider;


