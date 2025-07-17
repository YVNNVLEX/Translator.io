import {useState} from 'react'
import type { TitleProps } from './interfaces/page'
import Translator from './components/translator_input'
import TranslateComponent from './components/translate_input'

function App({title}: TitleProps) { // Parent

  const [translateText, setTranslateText] = useState('')
  

  return (
    <>
        <title>{title}</title>
        <div className='logo'>
            <img src="./assets/react.svg" alt="logo" />
            <span>Translated.io</span>
        </div>
        <div className='contentdiv'>
              <Translator setTranslatedText={setTranslateText}/>
              <TranslateComponent translatedText={translateText} /> {/*Enfant */}
        </div>
    </>
  )
}

export default App
