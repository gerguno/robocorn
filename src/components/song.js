import spoken from 'spoken/build/spoken.js'
import React, { useEffect, useContext, useState } from 'react';
import {VoiceContext} from "../contexts/VoiceContext";
import getYoutubeTitle from 'get-youtube-title'
import Restart from "./restart";


export default function Song ({link}) {
    const [songTitle, setSongTitle] = useState('')
    const voice = useContext(VoiceContext)


    useEffect(() => {
        getYoutubeTitle(link.substring(link.indexOf('=') + 1), (err, title) => {
            console.log(title)
            setSongTitle(title)
        })

        if (songTitle !== '') {
            window.open(link, "_blank")
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
