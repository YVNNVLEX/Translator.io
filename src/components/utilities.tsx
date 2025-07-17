import { useSpeech } from 'react-text-to-speech'
import SoundIcon from '../assets/images/sound_max_fill.svg'
import Copy from '../assets/images/Copy.svg'
import type { PropsWithChildren } from 'react'

interface UtilitiesProps extends PropsWithChildren{
    text : string,
}

const Utilities = ({text, children} : UtilitiesProps) => {

    const {
        speechStatus,
        start,
        stop
    } = useSpeech({ text : text, lang : "en-US"})

    const copyText = (e : React.SyntheticEvent)=>{
        e.preventDefault()
        navigator.clipboard.writeText(text)
    }

  return (
    <>
        <div className="bottom">
                <div>
                    {
                        speechStatus !== "started" ?
                        <button type="button" onClick={start}>
                            <img src={SoundIcon} alt="sound icon" />
                        </button> :
                        <button onClick={stop}>
                            <img src={SoundIcon} alt="sound icon" />
                        </button>
                    }
                    <button type="button" onClick={copyText}>
                        <img src={Copy} alt="copy icon" />
                    </button>
                </div>
                {children}
        </div>
    </>
  )
}

export default Utilities