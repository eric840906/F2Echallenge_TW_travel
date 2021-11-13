import {
  VStack,
  List,
  ListItem,
  ListIcon,
  Grid,
  Image,
  Flex,
  Text,
  Heading,
  useColorMode,
  Divider
} from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiGlobalLine } from 'react-icons/ri'
import { FiMapPin, FiClock } from 'react-icons/fi'
import { useParams, useNavigate } from 'react-router-dom'
import { useDetail, useNearby } from 'hooks'
import { useRef, useState, useEffect } from 'react'
import { SectionDivider } from 'Components/SectionDivider'
import { SpotCard } from 'Components/Cards'
import { MyMap } from 'Components/Map'
import placeholder from 'assets/images/placeholders/placeholderBig.png'
const DetailPage = () => {
  const navigate = useNavigate()
  const { colorMode } = useColorMode()
  const [currentDetail, setCurrentDetail] = useState({})
  const [nearbySpots, setNearbySpots] = useState([])
  const [nearbyRests, setNearbyRests] = useState([])
  const [nearbySleeps, setNearbySleeps] = useState([])
  const { target, id } = useParams()
  const [nearbyScenicSpots, searchNearbyScenicSpots] = useNearby({
    target: 'ScenicSpot'
  })
  const [nearbyRestaurants, searchNearbyRestaurants] = useNearby({
    target: 'Restaurant'
  })
  const [nearbyHotels, searchNearbyHotels] = useNearby({
    target: 'Hotel'
  })
  const [detail, search] = useDetail({ target }, id)
  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      search(id)
    }
  }, [])
  useEffect(() => {
    setCurrentDetail(detail)
    // console.log(currentDetail)
  }, [detail])
  useEffect(() => {
    currentDetail[0] &&
      searchNearbyScenicSpots({
        lat: currentDetail[0].Position.PositionLat,
        lon: currentDetail[0].Position.PositionLon
      })
    currentDetail[0] &&
      searchNearbyRestaurants({
        lat: currentDetail[0].Position.PositionLat,
        lon: currentDetail[0].Position.PositionLon
      })
    currentDetail[0] &&
      searchNearbyHotels({
        lat: currentDetail[0].Position.PositionLat,
        lon: currentDetail[0].Position.PositionLon
      })
  }, [currentDetail])
  useEffect(() => {
    setNearbySpots(nearbyScenicSpots)
  }, [nearbyScenicSpots])
  useEffect(() => {
    setNearbyRests(nearbyRestaurants)
  }, [nearbyRestaurants])
  useEffect(() => {
    setNearbySleeps(nearbyHotels)
  }, [nearbyHotels])
  const renderTag = (tagItem) => {
    return tagItem ? (
      <Flex
        borderRadius="16px"
        py={1.5}
        px={3}
        background="brand.100"
        color="white"
        fontSize="14px"
      >
        {tagItem}
      </Flex>
    ) : (
      ''
    )
  }
  const renderNearby = (target, spots) => {
    return spots.map((spot) => (
      <SpotCard
        key={spot.ID}
        spot={spot}
        onClick={() => navigate(`/${target}/detail/${spot.ID}`)}
      />
    ))
  }
  return currentDetail[0] ? (
    <VStack gridGap={7} my={14}>
      <Grid
        w="80%"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)'
        }}
        gridGap={5}
      >
        <Image
          backgroundColor="white"
          borderRadius="16px"
          src={
            currentDetail[0].Picture.PictureUrl1
              ? currentDetail[0].Picture.PictureUrl1
              : placeholder
          }
          h="100%"
        ></Image>
        <Flex flexDirection="column" gridGap={3}>
          <Text color="brand.orange" fontSize={{ base: '14px', md: '16px' }}>
            {currentDetail[0].City}
          </Text>
          <Flex gridGap={3}>
            {renderTag(currentDetail[0].Class1)}
            {renderTag(currentDetail[0].Class2)}
            {renderTag(currentDetail[0].Class3)}
            {renderTag(currentDetail[0].Level)}
          </Flex>
          <Heading
            size="md"
            color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
          >
            {currentDetail[0].Name}
          </Heading>
          <Divider />
          <List spacing={3} my={2}>
            <ListItem wordBreak="break-all">
              <ListIcon
                as={FiClock}
                w="20px"
                h="20px"
                color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
              />
              {currentDetail[0].OpenTime ? currentDetail[0].OpenTime : '無資訊'}
            </ListItem>
            {currentDetail[0].Phone && (
              <ListItem wordBreak="break-all">
                <ListIcon
                  as={FaPhoneAlt}
                  w="20px"
                  h="20px"
                  color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
                />
                <a href={`tel: +${currentDetail[0].Phone}`}>
                  {currentDetail[0].Phone}
                </a>
              </ListItem>
            )}
            {currentDetail[0].WebsiteUrl && (
              <ListItem wordBreak="break-all">
                <ListIcon
                  as={RiGlobalLine}
                  w="25px"
                  h="25px"
                  color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
                />
                <a
                  href={currentDetail[0].WebsiteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {currentDetail[0].WebsiteUrl}
                </a>
              </ListItem>
            )}
            {currentDetail[0].Position && (
              <ListItem wordBreak="break-all">
                <ListIcon
                  as={FiMapPin}
                  w="25px"
                  h="25px"
                  color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
                />
                <a
                  href={`http://www.google.com/maps/place/${currentDetail[0].Position.PositionLat},${currentDetail[0].Position.PositionLon}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {currentDetail[0].Name}
                </a>
              </ListItem>
            )}
            {currentDetail[0].Grade && (
              <ListItem wordBreak="break-all">
                <ListIcon
                  as={AiFillStar}
                  w="25px"
                  h="25px"
                  color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
                />
                {currentDetail[0].Grade}
              </ListItem>
            )}
            <Divider />
          </List>
          <Text>{currentDetail[0].DescriptionDetail}</Text>
        </Flex>
      </Grid>
      <MyMap
        lat={currentDetail[0] && currentDetail[0].Position.PositionLat}
        lng={currentDetail[0] && currentDetail[0].Position.PositionLon}
        name={currentDetail[0].Name}
      />
      <VStack px={5}>
        <SectionDivider
          title="附近景點"
          color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
        />
      </VStack>
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
        {renderNearby('ScenicSpot', nearbySpots)}
      </Grid>
      <VStack px={5}>
        <SectionDivider
          title="附近餐廳"
          color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
        />
      </VStack>
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
        {renderNearby('Restaurant', nearbyRests)}
      </Grid>
      <VStack px={5}>
        <SectionDivider
          title="附近住宿"
          color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
        />
      </VStack>
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
        {renderNearby('Hotel', nearbySleeps)}
      </Grid>
    </VStack>
  ) : (
    <VStack gridGap={7} my={14}>
      <Grid
        w="80%"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)'
        }}
        gridGap={5}
      ></Grid>
    </VStack>
  )
}

export default DetailPage
