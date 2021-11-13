// import { useRef, useEffect } from 'react'
import { Button, Flex, Text, useColorMode } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Logo } from 'assets/logo/logo'
import { ColorModeButton } from 'Components/ColorToggle'
import { NavLink, useNavigate } from 'react-router-dom'
import Proptype from 'prop-types'

const Navbar = ({ onHamburgerClick }) => {
  // const menuBtn = useRef(null)
  // useEffect(() => {
  //   console.log(menuBtn)
  //   menuBtn.current.focus(() => {
  //     document.activeElement.blur()
  //   })
  // }, [])
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  return (
    <Flex
      position="sticky"
      zIndex="sticky"
      top="0"
      bg={colorMode === 'light' ? 'white' : 'brand.black'}
      boxShadow={
        colorMode === 'light'
          ? 'xs'
          : '0 1px 2px 0px #eaeaea33, 0 -9px 4px #eaeaea33'
      }
      w="100%"
      alignItems="center"
      py={5}
      px={10}
      color="white"
      gridGap="5rem"
    >
      <Flex alignSelf="center" cursor="pointer" onClick={() => navigate('/')}>
        <Logo
          width={26}
          height={50}
          fill={colorMode === 'light' ? 'brand.200' : 'brand.100'}
          subcolor={colorMode === 'light' ? 'brand.100' : 'brand.babyblue'}
          fontSize="20px"
        />
      </Flex>
      <Flex display={{ base: 'none', md: 'flex' }} gridGap="5rem" mr="auto">
        <NavLink to="/scenicspots/Taiwan">
          <Text variant="switch" fontSize="20px">
            旅遊景點
          </Text>
        </NavLink>
        <NavLink to="/restaurants/main/Taiwan/All">
          <Text variant="switch" fontSize="20px">
            美食餐廳
          </Text>
        </NavLink>
      </Flex>
      <ColorModeButton display={{ base: 'none', md: 'flex' }} />
      <Button
        display={{ base: 'block', md: 'none' }}
        background={colorMode === 'light' ? 'white' : 'brand.black'}
        marginLeft="auto"
        boxShadow="none"
        w="40px"
        h="40px"
        onClick={onHamburgerClick}
        onFocus={() => document.activeElement.blur()}
        size="sm"
      >
        <HamburgerIcon
          w={5}
          h={5}
          color={colorMode === 'light' ? 'brand.200' : 'brand.100'}
        />
      </Button>
    </Flex>
  )
}

Navbar.propTypes = {
  onHamburgerClick: Proptype.func
}

export default Navbar
