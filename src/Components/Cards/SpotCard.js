import { useState } from 'react'
import {
  Heading,
  Flex,
  AspectRatio,
  useColorMode,
  Icon
} from '@chakra-ui/react'
import { FaLocationArrow } from 'react-icons/fa'
import PropTypes from 'prop-types'
import placeholder from 'assets/images/placeholders/placeholder150.png'
const SpotCard = ({ spot, onClick }) => {
  const [enter, setEnter] = useState()
  const { colorMode } = useColorMode()
  return (
    <AspectRatio key={spot.ID} ratio={1.67 / 1}>
      <Flex
        cursor="pointer"
        key={spot.ID}
        justifyContent="end !important"
        borderRadius="10px"
        overflow="hidden"
        flexDirection="column"
        boxShadow={colorMode === 'light' ? 'lg' : '0px 2px 6px -3px #eaeaea33'}
        marginBottom="40px"
        bg="brand.100"
        backgroundPosition="bottom"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage={
          spot.Picture.PictureUrl1 ? spot.Picture.PictureUrl1 : placeholder
        }
        onClick={onClick}
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
      >
        <Flex
          w="100%"
          h="100%"
          transition="all 0.3s ease"
          backgroundColor="#00000080"
          position="absolute"
          opacity={enter ? '1' : '0'}
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={FaLocationArrow} w="50px" h="50px" color="whiteAlpha.600" />
        </Flex>
        <Heading
          w="100%"
          background={colorMode === 'light' ? 'white' : 'brand.black'}
          color={colorMode === 'light' ? 'brand.200' : 'brand.grey'}
          textAlign="center"
          size={{ base: 'sm', sm: 'md' }}
          py={3}
        >
          {spot.Name}
        </Heading>
      </Flex>
    </AspectRatio>
  )
}
SpotCard.propTypes = {
  spot: PropTypes.object,
  onClick: PropTypes.func
}

export default SpotCard
