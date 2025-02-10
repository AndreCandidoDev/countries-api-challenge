import { CountrySearch } from "./components/countrySearch"
import { SelectRegion } from "./components/selectRegion"
import styles from "./styles.module.scss"

export const Filters = () =>
{
    return (
        <div className={styles.filters}>
            <CountrySearch/>
            <SelectRegion/>
        </div>
    )
}