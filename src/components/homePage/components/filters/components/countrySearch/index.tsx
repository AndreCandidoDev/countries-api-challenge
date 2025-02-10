import { useContext, useRef, useState } from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import { AppContext } from "@/context"
import { getAll, getByName } from "@/core/api"

export const CountrySearch: React.FC = () =>
{
    const { mode, setData } = useContext(AppContext)

    const [text, setText] = useState("")

    const ref = useRef<HTMLInputElement>(null)

    const countrySearchClassName = () =>
    {
        if(mode === 'dark')
        {
            return styles.countrySearch + " " + styles.countrySearchDark
        }

        return styles.countrySearch + " " + styles.countrySearchLight
    }

    const handleSearch = async () =>
    {
        const result = await getByName(text)

        if(result.length > 0)
        {
            setData(result)
        }
    }
 
    const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) =>
    {
        if(e.key === 'Enter' && text !== "")
        {
            await handleSearch()
        }
        else if(e.key === 'Enter' && text === "")
        {
            const result = await getAll()
            setData(result)
        }
    }
 
    return (
        <div 
            className={countrySearchClassName()}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleEnter(e)}
        >
            <Image
                priority    
                src={"/svg/searchDark.svg"}
                height={20}
                width={20}
                alt=""
            />
            <input 
                type="text" 
                placeholder="Search for a country ..."
                ref={ref}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}