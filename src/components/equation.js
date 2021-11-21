import spoken from 'spoken/build/spoken.js'
import React, { useEffect, useContext } from 'react';
import {AnswersContext} from "../contexts/AnswersContext";
import {VoiceContext} from "../contexts/VoiceContext";

const eqleft = Math.floor(Math.random() * 10)
const eqright = Math.floor(Math.random() * 10)
const eqresult =  eqleft + eqright

export default function Equation ({content = `Сколько будет ${eqleft} плюс ${eqright}?`}) {
    const {answers, updateAnswers} = useContext(AnswersContext)
    const voice = useContext(VoiceContext)

    useEffect(() => {
        let answersCopy = {}
        Object.assign(answersCopy, answers)

        spoken.say(content, voice).then(() => {
            spoken.listen().then(transcript => {
                answersCopy['step'] = answersCopy.step + 1
                answersCopy['equationTrueResult'] = eqresult
                answersCopy['equationUserResult'] = transcript
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
