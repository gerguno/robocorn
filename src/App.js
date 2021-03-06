import './main.css'
import Question from './components/question'
import React, { useContext, useEffect } from 'react';
import {AnswersContext} from "./contexts/AnswersContext";
import Answer from "./components/answer";
import Song from "./components/song";
import Equation from "./components/equation";
import Restart from "./components/restart";

export default function App() {
    let constraints = {audio: true, video: false}
    navigator.mediaDevices.getUserMedia(constraints)

  const {answers, updateAnswers, resetAnswers} = useContext(AnswersContext)

  useEffect(() => {
    console.log(answers)
  })

  return (
      <>
          {(answers.step === 0) && <Restart content={'Старт!'}/>}
          {(answers.step === 1) && <Question content={`Привет, малыш. Меня зовут Robocorn. А как тебя зовут?`} variable={'name'}/>}
          {(answers.step === 2) && <Answer content={`Приятно познакомиться, ${answers.name}`}/>}
          {(answers.step === 3) && <Answer content={`У тебя прелестное имя!`}/>}
          {(answers.step === 4) && <Question content={`Cколько тебе лет, ${answers.name}`} variable={'age'}/>}
          {(answers.step === 5) && (
               (Number(answers.age) < 6) ? <Answer content={`Какой маленький пупсик.`}/> :
               (Number(answers.age) < 12) ? <Answer content={`Ты наверное уже ходишь в школу`}/> :
               (Number(answers.age) < 20) ? <Answer content={`Йоу, чувак! Ты наверное ходишь в университет`}/> :
               (Number(answers.age) < 70) ? <Answer content={`Понимаю, ох уж эта работа...`}/> :
               (Number(answers.age) === 1000) ? <Answer content={`Ох ты и старик!!!`}/> :
               <Answer content={`Ммм, какой дерзкий...`}/>
          )}
          {(answers.step === 6) && <Answer content={`У меня есть предложение для тебя! Давай поиграем в игру`}/>}
          {(answers.step === 7) && <Equation/>}
          {(answers.step === 8) && (
              (Number(answers.equationUserResult) === answers.equationTrueResult) ? <Answer content={`Молодец! У меня для тебя есть песня`}/> : <Answer content={`Неправильно, подумай пожалуйста еще раз`} stepForward={false}/>
          )}
          {/*{(answers.step === 6) && <Question content={`Сколько будет 1000 плюс 10`} variable={'eq1'}/>}*/}
          {/*{(answers.step === 7) && (*/}
          {/*    (Number(answers.eq1) === 1010) ? <Answer content={`Молодец! У меня для тебя есть песня`}/> : <Answer content={`Неправильно, подумай пожалуйста еще раз`} stepForward={false}/>*/}
          {/*)}*/}
          {(answers.step === 9) && <Answer content={`Сейчас будет балдёж!`}/>}
          {(answers.step === 10) && <Song/>}
      </>
  )
}
