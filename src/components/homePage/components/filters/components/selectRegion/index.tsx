import styles from "./styles.module.scss"

export const SelectRegion = () =>
{
    return (
        <select className={styles.select}>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    )
}