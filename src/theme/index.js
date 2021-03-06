import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// import { defaultTheme } from './Default'
// 2. Call `extendTheme` and pass your custom values
// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false
// }
const theme = extendTheme({
  colors: {
    brand: {
      100: '#9086cc',
      200: '#392a93',
      babyblue: '#a9d3ff',
      text: '#3c3c3c',
      heading: '#4f4f4f',
      green: '#65bb63',
      pink: '#ff7878',
      blue: '#477bff',
      beige: '#eeeaea',
      gray: '#cfcfcf',
      black: '#1d1d1d',
      orange: '#fa7e5f'
    }
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.600')(props),
        bg: mode('white', 'brand.black')(props),
        lineHeight: 'base'
      }
    })
  },
  components: {
    Heading: {
      color: 'brand.heading'
    },
    Text: {
      variants: {
        switch: (props) => ({
          color: mode('brand.200', 'brand.100')(props),
          fontWeight: mode('500', '700')(props)
        })
      }
    },
    Input: {
      variants: {
        outline: {
          borderWidth: 'thin',
          borderColor: 'brand.100',
          background: 'white',
          _placeholder: {
            color: 'brand.100'
          }
        }
      }
    },
    Button: {
      variants: {
        default: (props) => ({
          background: mode('brand.200', 'brand.100')(props),
          boxShadow: 'md',
          color: mode('white', 'whiteAlpha.900')(props),
          _hover: {
            background: 'brand.200',
            color: 'brand.100'
          },
          _active: {
            background: 'purple.700',
            color: 'purple.50',
            transform: 'scale(0.9)'
          }
        }),
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
        },
        selection: (props) => ({
          background: 'transparent',
          fontWeight: 500,
          color: mode('brand.babyblue', 'white')(props),
          _hover: {
            color: {
              md: 'brand.100'
            }
          },
          _active: {
            color: mode('brand.200', 'brand.100')(props),
            transform: 'scale(0.9)'
          },
          _after: {
            content: '""',
            width: '0px',
            position: 'absolute',
            height: '3px',
            borderRadius: '100px',
            background: 'transparent',
            bottom: '9px',
            transition: '0.5s all ease'
          }
        }),
        selectionactive: (props) => ({
          background: 'transparent',
          fontWeight: 700,
          color: mode('brand.200', 'brand.100')(props),
          transform: 'scale(0.9)',
          _after: {
            content: '""',
            width: '65px',
            position: 'absolute',
            height: '3px',
            borderRadius: '100px',
            background: mode('brand.200', 'brand.100')(props),
            bottom: '-10px',
            transition: '0.5s all ease'
          }
        })
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
})

export default theme
