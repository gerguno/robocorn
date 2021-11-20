import spoken from 'spoken/build/spoken.js'
import React, { useEffect, useContext } from 'react';
import {AnswersContext} from "../contexts/AnswersContext";
import {VoiceContext} from "../contexts/VoiceContext";

export default function Answer ({content, stepForward = true}) {
    const {answers, updateAnswers} = useContext(AnswersContext)
    const voice = useContext(VoiceContext)

    useEffect(() => {
        spoken.say(content, voice).then(() => {
            stepForward
                ?
                    updateAnswers(prev => ({
                        ...prev,
                        step: answers.step + 1
                    }))
                :
                    updateAnswers(prev => ({
                        ...prev,
                        step: answers.step - 1
                    }))
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
