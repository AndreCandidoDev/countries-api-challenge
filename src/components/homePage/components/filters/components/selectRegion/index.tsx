import Select from 'react-select';
import styles from "./styles.module.scss"
import { useContext } from 'react';
import { AppContext } from '@/context';
import { getAll, getByRegion } from '@/core/api';

type selectOption = {
    label: string
    value: string
}

export const SelectRegion = () =>
{
    const { setData, mode } = useContext(AppContext)

    const options = [
        {
            label: "Africa",
            value: "Africa"
        },
        {
            label: "America",
            value: "America"
        },
        {
            label: "Asia",
            value: "Asia"
        },
        {
            label: "Europe",
            value: "Europe"
        },
        {
            label: "Oceania",
            value: "Oceania"
        }
    ]

    const handleSelect = async (option: selectOption | null) =>
    {
        if(option)
        {
            const filtered = await getByRegion(option?.value)
            
            setData(filtered)
        }
        else 
        {
            const all = await getAll()

            setData(all)
        }
    }

    const selectClassName = () =>
    {
        if(mode === 'dark')
        {
            return styles.select + " " + styles.selectDark
        }

        return styles.select + " " + styles.selectLight
    }

    return (
        <Select
            className={selectClassName()}
            placeholder={"Filter By Region"}
            classNamePrefix="select"
            isClearable={true}
            isSearchable={false}
            name="color"
            options={options}
            onChange={(e) => handleSelect(e)}
        />
    )
}