import axios from "axios"
import type { translateProps } from "../interfaces/interfaces"

export const translate = async ({ translatedText, textIn, translateTo }: translateProps) : Promise<string>  =>{
    try {
        const res = await axios.get(`https://api.mymemory.translated.net/get?q=${translatedText}&langpair=${textIn}|${translateTo}`)
        return res.data.responseData.translatedText
    } catch (error) {
        console.log(error)
        return ""
    }
}
