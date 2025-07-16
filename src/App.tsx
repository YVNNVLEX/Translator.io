import { useState } from 'react'
import type { TitleProps } from './interfaces/page'
import Translator from './components/translator_input'

function App({title}: TitleProps) {

  return (
    <>
        <title>{title}</title>
        <div className='logo'>
            <img src="./assets/react.svg" alt="logo" />
            <span>Translated.io</span>
        </div>
        <div className='contentdiv'>
              <Translator>

              </Translator>
        </div>
    </>
  )
}

export default App
