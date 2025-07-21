import type { PropsWithChildren } from 'react'

export interface TitleProps{
    title : String;
}

export interface translatorProps{
    setTranslatedText : (value : string)=> void
    setTranslatedTextTo : (value : string)=> void
}

export interface translateComponentProps{
    translatedText : string,
    voiceTo : string
}

export interface translateProps {
    translatedText: string,
    textIn: string,
    translateTo : string
}

export interface UtilitiesProps extends PropsWithChildren{
    text : string,
    voiceIn : string
}

export interface languagesProps{
    lang : string,
    name : string,
    flag? : string
} 