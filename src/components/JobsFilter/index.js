import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { InputText } from "@welcome-ui/input-text"
import { Select } from "@welcome-ui/select"
import { DatePicker } from "@welcome-ui/date-picker"
import { Box } from "@welcome-ui/box"
import { Field } from "@welcome-ui/field"
import styled from "@xstyled/styled-components"
import { GROUP_BY_OPTIONS } from "constants/jobs"
import {
  SEARCH_STRING,
  GROUP_BY,
  START_DATE,
  CONTRACT_TYPE
} from "constants/filters"

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
      ({ target }) => changeFilter(SEARCH_STRING, target.value || ""),
      [changeFilter]
    )
    const changeContractType = useCallback(
      value => changeFilter(CONTRACT_TYPE, value),
      [changeFilter]
    )
    const changeStartDate = useCallback(
      value => changeFilter(START_DATE, value),
      [changeFilter]
    )
    const changeGroupBy = useCallback(value => changeFilter(GROUP_BY, value), [
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

JobsFilter.propTypes = {
  contractTypesList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  changeFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    searchString: PropTypes.string,
    contractType: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    groupBy: PropTypes.string
  })
}

JobsFilter.defaultProps = {
  contractTypesList: [],
  filters: {}
}
