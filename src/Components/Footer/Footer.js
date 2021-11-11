import {
  List,
  ListIcon,
  ListItem,
  Flex,
  useColorMode,
  VStack,
  Text,
  Icon
} from '@chakra-ui/react'
import {
  FaLine,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubAlt
} from 'react-icons/fa'
import { BsFillLightningChargeFill } from 'react-icons/bs'
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
        p={{ base: 15, lg: '75px 150px 0 150px', xl: '75px 300px 0 300px' }}
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
      <Flex
        size='xs'
        alignItems='center'
        p={5}
        color='white'
        fontWeight='400'
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Text>
          <Icon as={RiCopyrightLine} w={5} h={5} />
          Design by Zoe Kang&nbsp;&nbsp;|&nbsp;&nbsp;
        </Text>
        <Text>
          <Icon as={FaGithubAlt} w={5} h={5} />
          Made by Eric Chiu&nbsp;&nbsp;|&nbsp;&nbsp;
        </Text>
        <Text>
          <Icon as={BsFillLightningChargeFill} w={5} h={5} />
          source from 「交通部PTX平台」
        </Text>
      </Flex>
    </VStack>
  )
}

export default Footer
