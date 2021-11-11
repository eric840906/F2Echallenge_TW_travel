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
import { FaPhoneAlt } from 'react-icons/fa'
import { RiGlobalLine } from 'react-icons/ri'
import { FiMapPin, FiClock } from 'react-icons/fi'
import { useParams, useNavigate } from 'react-router-dom'
import { useDetail, useNearby } from 'hooks'
import { useRef, useState, useEffect } from 'react'
import { SectionDivider } from 'Components/SectionDivider'
import { SpotCard } from 'Components/Cards'
const SpotInfoPage = () => {
  const navigate = useNavigate()
  const { colorMode } = useColorMode()
  const [currentDetail, setCurrentDetail] = useState({})
  const [nearbySpots, setNearbySpots] = useState([])
  const { id } = useParams()
  const [nearby, searchNearby] = useNearby({ target: 'Restaurant' })
  const [detail, search] = useDetail({ target: 'Restaurant' }, id)
  // console.log(id)
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
      searchNearby({
        lat: currentDetail[0].Position.PositionLat,
        lon: currentDetail[0].Position.PositionLon
      })
  }, [currentDetail])
  useEffect(() => {
    setNearbySpots(nearby)
    // console.log(nearbySpots)
  }, [nearby])
  const renderTag = tagItem => {
    return tagItem ? (
      <Flex
        borderRadius='16px'
        py={1.5}
        px={3}
        background='brand.100'
        color='white'
        fontSize='14px'
      >
        {tagItem}
      </Flex>
    ) : (
      ''
    )
  }
  const renderNearby = () => {
    return nearbySpots.map(spot => (
      <SpotCard
        key={spot.ID}
        spot={spot}
        onClick={() => navigate(`/restaurants/detail/${spot.ID}`)}
      />
    ))
  }
  return currentDetail[0] ? (
    <VStack gridGap={7} my={14}>
      <Grid
        w='80%'
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)'
        }}
        gridGap={5}
      >
        <Image
          borderRadius='16px'
          src={
            currentDetail[0].Picture.PictureUrl1
              ? currentDetail[0].Picture.PictureUrl1
              : 'http://www.vvc.cl/wp-content/uploads/2016/09/ef3-placeholder-image.jpg'
          }
          h='100%'
        ></Image>
        <Flex flexDirection='column' gridGap={3}>
          <Text color='brand.orange' fontSize={{ base: '14px', md: '16px' }}>
            {currentDetail[0].City}
          </Text>
          <Flex gridGap={3}>
            {renderTag(currentDetail[0].Class1)}
            {renderTag(currentDetail[0].Class2)}
            {renderTag(currentDetail[0].Class3)}
            {renderTag(currentDetail[0].Level)}
          </Flex>
          <Heading
            size='md'
            color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
          >
            {currentDetail[0].Name}
          </Heading>
          <Divider />
          <List spacing={3} my={2}>
            <ListItem wordBreak='break-all'>
              <ListIcon
                as={FiClock}
                w='20px'
                h='20px'
                color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
              />
              {currentDetail[0].OpenTime
                ? currentDetail[0].OpenTime
                : '開放空間'}
            </ListItem>
            {currentDetail[0].Phone && (
              <ListItem wordBreak='break-all'>
                <ListIcon
                  as={FaPhoneAlt}
                  w='20px'
                  h='20px'
                  color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
                />
                <a href={`tel: +${currentDetail[0].Phone}`}>
                  {currentDetail[0].Phone}
                </a>
              </ListItem>
            )}
            {currentDetail[0].WebsiteUrl && (
              <ListItem wordBreak='break-all'>
                <ListIcon
                  as={RiGlobalLine}
                  w='25px'
                  h='25px'
                  color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
                />
                <a
                  href={currentDetail[0].WebsiteUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  {currentDetail[0].WebsiteUrl}
                </a>
              </ListItem>
            )}
            {currentDetail[0].Position && (
              <ListItem wordBreak='break-all'>
                <ListIcon
                  as={FiMapPin}
                  w='25px'
                  h='25px'
                  color={colorMode === 'light' ? 'brand.200' : 'whiteAlpha.900'}
                />
                <a
                  href={`http://www.google.com/maps/place/${currentDetail[0].Position.PositionLat},${currentDetail[0].Position.PositionLon}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  {currentDetail[0].Name}
                </a>
              </ListItem>
            )}
            <Divider />
          </List>
          <Text>{currentDetail[0].DescriptionDetail}</Text>
        </Flex>
      </Grid>
      <VStack px={5}>
        <SectionDivider
          title='附近景點'
          color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
        />
      </VStack>
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
        {renderNearby()}
      </Grid>
    </VStack>
  ) : (
    <VStack gridGap={7} my={14}>
      <Grid
        w='80%'
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)'
        }}
        gridGap={5}
      ></Grid>
    </VStack>
  )
}

export default SpotInfoPage
