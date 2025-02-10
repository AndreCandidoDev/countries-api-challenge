import styles from "./styles.module.scss"
import Image from "next/image"
import { countryType } from "@/types/countryType"
import { useContext } from "react"
import { AppContext } from "@/context"

interface CountryCardProps {
    country: countryType
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) =>
{
    console.log(country)

    const { mode } = useContext(AppContext)

    const countryCardClassName = () =>
    {
        if(mode === "dark")
        {
            return styles.countryCard + " " + styles.countryCardDark
        }
        
        return styles.countryCard + " " + styles.countryCardLight
    }

    return (
        <div className={countryCardClassName()}>
            <div className={styles.flag}>
                <Image
                    priority    
                    src={country.flags.png}
                    height={20}
                    width={20}
                    alt={String(country.flags.alt)}
                />
            </div>
            <div className={styles.infos}>
                <h3>{country.name.common}</h3>
                <div className={styles.info}>
                    <span>Population:</span>
                    <span>{country.population}</span>
                </div>
                <div className={styles.info}>
                    <span>Region:</span>
                    <span>{country.region}</span>
                </div>
                <div className={styles.info}>
                    <span>Capital:</span>
                    <span>{country.capital}</span>
                </div>
            </div>
        </div>
    )
}