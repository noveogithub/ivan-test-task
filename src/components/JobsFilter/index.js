import React, { useCallback } from "react"
import { InputText } from "@welcome-ui/input-text"
import { Select } from "@welcome-ui/select"
import { DatePicker } from "@welcome-ui/date-picker"
import { Box } from "@welcome-ui/box"
import { Field } from "@welcome-ui/field"
import styled from "@xstyled/styled-components"
import { GROUP_BY_OPTIONS } from "constants/jobs"
import { changeFilter } from "actions/filters"

const filterBoxWidth = { xs: "100%", xl: "auto" }

const FilterBox = styled(Box)`
  flex: 1 1;
  margin: 0 5px;
`

const StyledSelect = styled(Select)`
  padding-right: 0;
`

export const JobsFilter = React.memo(
  ({ contractTypesList, changeFilter, filters }) => {
    const { searchString, contractType, startDate, groupBy } = filters
    const changeSearch = useCallback(
      ({ target }) => changeFilter("searchString", target.value || ""),
      [changeFilter]
    )
    const changeContractType = useCallback(
      value => changeFilter("contractType", value),
      [changeFilter]
    )
    const changeStartDate = useCallback(
      value => changeFilter("startDate", value),
      [changeFilter]
    )
    const changeGroupBy = useCallback(value => changeFilter("groupBy", value), [
      changeFilter
    ])
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
            value={searchString}
            onChange={changeSearch}
          />
        </FilterBox>
        <FilterBox width={filterBoxWidth}>
          <Field
            component={StyledSelect}
            label="Contract type"
            options={contractTypesList}
            value={contractType}
            onChange={changeContractType}
          />
        </FilterBox>
        <FilterBox width={filterBoxWidth}>
          <Field
            component={DatePicker}
            label="Date"
            value={startDate}
            onChange={changeStartDate}
          />
        </FilterBox>
        <FilterBox width={filterBoxWidth}>
          <Field
            component={StyledSelect}
            label="Group by"
            options={GROUP_BY_OPTIONS}
            value={groupBy}
            onChange={changeGroupBy}
          />
        </FilterBox>
      </Box>
    )
  }
)
