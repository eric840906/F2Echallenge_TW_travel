import { Select, FormControl, Input, IconButton, Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'

const SearchBar = ({
  selectItem1,
  onSelect1,
  default1,
  selectItem2,
  onSelect2,
  default2,
  onSearch
}) => {
  return (
    <Box
      as="form"
      onSubmit={(e) => {
        e.preventDefault()
        console.log(123)
      }}
    >
      <FormControl display="flex" maxW="300px">
        {selectItem1 && (
          <Select
            w="150px"
            onChange={onSelect1}
            value={default1}
            borderRadius="10px 0 0 10px"
            borderRight="none"
          >
            {selectItem1.map((city) => (
              <option key={city[1]} value={city[1]}>
                {city[0]}
              </option>
            ))}
          </Select>
        )}
        <Input borderRadius="0 10px 10px 0"></Input>
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
      </FormControl>
    </Box>
  )
}
SearchBar.propTypes = {
  selectItem1: PropTypes.array,
  onSelect1: PropTypes.string,
  default1: PropTypes.string,
  selectItem2: PropTypes.array,
  onSelect2: PropTypes.string,
  default2: PropTypes.string,
  onSearch: PropTypes.func
}
