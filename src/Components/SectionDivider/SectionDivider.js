import { Divider, Heading, Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const dividerHeadingStyle = {
  fontSize: '26px',
  textTransform: 'capitalize',
  color: 'brand.gray',
  fontWeight: 'bold',
  marginBottom: 1
}

const SectionDivider = ({ title, px, color }) => {
  return (
    <Box w='100%' px={px}>
      <Heading {...dividerHeadingStyle} color={color}>
        {title}
      </Heading>
      <Divider variant='default' background={color} borderColor={color} />
    </Box>
  )
}

SectionDivider.propTypes = {
  title: PropTypes.string,
  px: PropTypes.number,
  color: PropTypes.string
}

export default SectionDivider
