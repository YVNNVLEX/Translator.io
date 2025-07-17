import Utilities from "./utilities"
import type { translateComponentProps } from "../interfaces/page"

const TranslateComponent = ( {translatedText} : translateComponentProps ) => {
  return (
    <>
        <div className="title">
                <label htmlFor="en">
                    <input type="checkbox" name="en" id=""/>
                    English
                </label>
                <label htmlFor="fr">
                    <input type="checkbox" name="fr" id="" />
                    French
                </label>
                <div>
                    {translatedText}
                </div>
                <Utilities text={translatedText}/>
        </div>

    </>
  )
}

export default TranslateComponent