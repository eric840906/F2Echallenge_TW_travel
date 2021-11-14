import { useEffect, useState } from 'react'
import { VStack, useColorMode, Grid } from '@chakra-ui/react'
import { MaskCard } from 'Components/Cards'
import { TheSwiper } from 'Components/Swiper/Swiper'
import { cities } from 'data/cityData'
import { FilterList } from 'Components/FilterList'
import { useSpots } from 'hooks'
import { restaurantCategories } from 'data/restaurantCategories'
import { SectionDivider } from 'Components/SectionDivider'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const [currentSpots, setCurrentSpots] = useState([])
  const [spots] = useSpots({ target: 'ScenicSpot' }, 'Taipei')
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  useEffect(() => {
    setCurrentSpots(spots)
  }, [spots])

  const SellerSwiperOption = {
    swipertype: 'choice',
    slideToClickedSlide: true,
    pagination: {
      dynamicBullets: true,
      clickable: true,
      bulletElement:
        'div style="height: 20px; width:20px; background: #e15b21;"'
    },
    grabCursor: true,
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.25,
        spaceBetween: 5
      },
      425: {
        slidesPerView: 1.5,
        spaceBetween: 70
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 150
      }
    },
    centeredSlides: true,
    loop: true
  }
  const renderCards = () => {
    return restaurantCategories.map((card) => (
      <MaskCard
        key={card.name}
        card={card}
        onClick={() => navigate(`restaurants/main/Taiwan/${card.name}`)}
      />
    ))
  }
  const goToSpot = (spot) => {
    return () => navigate(`ScenicSpot/detail/${spot.ID}`)
  }
  return (
    <>
      <VStack gridGap={7} my={14}>
        {/* <SectionDivider px={5} title='top sellers' /> */}
        <TheSwiper
          itemArr={currentSpots}
          options={SellerSwiperOption}
          func={goToSpot}
        />
        <FilterList cards={cities} />
        <VStack px={5}>
          <SectionDivider
            title="人氣美食"
            color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
          />
        </VStack>
        <Grid
          w={{ base: '95%', md: '80%' }}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          }}
          gridGap={{ base: 3, md: 5 }}
        >
          {renderCards()}
        </Grid>
      </VStack>
    </>
  )
}

export default HomePage
