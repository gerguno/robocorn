import spoken from 'spoken/build/spoken.js'
import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom'
import {AnswersContext} from "../contexts/AnswersContext";
import {VoiceContext} from "../contexts/VoiceContext";

export default function Question ({content, variable}) {
    const {answers, updateAnswers} = useContext(AnswersContext)
    const voice = useContext(VoiceContext)

    useEffect(() => {
        let answersCopy = {}
        Object.assign(answersCopy, answers)

        spoken.say(content, voice).then(() => {
            spoken.listen().then(transcript => {
                answersCopy['step'] = answersCopy.step + 1
                answersCopy[variable] = transcript
                updateAnswers(answersCopy)
            })
        })
    })

    return (
        <section className={'message'}>
          <span className={'robocorn'}>
              Robocorn: {' '}
          </span>
          <span>
              {content}
          </span>
        </section>
    )
}
