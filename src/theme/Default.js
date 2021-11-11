// import { brand, brandDark } from './Brand'
// import { brand } from './Brand'
import { mode } from '@chakra-ui/theme-tools'
export const defaultTheme = {
  colors: {
    brand: {
      100: mode('#ffeee4', '#e15b21'),
      200: mode('#e15b21', '#ffeee4'),
      text: '#3c3c3c',
      heading: '#4f4f4f',
      green: '#65bb63',
      pink: '#ff7878',
      blue: '#477bff',
      beige: '#eeeaea',
      gray: '#848484'
    }
  },
  components: {
    Heading: {
      color: 'brand.heading'
    },
    Button: {
      variants: {
        default: {
          background: 'white',
          boxShadow: 'md',
          color: 'brand.gray',
          _hover: {
            background: 'brand.200',
            color: 'brand.100'
          },
          _active: {
            background: 'orange.700',
            color: 'orange.50',
            transform: 'scale(0.9)'
          }
        },
        danger: {
          background: 'brand.pink',
          boxShadow: 'md',
          color: 'red.50',
          _hover: {
            background: 'red.500',
            color: 'white'
          },
          _active: {
            background: 'red.700',
            color: 'white',
            transform: 'scale(0.9)'
          }
        },
        success: {
          background: 'brand.green',
          boxShadow: 'md',
          color: 'green.50',
          _hover: {
            background: 'green.500',
            color: 'white'
          },
          _active: {
            background: 'green.700',
            color: 'white',
            transform: 'scale(0.9)'
          }
        },
        active: {
          background: 'brand.200',
          color: 'orange.50',
          transform: 'scale(0.9)'
        },
        activeWithoutScale: {
          background: 'brand.200',
          color: 'orange.50'
        },
        modalBtn: {
          background: 'transparent',
          borderColor: 'white',
          borderWidth: '1px',
          boxShadow: 'md',
          color: 'white',
          _hover: {
            background: 'brand.200',
            color: 'brand.100'
          },
          _active: {
            background: 'orange.700',
            color: 'orange.50',
            transform: 'scale(0.9)'
          }
        }
      }
    },
    Divider: {
      size: {
        md: '50px'
      },
      variants: {
        default: {
          background: 'brand.gray',
          borderColor: 'brand.gray',
          border: 1,
          borderWidth: '2px',
          height: '3px',
          borderRadius: '100px'
        }
      }
    }
  },
  fonts: {
    heading: 'Noto Sans TC',
    body: 'Noto Sans TC'
  }
}
