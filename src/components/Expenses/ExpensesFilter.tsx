import React from "react";
import "./ExpensesFilter.css";

type ExpensesFilterProps = {
  selected: string;
  onFilterYear: any;
};

const ExpensesFilter = (props: ExpensesFilterProps) => {
  const dropdownChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onFilterYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
