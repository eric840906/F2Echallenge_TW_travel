import {
  List,
  ListIcon,
  ListItem,
  Flex,
  useColorMode,
  VStack,
  Heading,
  Icon
} from '@chakra-ui/react'
import { FaLine, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { RiCopyrightLine } from 'react-icons/ri'
import { Logo } from 'assets/logo/logo'

const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <VStack w='100%' bg={colorMode === 'light' ? 'brand.200' : 'brand.100'}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        color='white'
        gridGap={10}
        p={{ base: 10, lg: '75px 150px 0 150px', xl: '75px 300px 0 300px' }}
        w='100%'
      >
        <Flex alignSelf='center' mr={{ base: 0, md: 'auto' }}>
          <Logo
            width={{ base: 26, md: 100 }}
            height={{ base: 50, md: 200 }}
            fill='white'
            subcolor={colorMode === 'light' ? 'brand.100' : 'brand.babyblue'}
            fontSize={{ base: '20px', md: '36px' }}
            subfontsize={{ base: '20px', md: '36px' }}
          />
        </Flex>
        <List textAlign={{ base: 'center', md: 'start' }} spacing={3}>
          <ListItem>關於Taiwan島遊</ListItem>
          <ListItem>我們是誰</ListItem>
          <ListItem>加入我們</ListItem>
          <ListItem>聯繫我們</ListItem>
        </List>
        <List textAlign={{ base: 'center', md: 'start' }} spacing={3}>
          <ListItem>服務條款</ListItem>
          <ListItem>隱私權政策</ListItem>
          <ListItem>FAQ</ListItem>
        </List>
        <List textAlign={{ base: 'center', md: 'start' }} spacing={3}>
          <ListItem>追蹤我們</ListItem>
          <ListItem>
            <ListIcon as={FaFacebookSquare} color='white' />
            Facebook
          </ListItem>
          <ListItem>
            <ListIcon as={FaInstagramSquare} color='white' />
            Instagram
          </ListItem>
          <ListItem>
            <ListIcon as={FaLine} color='white' />
            Line
          </ListItem>
        </List>
      </Flex>
      <Heading size='xs' p={5} color='white' fontWeight='400'>
        <Icon as={RiCopyrightLine} />
        Design by Zoe Kang
      </Heading>
    </VStack>
  )
}

export default Footer
