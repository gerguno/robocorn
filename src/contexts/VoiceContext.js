import React, { createContext } from 'react';

export const VoiceContext = createContext()

const VoiceContextProvider = (props) => {
    // spoken.voices().then( voices => console.log(voices) );
    // Voices: 'Yuri', 'Milena', 'Google русский'

    const voice = 'Yuri'

    return (
        <VoiceContext.Provider value={ voice }>
            {props.children}
        </VoiceContext.Provider>
    )
}
export default VoiceContextProvider;


