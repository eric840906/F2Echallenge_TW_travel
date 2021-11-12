import { useEffect, useState } from 'react'
import { travelInfo } from 'api/travelapi'

const useSpots = (options, defaultSearchTerm, defaultClass = '') => {
  const [spots, setSpots] = useState([])
  useEffect(() => {
    const searchTerm = defaultSearchTerm === 'Taiwan' ? '' : defaultSearchTerm
    const searchClass = defaultClass === 'All' ? '' : defaultClass
    console.log('searchTerm' + searchTerm)
    console.log('searchClass' + searchClass)
    search({ term: searchTerm, classify: searchClass })
  }, [defaultSearchTerm, defaultClass])
  const search = async ({ term, classify, skip }) => {
    const { target } = options
    const searchTerm = term === 'Taiwan' ? '' : term
    const searchClass = classify === 'All' ? '' : classify
    const classifyString = searchClass
      ? `$filter=Class eq '${searchClass}'`
      : ''
    const skipString = skip ? `$skip=${skip}` : ''
    const tail = '$top=30&$format=JSON'
    const finalUrl = `${target}/${searchTerm}?${skipString}&${classifyString}&${tail}`
    console.log('final' + finalUrl)
    try {
      const { data } = await travelInfo.get(finalUrl)
      setSpots(data)
    } catch (error) {
      console.log(error)
    }
  }
  return [spots, search]
}

export default useSpots
