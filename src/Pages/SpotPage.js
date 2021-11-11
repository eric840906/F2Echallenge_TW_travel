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
  const [searchTerm, setSearchTerm] = useState('Taipei')
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
      search(searchTerm, '', '', 0)
    }
  }, [searchTerm])
  useEffect(() => {
    if (skip === 0) {
      return {}
    } else {
      search(searchTerm, '', '', skip)
    }
  }, [skip])
  useEffect(() => {
    setLoadMore(!(spots.length === 0))
    setCurrentSpots([...currentSpots, ...spots])
    // console.log(currentSpots)
  }, [spots])
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false
  //   } else {
  //     if (loadMore === false) {
  //       errorToast('資料已經到最底囉')
  //     }
  //   }
  // }, [loadMore])
  // const renderCard = spots =>
  //   spots.map(spot => (
  //     <AspectRatio key={spot.ID} ratio={1.67 / 1}>
  //       <Flex
  //         key={spot.ID}
  //         justifyContent='end !important'
  //         borderRadius='10px'
  //         overflow='hidden'
  //         flexDirection='column'
  //         boxShadow='lg'
  //         marginBottom='40px'
  //         bg='brand.100'
  //         backgroundPosition='bottom'
  //         backgroundSize='cover'
  //         backgroundRepeat='no-repeat'
  //         backgroundImage={
  //           spot.Picture.PictureUrl1
  //             ? spot.Picture.PictureUrl1
  //             : 'http://www.vvc.cl/wp-content/uploads/2016/09/ef3-placeholder-image.jpg'
  //         }
  //         onClick={() => navigate(`/scenicspots/detail/${spot.ID}`)}
  //       >
  //         <Heading
  //           w='100%'
  //           background={colorMode === 'light' ? 'white' : 'brand.black'}
  //           color={colorMode === 'light' ? 'brand.200' : 'brand.grey'}
  //           textAlign='center'
  //           size={{ base: 'sm', sm: 'md' }}
  //           py={3}
  //         >
  //           {spot.Name}
  //         </Heading>
  //       </Flex>
  //     </AspectRatio>
  //   ))
  const renderCard = spots => {
    return spots.map(spot => (
      <SpotCard
        key={spot.ID}
        spot={spot}
        onClick={() => navigate(`/scenicspots/detail/${spot.ID}`)}
      />
    ))
  }
  return (
    <VStack w='100%' gridGap={7} my={14}>
      <VStack px={5}>
        <SectionDivider
          title='想去哪玩?'
          color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
        />
      </VStack>
      <Select
        maxW='300px'
        onChange={e => setSearchTerm(e.currentTarget.value)}
        value={searchTerm}
      >
        {[...cityMap].map(city => (
          <option key={city[1]} value={city[1]}>
            {city[0]}
          </option>
        ))}
      </Select>
      <Grid
        w='80%'
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
        variant='default'
        disabled={!loadMore}
        onClick={() => setSkip(skip + 30)}
      >
        {loadMore ? '載入更多' : '已到底部'}
      </Button>
    </VStack>
  )
}

export default SpotPage
