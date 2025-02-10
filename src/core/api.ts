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