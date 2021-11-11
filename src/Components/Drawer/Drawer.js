import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Text,
  useColorMode,
  Flex,
  Divider
} from '@chakra-ui/react'
import { Logo } from 'assets/logo/logo'
import { useNavigate, NavLink } from 'react-router-dom'
import { ColorModeButton } from 'Components/ColorToggle'
import Proptype from 'prop-types'

const SideDrawer = ({ onDrawerOpen, onDrawerClose }) => {
  const btnRef = React.useRef()
  const navigate = useNavigate()
  const { colorMode } = useColorMode()
  return (
    <>
      <Drawer
        isOpen={onDrawerOpen}
        placement='right'
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          style={{ width: '80%' }}
          background={colorMode === 'light' ? 'white' : 'brand.black'}
        >
          <DrawerHeader>
            <Flex
              alignSelf='center'
              cursor='pointer'
              onClick={() => navigate('/')}
            >
              <Logo
                width={26}
                height={50}
                fill={colorMode === 'light' ? 'brand.200' : 'brand.100'}
                subcolor={
                  colorMode === 'light' ? 'brand.100' : 'brand.babyblue'
                }
                fontSize='20px'
              />
            </Flex>
          </DrawerHeader>
          <Divider />
          <DrawerBody
            p={0}
            backgroud={colorMode === 'light' ? 'white' : 'brand.black'}
          >
            <VStack gridGap={3} mt={10} textAlign='center'>
              <NavLink to='/scenicspots/Taipei' style={{ width: '100%' }}>
                <Text variant='switch' fontSize='20px'>
                  旅遊景點
                </Text>
              </NavLink>
              <NavLink
                to='/restaurants/main/Taiwan/All'
                style={{ width: '100%' }}
              >
                <Text variant='switch' fontSize='20px'>
                  美食餐廳
                </Text>
              </NavLink>

              <ColorModeButton />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

SideDrawer.propTypes = {
  onDrawerOpen: Proptype.bool,
  onDrawerClose: Proptype.func
}

export default SideDrawer
