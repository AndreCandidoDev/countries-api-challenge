import { useContext } from "react"
import styles from "./styles.module.scss"
import { AppContext } from "@/context"
import Image from "next/image"

export const ModeButton: React.FC = () =>
{
    const { mode, setMode } = useContext(AppContext)

    const handleMode = () =>
    {
        if(mode === 'dark')
        {
            setMode('light')
            return
        }

        setMode('dark')
    }

    const getIcon = () =>
    {
        return mode === 'dark' ? "/svg/moonLight.svg" : "/svg/moonDark.svg"
    }

    const getModeText = () =>
    {
        return mode === 'dark' ? "Dark" : "Light"
    }

    return (
        <div 
            className={styles.modeButton} 
            onClick={() => handleMode()}
        >
            <Image
                priority    
                src={getIcon()}
                height={20}
                width={20}
                alt=""
            />
            <p>{getModeText()} Mode</p>
        </div>
    )
}