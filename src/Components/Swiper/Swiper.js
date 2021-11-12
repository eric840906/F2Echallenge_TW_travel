import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './swiper.css'
import { Image, Flex, Text, Heading } from '@chakra-ui/react'
import Proptype from 'prop-types'
import { imageBox } from 'assets/style'

SwiperCore.use([Pagination, EffectCoverflow])
export const TheSwiper = ({ itemArr, options, func }) => {
  const defaultSwiper = itemArr.map((item) => {
    return (
      <SwiperSlide style={{ width: '100%' }} key={item.id}>
        <Heading
          color="brand.heading"
          style={{ padding: 20 }}
          textAlign="center"
          as="h4"
          size="md"
        >
          {item.title}
        </Heading>
        <Flex
          justifyContent="center"
          gridGap={5}
          style={{ marginBottom: 40 }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Text
            w={{ base: '80%', md: '35%' }}
            color="brand.text"
            alignSelf={{ base: 'center', md: 'baseline' }}
          >
            {item.text}
          </Text>
          <Image {...imageBox} src={item.image} alt="" />
        </Flex>
      </SwiperSlide>
    )
  })
  const choiceSwiper = itemArr.map((item) => {
    return (
      <SwiperSlide key={item.ID}>
        <Flex
          onClick={func(item)}
          borderRadius="10px"
          overflow="hidden"
          flexDirection="column"
          boxShadow="lg"
          justifyContent="end"
          pb="10%"
          marginBottom="40px"
          bg="brand.100"
          backgroundImage={
            item.Picture.PictureUrl1
              ? item.Picture.PictureUrl1
              : 'http://www.vvc.cl/wp-content/uploads/2016/09/ef3-placeholder-image.jpg'
          }
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          h={{ base: '200px', sm: '300px', md: '600px' }}
          w={{ base: '250px', sm: 'auto' }}
        >
          {/* <Image
            objectFit='cover'
            src={item.Picture.PictureUrl1}
            w={{ base: '315px', md: '600px' }}
            alt=''
          /> */}
          <Flex flexDirection="column" p={{ base: 2, md: 3 }} bg="#000000a8">
            <Heading
              textAlign="center"
              fontSize={{ base: '16px', sm: '26px', md: '36px' }}
              color="white"
            >
              {item.Name}
            </Heading>
          </Flex>
        </Flex>
      </SwiperSlide>
    )
  })
  const renderSwiper = () => {
    switch (options.swipertype) {
      case 'choice':
        return choiceSwiper
      default:
        return defaultSwiper
    }
  }
  return (
    <Flex w="100%">
      <Swiper
        {...options}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
        // onClick={swiper => {
        //   func && func(swiper.realIndex)
        // }}
      >
        {itemArr && renderSwiper()}
      </Swiper>
    </Flex>
  )
}

TheSwiper.propTypes = {
  itemArr: Proptype.array,
  options: Proptype.object,
  func: Proptype.func
}
