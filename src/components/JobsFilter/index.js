import React from "react"
import { InputText } from "@welcome-ui/input-text"
import { Select } from "@welcome-ui/select"
import { DatePicker } from "@welcome-ui/date-picker"
import { Box } from "@welcome-ui/box"
import { Field } from "@welcome-ui/field"
import styled from "@xstyled/styled-components"
import { DEFAULT_JOBS_FROUP_BY, GROUP_BY_OPTIONS } from "constants/jobs"

const filterBoxWidth = { xs: "100%", xl: "auto" }

const FilterBox = styled(Box)`
  flex: 1 1;
  margin: 0 5px;
`

const StyledSelect = styled(Select)`
  padding-right: 0;
`

export const JobsFilter = ({ contractTypesOptions }) => {
  return (
    <Box
      m="10px 0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ xs: "column", xl: "row" }}
    >
      <FilterBox width={filterBoxWidth}>
        <Field
          component={InputText}
          label="Search query"
          placeholder="Your dream job?"
        />
      </FilterBox>
      <FilterBox width={filterBoxWidth}>
        <Field
          component={StyledSelect}
          label="Contract type"
          options={contractTypesOptions}
          value=""
        />
      </FilterBox>
      <FilterBox width={filterBoxWidth}>
        <Field component={DatePicker} label="Date" />
      </FilterBox>
      <FilterBox width={filterBoxWidth}>
        <Field
          component={StyledSelect}
          label="Group by"
          options={GROUP_BY_OPTIONS}
          value={DEFAULT_JOBS_FROUP_BY}
        />
      </FilterBox>
    </Box>
  )
}
