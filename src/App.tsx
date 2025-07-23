import {useState} from 'react'
import type { TitleProps } from './interfaces/interfaces'
import Translator from './components/translator_input'
import TranslateComponent from './components/translate_input'
import logo from './assets/images/logo.svg'

function App({title}: TitleProps) {

  const [translateText, setTranslateText] = useState('')
  const [translateTextIn, setTranslateTextIn] = useState('')

  return (
    <>
        <title>{title}</title>
        <img src={logo} alt="logo" id='logo'/>
        <div className='contentdiv'>
              <Translator setTranslatedText={setTranslateText} setTranslatedTextTo={setTranslateTextIn}/>
              <TranslateComponent translatedText={translateText} voiceTo={translateTextIn} />
        </div>
    </>
  )
}

export default App
