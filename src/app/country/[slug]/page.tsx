import { CountryPage } from "@/components/countryPage";
import { getAll, getByName } from "@/core/api";
import { countryType } from "@/types/countryType";
import { notFound } from "next/navigation";

type paramsType = {
  slug: string
}

export const dynamicParams = true

let cachedCountries: countryType[] | null = null

async function getCachedCountries(): Promise<countryType[]>
{
  if (!cachedCountries) 
  {
    cachedCountries = await getAll()
  }

  return cachedCountries || []
}

export async function generateStaticParams(): Promise<{slug: string}[]> 
{
  const countries = await getCachedCountries() 

  const slugs = countries.map((country: countryType) => ({ slug: (country.name.common).toLowerCase() }))
  
  return slugs
}

async function validateCountry(slug: string): Promise<boolean>
{
  const countries = await getCachedCountries()

  const validSlugs = countries.map((country: countryType) => (country.name.common).toLowerCase())
  
  return validSlugs.includes(slug)
}

async function borderCountries(slug: string): Promise<string[]>
{
  const countries = await getCachedCountries()

  const countryData = countries.find((item: countryType) => (item.name.common).toLowerCase() === slug)

  const names = []

  if (countryData) 
  {
    const codesCountries = countryData.borders || []

    const countryMap = new Map(countries.map((item: countryType) => [item.cca3, item]))

    for (const code of codesCountries) 
    {
      const data = countryMap.get(code);

      if (data) 
      {
        names.push(data.name.common);
      }
    }
  }

  return names
}

export default async function Country({ params }: { params: Promise<paramsType> }) 
{
  const { slug } = await params

  const paramSlug = decodeURIComponent(slug)

  const isValid = await validateCountry(paramSlug)

  if (!isValid) 
  {
    return notFound()
  }

  const country = await getByName(paramSlug)

  if(country.length === 0)
  {
    return notFound()
  }

  const borders = await borderCountries(paramSlug)

  return (<CountryPage country={country[0]} borders={borders}/>)
}