import { useState, useEffect } from "react"
import {addToast, ToastProvider} from "@heroui/toast";
import { Languages } from "../utils/variables";
import { translate } from "../utils/translator_function";
import SortAlfa from '../assets/images/Sort_alfa.svg'
import type{ translatorProps } from "../interfaces/interfaces";
import Utilities from "./utilities";
import debounce from "lodash.debounce";

const Translator = ({setTranslatedText, setTranslatedTextTo }: translatorProps) => {
    const [text, setText] = useState<string>('Hello, how are you ?')
    const [count, setCount] = useState<number>(0)
    const [textIn, setTextIn] =  useState<string>('en')
    const [translateTo, setTranslateTo] =  useState<string>('fr')

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = e.target.value
        if (newValue.length <= 500){
            setText(newValue)
        }
    }

    const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>)=>{
        setTextIn(e.target.value)
        console.log(textIn)
    }

    const handleRadio = ( e : React.ChangeEvent<HTMLInputElement>) =>{
        setTextIn(e.target.value)
        textIn !== "en" ? setTranslateTo('fr') : setTranslateTo('en')
    }

    
    useEffect(()=>{
        setCount(text.length)
        const getTranslation = async () => {
            const newText = await translate({
                translatedText : text.length !== 0 ? text : '',
                textIn : textIn,
                translateTo : translateTo,
            })
            setTranslatedText(newText)
            setTranslatedTextTo(translateTo)
        }
        const debounced = debounce(getTranslation , 500)
        debounced()
    }, [text, textIn, translateTo])

  return (
    <>
        <form action="">
            <div className="title">
                {/* <p>Detected Language</p> */}
                <label htmlFor="lang">
                    <input type="radio" name="lang" value="en" id="lang" 
                    checked={textIn === "en"} onChange={handleRadio}
                    />
                    English
                </label>
                <label htmlFor="lang"> 
                    <input type="radio" name="lang" value="fr" id="lang" 
                    checked={textIn === "fr"} onChange={handleRadio}
                    />
                    French
                </label>
                <select name="lang" id="selectLang" onChange={handleSelect} value={textIn}>
                    <option value="">---Selectionner une langue---</option>
                    {
                        Languages.map((language, index)=>{
                            return (
                                <option key={index} value={language.lang}>{language.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <input 
                className="content" 
                type="text"
                value={text}
                onChange={handleChange}
            />
            <div className="count">
                {count}/500
            </div>
            <Utilities text={text} voiceIn={textIn}>
                <button type="button" onClick={(e)=>{e.preventDefault()}}>
                    <img src={SortAlfa} alt="translator logo" />
                    <span>Translator</span>
                </button>
            </Utilities>
        </form>
    </>
  )
}

export default Translator