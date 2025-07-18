import { useState, useEffect } from "react"
import {addToast, ToastProvider} from "@heroui/toast";
import { translate } from "../libs/translator_function";
import SortAlfa from '../assets/images/Sort_alfa.svg'
import type{ translatorProps } from "../interfaces/page";
import Utilities from "./utilities";
import debounce from "lodash.debounce";

const Translator = ({setTranslatedText }: translatorProps) => {
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

    
    useEffect(()=>{
        setCount(text.length)
        const getTranslation = async () => {
            const newText = await translate({
                translatedText : text.length !== 0 ? text : '',
                textIn : textIn,
                translateTo : translateTo,
            })
            setTranslatedText(newText)
        }
        debounce(
            getTranslation , 500
        )
    }, [text])

  return (
    <>
        <form action="">
            <div className="title">
                <p>Detected Language</p>
                <label htmlFor="en">
                    <input type="checkbox" name="en" id=""/>
                    English
                </label>
                <label htmlFor="fr">
                    <input type="checkbox" name="fr" id="" />
                    French
                </label>
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
            <Utilities text={text}>
                <button type="submit">
                    <img src={SortAlfa} alt="translator logo" />
                    <span>Translator</span>
                </button>
            </Utilities>
        </form>
    </>
  )
}

export default Translator