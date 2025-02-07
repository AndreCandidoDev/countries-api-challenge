"use client"
import { useContext } from "react"
import styles from "./styles.module.scss"
import { AppContext } from "@/context"

export const HomePage = () =>
{
    const { mode } = useContext(AppContext)

    const homePageClassName = () =>
    {
        if(mode === 'dark')
        {
            return styles.homePage + " " + styles.homePageDark
        }

        return styles.homePage + " " + styles.homePageLight
    }

    return (
        <div className={homePageClassName()}>
            <div className={styles.content}></div>
        </div>
    )
}