"use client"
import styles from "./styles.module.scss"
import Image from "next/image"
import { countryType } from "@/types/countryType"
import { useContext } from "react"
import { AppContext } from "@/context"
import { useRouter } from "next/navigation"

interface CountryPageProps {
    country: countryType
    borders: string[]
}

export const CountryPage: React.FC<CountryPageProps> = ({ country, borders }) => 
{
    const { mode } = useContext(AppContext)

    const router = useRouter()

    const countryPageClassName = () => 
    {
        if(mode === 'dark')
        {
            return styles.countryPage + " " + styles.countryPageDark
        }

        return styles.countryPage + " " + styles.countryPageLight
    }

    const getCurrencies = () =>
    {
        let currencies = ""
        
        if(country.currencies)
        {
            const keys = Object.keys(country.currencies)
            
            currencies = keys.reduce((acc, cur) => acc + ", " + cur)
        }
        
        return currencies
    }

    const getLanguages = () =>
    {
        let languages = ""

        if(country.languages)
        {
            const keys = Object.keys(country.languages)
            
            languages = keys.map((item) => country.languages[item]).reduce((acc, cur) => acc + ", " + cur)
        }
        
        return languages
    }

    const getCapitals = () =>
    {
        return country.capital ? country.capital.reduce((acc, cur) => acc + ", " + cur) : ""
    }

    return (
        <div className={countryPageClassName()}>
            {country && (
                <div className={styles.content}>
                    <div className={styles.backLine}>
                        <button 
                            className={styles.backButton}
                            onClick={() => router.push("/")}
                        >
                            <span>&#8592;</span>
                            <span>Back</span>
                        </button>
                    </div>
                    <div className={styles.infos}>
                        <div className={styles.flag}>
                            <Image
                                priority    
                                src={country?.flags?.png}
                                alt={String(country?.flags?.alt)}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lineInfo}>
                                <h3>{country.name.common}</h3>
                                <div></div>
                            </div>
                            <div className={styles.countryInfo}>
                                <div className={styles.lineInfo}>
                                    <div className={styles.textInfo}>
                                        <span>Official Name:</span>
                                        <span>{country.name.official}</span>
                                    </div>
                                    <div className={styles.textInfo}>
                                        
                                    </div>
                                </div>
                                <div className={styles.lineInfo}>
                                    <div className={styles.textInfo}>
                                        <span>Population:</span>
                                        <span>{new Intl.NumberFormat('en').format(country.population)}</span>
                                    </div>
                                    <div className={styles.textInfo}>
                                        <span>Currencies</span>
                                        <span>{getCurrencies()}</span>
                                    </div>
                                </div>
                                <div className={styles.lineInfo}>
                                    <div className={styles.textInfo}>
                                        <span>Region:</span>
                                        <span>{country.region}</span>
                                    </div>
                                    <div className={styles.textInfo}>
                                        <span>Languages:</span>
                                        <span>{getLanguages()}</span>
                                    </div>
                                </div>
                                <div className={styles.lineInfo}>
                                    <div className={styles.textInfo}>
                                        <span>Sub Region:</span>
                                        <span>{country.subregion}</span>
                                    </div>
                                    <div className={styles.textInfo}>
                                        {country.tld && (
                                            <>
                                                <span>Top Level Domain:</span>
                                                <span>{country.tld[0]}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.lineInfo}>
                                    <div className={styles.textInfo}>
                                        <span>Capital:</span>
                                        <span>{getCapitals()}</span>
                                    </div>
                                    <div className={styles.textInfo}></div>
                                </div>
                            </div>
                            <div className={styles.lineInfo}>
                                <div className={styles.textInfo}>
                                    <span>Border Countries:</span>
                                    <span className={styles.borders}>
                                        {borders.map((item, key) => (
                                            <button key={key}>{item}</button>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}