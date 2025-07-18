
export interface TitleProps{
    title : String;
}

export interface translatorProps{
    setTranslatedText : (value : string)=> void
}

export interface translateComponentProps{
    translatedText : string
}

export interface translateProps {
    translatedText: string,
    textIn: string,
    translateTo : string
}