import React, { useContext } from 'react';
import {AnswersContext} from "../contexts/AnswersContext";

export default function Restart () {
    const {answers, updateAnswers} = useContext(AnswersContext)

    const restart = () => {
        updateAnswers(prev => ({
            ...prev,
            step: 0
        }))
    }

    return (
        <>
            <a className="restart" onClick={restart}>Начать заново</a>
        </>
    )
}