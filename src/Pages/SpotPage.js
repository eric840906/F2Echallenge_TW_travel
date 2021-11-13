import { useEffect, useState, useRef } from 'react'
import { VStack, Grid, useColorMode, Select, Button } from '@chakra-ui/react'
import { cityMap } from 'data/cityData'
import { useParams, useNavigate } from 'react-router-dom'
import { useSpots } from 'hooks'
import { SectionDivider } from 'Components/SectionDivider'
import { SpotCard } from 'Components/Cards'
// import useMyToast from 'hooks/useMyToast'
const SpotPage = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  const { place } = useParams()
  const [currentSpots, setCurrentSpots] = useState([])
  const [searchTerm, setSearchTerm] = useState(place)
  const [skip, setSkip] = useState(0)
  const [spots, search] = useSpots({ target: 'ScenicSpot' }, place)
  const [loadMore, setLoadMore] = useState(true)
  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      setLoadMore(true)
      setSkip(0)
      setCurrentSpots([])
      search({ term: searchTerm, skip: 0 })
    }
  }, [searchTerm])
  useEffect(() => {
    if (skip === 0) {
      return {}
    } else {
      search({ term: searchTerm, skip })
    }
  }, [skip])
  useEffect(() => {
    setLoadMore(!(spots.length === 0))
    setCurrentSpots([...currentSpots, ...spots])
    // console.log(currentSpots)
  }, [spots])
  const renderCard = (spots) => {
    return spots.map((spot) => (
      <SpotCard
        key={spot.ID}
        spot={spot}
        onClick={() => navigate(`/ScenicSpot/detail/${spot.ID}`)}
      />
    ))
  }
  return (
    <VStack w="100%" gridGap={7} my={14}>
      <VStack px={5}>
        <SectionDivider
          title="想去哪玩?"
          color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
        />
      </VStack>
      <Select
        maxW="300px"
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        value={searchTerm}
      >
        {[...cityMap].map((city) => (
          <option key={city[1]} value={city[1]}>
            {city[0]}
          </option>
        ))}
      </Select>
      <Grid
        w="80%"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)'
        }}
        gridGap={5}
      >
        {renderCard(currentSpots)}
      </Grid>
      <Button
        variant="default"
        disabled={!loadMore}
        onClick={() => setSkip(skip + 30)}
      >
        {loadMore ? '載入更多' : '已到底部'}
      </Button>
    </VStack>
  )
}

export default SpotPage
