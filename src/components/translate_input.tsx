import { useState, useEffect } from "react"
import Utilities from "./utilities"
import { Languages } from "../utils/variables"
import type { translateComponentProps } from "../interfaces/interfaces"

const TranslateComponent = ( {translatedText, voiceTo} : translateComponentProps ) => {

  const [textIn, setTextIn] = useState<string>('fr')
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
      e.target.value = voiceTo
      setTextIn(e.target.value)
      console.log(textIn)
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>)=>{
      e.target.value = voiceTo
      setTextIn(e.target.value)
      console.log(textIn)
  }

  return (
    <>
        <div className="title">
                <label htmlFor="lang">
                    <input type="radio" name="en" value="en" id="lang" 
                      checked={textIn === "en"} onChange={handleChange}
                    />
                    English
                </label>
                <label htmlFor="lang">
                    <input type="radio" name="fr" id="lang" value="fr"
                      checked={textIn === 'fr'} onChange={handleChange}
                    />
                    French
                </label>
                <select name="lang" id="selectLang" value={textIn} onChange={handleSelect}>
                  <option value="">---Selectionner une langue---</option>
                  {
                      Languages.map((language, index)=>{
                          return (
                              <option key={index} value={language.lang}>{language.name}</option>
                          )
                      })
                  }
                </select>
                <div>
                    {translatedText}
                </div>
                <Utilities text={translatedText} voiceIn={voiceTo}/>
        </div>

    </>
  )
}

export default TranslateComponent