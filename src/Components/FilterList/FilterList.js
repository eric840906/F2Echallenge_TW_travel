import React, { useState, useEffect } from 'react'
import { Grid, VStack, Button } from '@chakra-ui/react'
import { MaskCard } from 'Components/Cards'
// import { Grid, VStack, Button, Text, Flex, AspectRatio } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import PropTypes from 'prop-types'

const FilterList = ({ cards }) => {
  const [filter, setFilter] = useState('北台灣')
  const [filteredCards, setFilteredCards] = useState([])
  const filterBtns = ['北台灣', '中台灣', '南台灣', '東台灣', '外島']
  const navigate = useNavigate()
  useEffect(() => {
    return setFilteredCards(cards.filter(card => card.location === filter))
  }, [filter])
  const renderFilters = () =>
    filterBtns.map(item => (
      <Button
        variant={filter === item ? 'selectionactive' : 'selection'}
        fontSize={{ base: '22px', sm: '26px' }}
        textTransform='capitalize'
        onClick={() => setFilter(item)}
        value={item}
        key={item}
      >
        {item}
      </Button>
    ))
  // const renderCards = () => {
  //   return filteredCards.map(card => (
  //     <AspectRatio key={card.term} ratio={1.67 / 1}>
  //       <Flex
  //         backgroundImage={card.imageUrl}
  //         backgroundSize='cover'
  //         backgroundRepeat='no-repeat'
  //         borderRadius='16px'
  //         cursor='pointer'
  //         onClick={() => navigate(`scenicspots/${card.term}`)}
  //       >
  //         <Flex
  //           w='100%'
  //           h='100%'
  //           justifyContent='center'
  //           alignItems='center'
  //           background='#00000080'
  //         >
  //           <Text color='white' fontSize={{ base: '16px', sm: '22px' }}>
  //             {card.city}
  //           </Text>
  //         </Flex>
  //       </Flex>
  //     </AspectRatio>
  //   ))
  // }
  const renderCards = () => {
    return filteredCards.map(card => (
      <MaskCard
        key={card.term}
        onClick={() => navigate(`scenicspots/${card.term}`)}
        card={card}
      />
    ))
  }
  return (
    <VStack w='100%'>
      {/* <SectionDivider title="our products" /> */}
      <Grid
        w={{ base: '100%', md: '50%' }}
        mb={50}
        templateColumns={{
          base: 'repeat(5, calc(45% - 20px))',
          md: 'repeat(5, 1fr)'
        }}
        overflowX={{ base: 'scroll', md: 'hidden' }}
        p={2}
        gridGap={1}
      >
        {renderFilters()}
      </Grid>
      <Grid
        w={{ base: '95%', md: '80%' }}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gridGap={{ base: 3, md: 5 }}
      >
        {renderCards()}
      </Grid>
    </VStack>
  )
}

FilterList.propTypes = {
  px: PropTypes.number,
  cards: PropTypes.array
}

export default FilterList
