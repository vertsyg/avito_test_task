import { Select } from "antd"

interface FilterOptionProps {
  label: string,
  options: string[],
  handleFilterChange: (selectedOption: string) => void
}

const FilterOption = ({ label, options, handleFilterChange}: FilterOptionProps) => {
  const handleChange = (selectedValue: string) => {
      handleFilterChange(selectedValue); 
  }
  return (
    <div style={{margin: '5px'}}>
      <label>{label}</label>
      <Select defaultValue={options[0]} onChange={handleChange}>
      {options.map(option => (
        <Select.Option 
          key={option} 
          value={option}
        >
          {option}
        </Select.Option>
      ))}
      </Select>
    </div>
  )
}

export default FilterOption