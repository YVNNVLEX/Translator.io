import { useSpeech } from 'react-text-to-speech'
import SoundIcon from '../assets/images/sound_max_fill.svg'
import Copy from '../assets/images/Copy.svg'
import type { UtilitiesProps } from '../interfaces/interfaces'


const Utilities = ({text, voiceIn, children} : UtilitiesProps) => {

    const {
        speechStatus,
        start,
        stop
    } = useSpeech({ text : text, lang : voiceIn || "en-US"})

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
                        <button type="button" onClick={(e)=>{
                            e.preventDefault()
                            start()
                        }}>
                            <img src={SoundIcon} alt="sound icon" />
                        </button> :
                        <button onClick={(e)=>{
                            e.preventDefault()
                            stop()
                        }}>
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