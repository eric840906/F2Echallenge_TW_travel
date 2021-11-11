import { Text, Flex, AspectRatio } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const MaskCard = ({ card, onClick }) => {
  return (
    <AspectRatio ratio={1.67 / 1}>
      <Flex
        backgroundImage={card.imageUrl}
        backgroundSize='cover'
        backgroundRepeat='no-repeat'
        borderRadius='16px'
        cursor='pointer'
        onClick={onClick && onClick}
      >
        <Flex
          w='100%'
          h='100%'
          justifyContent='center'
          alignItems='center'
          background='#00000080'
        >
          <Text color='white' fontSize={{ base: '16px', sm: '22px' }}>
            {card.name}
          </Text>
        </Flex>
      </Flex>
    </AspectRatio>
  )
}

MaskCard.propTypes = {
  card: PropTypes.object,
  onClick: PropTypes.func
}

export default MaskCard
