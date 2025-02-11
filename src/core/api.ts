const url = "https://restcountries.com/v3.1"

export const getAll = async () =>
{
    try 
    {
        const result = await fetch(`${url}/all`)
    
        if(result.ok)
        {
            const data = await result.json()

            return data
        }
    
        return []
    }
    catch(e)
    {
        console.error("Error", e)
        return []
    }
}

export const getByName = async (name: string) => 
{
    try
    {
        const result = await fetch(`${url}/name/${name}`)

        if(result.ok)
        {
            const data = await result.json()
            return data
        }

        return []
    }
    catch(e)
    {
        console.error("Error", e)
        return []
    }
}

export const getByRegion = async (region: string) => 
{
    try
    {
        const result = await fetch(`${url}/region/${region.toLowerCase()}`)

        if(result.ok)
        {
            const data = await result.json()
            return data
        }
    }
    catch(e)
    {
        console.error("Error", e)
        return []
    }
}