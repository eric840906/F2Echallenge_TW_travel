import { useEffect, useState } from 'react'
import { travelInfo } from 'api/travelapi'

const useSpots = (
  options,
  defaultSearchTerm,
  defaultPlace = '',
  defaultClass = ''
) => {
  const [spots, setSpots] = useState([])
  useEffect(() => {
    // console.log('defaultSearchTerm' + defaultSearchTerm)
    search(defaultSearchTerm, defaultPlace, defaultClass)
  }, [defaultSearchTerm, defaultPlace, defaultClass])
  const search = async (term, place = '', classify = '', skip = '') => {
    const { target } = options
    const classifyString = classify ? `$filter=Class eq '${classify}'` : ''
    const skipString = skip ? `$skip=${skip}` : ''
    // console.log('classifyString' + classifyString)
    const tail = '$top=30&$format=JSON'
    const finalUrl = `${target}/${term}?${skipString}&${classifyString}&${tail}`
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
