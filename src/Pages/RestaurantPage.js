import { useEffect, useState } from 'react'
import { restaurantCategories } from 'data/restaurantCategories'
import {
  VStack,
  Grid,
  useColorMode,
  Select,
  Button,
  FormControl,
  Input,
  IconButton,
  Box
} from '@chakra-ui/react'
import { cityMap } from 'data/cityData'
import { useParams, useNavigate } from 'react-router-dom'
import { useSpots } from 'hooks'
import { SearchIcon } from '@chakra-ui/icons'
import { SectionDivider } from 'Components/SectionDivider'
import { SpotCard } from 'Components/Cards'
const SpotPage = () => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  const { place, classify } = useParams()
  const [currentSpots, setCurrentSpots] = useState([])
  const [classitem, setClassItem] = useState(classify)
  const [searchTerm, setSearchTerm] = useState(place)
  const [searchString, setSearchString] = useState('')
  const [skip, setSkip] = useState(0)
  const [spots, search] = useSpots({ target: 'Restaurant' }, place, classify)
  const [loadMore, setLoadMore] = useState(true)
  // const isInitialMount = useRef(true)
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false
  //   } else {
  //     setLoadMore(true)
  //     setSkip(0)
  //     setCurrentSpots([])
  //     search({ term: searchTerm, classify: classitem, skip: 0, searchString })
  //   }
  // }, [searchTerm, classitem])
  useEffect(() => {
    if (skip === 0) {
      return {}
    } else {
      search({ term: searchTerm, classify: classitem, skip, searchString })
    }
  }, [skip])
  useEffect(() => {
    setLoadMore(!(spots.length === 0))
    setCurrentSpots([...currentSpots, ...spots])
    // console.log(currentSpots)
  }, [spots])
  const searchInfo = () => {
    setLoadMore(true)
    setSkip(0)
    setCurrentSpots([])
    search({ term: searchTerm, classify: classitem, skip: 0, searchString })
  }
  const renderCard = (spots) => {
    return spots.map((spot) => (
      <SpotCard
        key={spot.ID}
        spot={spot}
        onClick={() => navigate(`/Restaurant/detail/${spot.ID}`)}
      />
    ))
  }
  return (
    <VStack w="100%" gridGap={7} my={14}>
      <VStack px={5}>
        <SectionDivider
          title="想吃什麼?"
          color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
        />
      </VStack>
      <Box
        as="form"
        maxW="300px"
        onSubmit={(e) => {
          e.preventDefault()
          searchInfo()
        }}
      >
        <FormControl display="flex">
          <Select
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            value={searchTerm}
            borderRadius="10px 0 0 0"
            borderBottom="none"
          >
            {[...cityMap].map((city) => (
              <option key={city[1]} value={city[1]}>
                {city[0]}
              </option>
            ))}
          </Select>
          <Select
            borderRadius="0 10px 0 0"
            borderBottom="none"
            onChange={(e) => setClassItem(e.currentTarget.value)}
            value={classitem}
          >
            <option disabled>選擇種類</option>
            {[...[{ name: '全部' }], ...restaurantCategories].map((item) => (
              <option
                key={item.name}
                value={item.name === '全部' ? '' : item.name}
              >
                {item.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl display="flex">
          <Input
            placeholder="搜尋地點"
            borderRadius="0 0 0 10px"
            borderRight="none"
            onChange={(e) => setSearchString(e.currentTarget.value)}
          ></Input>
          <IconButton
            type="submit"
            variant="outline"
            borderLeft="none"
            borderRadius="0 0 10px 0"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </FormControl>
      </Box>
      {/* <Flex gridGap={5}>
        <Select
          maxW="300px"
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          value={searchTerm}
        >
          <option disabled>選擇地區</option>
          {[...cityMap].map((city) => (
            <option key={city[1]} value={city[1]}>
              {city[0]}
            </option>
          ))}
        </Select>
        <Select
          maxW="300px"
          onChange={(e) => setClassItem(e.currentTarget.value)}
          value={classitem}
        >
          <option disabled>選擇種類</option>
          {[...[{ name: '全部' }], ...restaurantCategories].map((item) => (
            <option
              key={item.name}
              value={item.name === '全部' ? '' : item.name}
            >
              {item.name}
            </option>
          ))}
        </Select>
      </Flex> */}
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
