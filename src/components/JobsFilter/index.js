import React from "react"
import { InputText } from "@welcome-ui/input-text"
import { Select } from "@welcome-ui/select"
import { DatePicker } from "@welcome-ui/date-picker"
import { Box } from "@welcome-ui/box"
import styled from "@xstyled/styled-components"

const filterBoxWidth = { xs: "100%", xl: "auto" }

const FilterBox = styled(Box)`
  flex: 1 1;
  margin: 0 5px;
`

const StyledSelect = styled(Select)`
  padding-right: 0;
`

export const JobsFilter = () => {
  return (
    <Box
      m="10px 0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ xs: "column", xl: "row" }}
    >
      <FilterBox width={filterBoxWidth}>
        <InputText placeholder="your dream job?" />
      </FilterBox>
      <FilterBox width={filterBoxWidth}>
        <StyledSelect className="auto-width" options={[]} value="" />
      </FilterBox>
      <FilterBox width={filterBoxWidth}>
        <DatePicker />
      </FilterBox>
      <FilterBox width={filterBoxWidth}>
        <StyledSelect options={[]} value="" />
      </FilterBox>
    </Box>
  )
}
