import React from 'react';
import FilterLink from '@containers/todo/filterlink';

import { VisibilityFilters } from '@actions';
const { SHOW_ALL, SHOW_ACTIVE, SHOW_DELETED } = VisibilityFilters;

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={SHOW_DELETED}>
      Deleted
    </FilterLink>
  </p>
)

export default Footer