import {useState} from 'react'
import type { TitleProps } from './interfaces/interfaces'
import Translator from './components/translator_input'
import TranslateComponent from './components/translate_input'

function App({title}: TitleProps) {

  const [translateText, setTranslateText] = useState('')
  const [translateTextIn, setTranslateTextIn] = useState('')

  

  return (
    <>
        <title>{title}</title>
        <div className='logo'>
            <img src="./assets/react.svg" alt="logo" />
            <span>Translated.io</span>
        </div>
        <div className='contentdiv'>
              <Translator setTranslatedText={setTranslateText} setTranslatedTextTo={setTranslateTextIn}/>
              <TranslateComponent translatedText={translateText} voiceTo={translateTextIn} />
        </div>
    </>
  )
}

export default App
