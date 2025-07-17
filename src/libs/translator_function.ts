import axios from "axios"

interface translatorProps {
    translatedText: string,
    textIn: string,
    translateTo : string
}

export const translate = async ({ translatedText, textIn, translateTo }: translatorProps) : Promise<string>  =>{
    try {
        const res = await axios.get(`https://api.mymemory.translated.net/get?q=${translatedText}&langpair=${textIn}|${translateTo}`)
        return res.data.responseData.translatedText
    } catch (error) {
        console.log(error)
        return ""
    }
}
