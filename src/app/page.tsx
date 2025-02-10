import { HomePage } from "@/components/homePage";
import { getAll } from "@/core/api";

async function getAllCountries() 
{
  const countries = await getAll()
 
  return countries
}

export default async function Home() 
{
  const countries = await getAllCountries()

  return (<HomePage countries={countries}/>)
}
