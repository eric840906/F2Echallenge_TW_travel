import PropTypes from 'prop-types'
import { Icon } from '@chakra-ui/icon'
import { Flex, Text } from '@chakra-ui/react'
export const Logo = props => {
  return (
    <Flex flexDirection='row' gridGap='10px'>
      <Icon viewBox='0 0 26 50' stroke={props.fill} {...props}>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <path d='M19.6363 0.0718377C19.4018 -0.0457234 19.1366 -0.0114587 18.8628 0.119881C17.1046 0.963288 15.8673 2.70266 14.0577 3.42855C12.4813 4.06089 11.369 5.66105 10.7206 7.00628C10.2695 7.94232 10.4127 9.20263 9.64947 9.90619C9.49319 10.0502 9.29251 10.142 9.03694 10.142C7.92123 10.142 2.34264 19.6527 1.22692 23.0094C0.111204 26.3661 0.669073 24.6877 0.111215 29.1633C0.00155004 30.0432 -0.0205352 30.8059 0.0168167 31.4614C0.150292 33.8041 1.66897 35.94 2.49052 38.1371L2.90051 39.2335C3.08646 39.6064 4.01623 40.688 6.24766 42.0307C7.23547 42.6251 8.11396 43.3876 8.83474 44.1338C10.2121 45.5596 10.2454 48.9565 12.0224 49.8312C13.3501 50.4848 13.9002 49.1294 13.6316 47.6707C13.597 47.4827 13.5536 47.2813 13.4998 47.0658C13.1358 45.6053 13.4894 43.5492 13.834 42.2337C13.9682 41.7216 14.1756 41.2311 14.4174 40.7605C17.5645 34.6369 19.6565 33.0389 20.1941 31.9606C20.4145 31.5186 20.4764 29.1356 20.5705 28.6505C20.6804 28.084 20.752 27.3381 20.752 26.3661C20.752 24.7263 21.0576 23.015 21.429 21.5692C21.9253 19.6366 21.3277 16.8435 22.9834 15.7365C23.7252 15.2406 24.3871 14.0349 24.8931 12.8044C25.5552 11.1944 24.8757 9.4618 24.0991 7.90417C23.6529 7.00905 25.0289 4.92043 25.7727 3.98801C26.1446 3.61504 26.3306 2.75721 24.0991 2.30964C21.3099 1.75019 20.752 0.631289 19.6363 0.0718377Z' />
        </svg>
      </Icon>
      <Flex flexDirection='column' justifyContent='center'>
        <Text
          transform='scale(0.45)'
          transformOrigin='left bottom'
          color={props.subcolor ? props.subcolor : props.fill}
          fontSize={props.subfontsize ? props.subfontsize : ''}
        >
          Taiwan
        </Text>
        <Text color={props.fill} fontWeight='500' fontSize={props.fontSize}>
          島遊
        </Text>
      </Flex>
    </Flex>
  )
}
Logo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  fill: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subcolor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subfontsize: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}
