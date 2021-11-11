import { Heading, Flex, AspectRatio, useColorMode } from '@chakra-ui/react'
import PropTypes from 'prop-types'
const SpotCard = ({ spot, onClick }) => {
  const { colorMode } = useColorMode()
  return (
    <AspectRatio key={spot.ID} ratio={1.67 / 1}>
      <Flex
        key={spot.ID}
        justifyContent='end !important'
        borderRadius='10px'
        overflow='hidden'
        flexDirection='column'
        boxShadow='lg'
        marginBottom='40px'
        bg='brand.100'
        backgroundPosition='bottom'
        backgroundSize='cover'
        backgroundRepeat='no-repeat'
        backgroundImage={
          spot.Picture.PictureUrl1
            ? spot.Picture.PictureUrl1
            : 'http://www.vvc.cl/wp-content/uploads/2016/09/ef3-placeholder-image.jpg'
        }
        onClick={onClick}
      >
        <Heading
          w='100%'
          background={colorMode === 'light' ? 'white' : 'brand.black'}
          color={colorMode === 'light' ? 'brand.200' : 'brand.grey'}
          textAlign='center'
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
