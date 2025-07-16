import { useState, useEffect } from "react"
import {addToast, ToastProvider} from "@heroui/toast";
import SoundIcon from '../assets/images/sound_max_fill.svg'
import Copy from '../assets/images/Copy.svg'
import SortAlfa from '../assets/images/Sort_alfa.svg'

const Translator = () => {
    const [text, setText] = useState<string>('Hello, how are you ?')
    const [count, setCount] = useState<number>(0)

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = e.target.value
        if (newValue.length <= 500){
            setText(newValue)
        }
    }

    const copyText = (e : React.SyntheticEvent)=>{
        e.preventDefault()
        navigator.clipboard.writeText(text)

    }
    useEffect(()=>{
        setCount(
            text.length 
        )
    }, [text])

  return (
    <>
        <form action="">
            <ul className="title">
                <li>Detect Language</li>
                <li> English </li>
                <li>French</li>
            </ul>
            <input 
                className="content" 
                type="text"
                value={text}
                onChange={handleChange}
            />
            <div className="count">
                {count}/500
            </div>
            <div className="bottom">
                <div>
                    <button>
                        <img src={SoundIcon} alt="sound icon" />
                    </button>
                    <button type="button" onClick={copyText}>
                        <img src={Copy} alt="copy icon" />
                    </button>
                </div>
                <button type="submit">
                    <img src={SortAlfa} alt="translator logo" />
                    <span>Translator</span>
                </button>
            </div>
        </form>
    </>
  )
}

export default Translator