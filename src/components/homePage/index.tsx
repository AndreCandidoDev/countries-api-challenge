"use client"
import styles from "./styles.module.scss"
import { useContext, useEffect } from "react"
import { AppContext } from "@/context"
import { countryType } from "@/types/countryType"
import { CountryCard } from "./components/countryCard"
import { Filters } from "./components/filters"

interface HomePageProps {
    countries: countryType[]
}

export const HomePage: React.FC<HomePageProps> = ({ countries }) =>
{
    const { mode, data, setData } = useContext(AppContext)

    useEffect(() => { setData(countries) }, [countries, setData])

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
            <div className={styles.content}>
                <Filters/>
                <div className={styles.countries}>
                    {data.length > 0 && (
                        data.map((country: countryType, key: number) => (
                            <CountryCard 
                                key={key} 
                                country={country}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}