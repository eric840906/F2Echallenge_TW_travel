import { Divider, Heading, Box, Icon } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const dividerHeadingStyle = {
  fontSize: '26px',
  textTransform: 'capitalize',
  color: 'brand.gray',
  fontWeight: 'bold',
  marginBottom: 1
}

const SectionDivider = ({ title, px, color, icon }) => {
  return (
    <Box w="100%" px={px}>
      <Heading {...dividerHeadingStyle} color={color}>
        {icon && <Icon as={icon} h="35px" w="35px" verticalAlign="sub" />}
        {title}
      </Heading>
      <Divider
        variant="default"
        borderRadius="100px"
        background={color}
        borderColor={color}
      />
    </Box>
  )
}

SectionDivider.propTypes = {
  title: PropTypes.string,
  px: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.func
}

export default SectionDivider
