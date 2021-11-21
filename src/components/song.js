import spoken from 'spoken/build/spoken.js'
import React, { useEffect, useContext, useState } from 'react';
import {VoiceContext} from "../contexts/VoiceContext";
import getYoutubeTitle from 'get-youtube-title'
import Restart from "./restart";

const songs = ['https://www.youtube.com/watch?v=k85mRPqvMbE', 'https://www.youtube.com/watch?v=mDFBTdToRmw', 'https://www.youtube.com/watch?v=ADlGkXAz1D0', 'https://www.youtube.com/watch?v=zMd_PxpF0Ug', 'https://www.youtube.com/watch?v=I40QBt6hhPw', 'https://www.youtube.com/watch?v=XQYNUwYHV1c']
const song = songs[Math.floor(Math.random() * songs.length)]


export default function Song () {
    const [songTitle, setSongTitle] = useState('')
    const voice = useContext(VoiceContext)

    useEffect(() => {
        getYoutubeTitle(song.substring(song.indexOf('=') + 1), (err, title) => {
            console.log(title)
            setSongTitle(title)
        })

        if (songTitle !== '') {
            window.open(song, "_blank")
            setTimeout(() => {
                spoken.say(`Играет песня ${songTitle}...`, voice)
            }, 5000)
        }
    })

    return (
        <>
            <section className={'message'}>
              <span className={'robocorn'}>
                  Robocorn: {' '}
              </span>
                <span>
                  Играет песня {songTitle}...
              </span>
            </section>
            <Restart/>
        </>
    )
}
