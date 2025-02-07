"use client"
import { useContext } from 'react'
import styles from './styles.module.scss'
import { AppContext } from '@/context'
import { ModeButton } from './components/modeButton'

export const Header = () =>
{
    const { mode } = useContext(AppContext)

    const headerClassName = () =>
    {
        if(mode === 'dark')
        {
            return styles.header + " " + styles.headerDark
        }

        return styles.header + " " + styles.headerLight
    }

    return (
        <div className={headerClassName()}>
            <div className={styles.content}>
                <h3>Where in the world?</h3>
                <ModeButton/>
            </div>
        </div>
    )
}