import React, { useContext } from 'react';
import {AnswersContext} from "../contexts/AnswersContext";

export default function Restart ({content = 'Начать заново'}) {
    const {answers, updateAnswers} = useContext(AnswersContext)

    const restart = () => {
        updateAnswers(prev => ({
            ...prev,
            step: 1
        }))
    }

    return (
        <>
            <a href="#" className="restart" onClick={restart}>{content}</a>
        </>
    )
}