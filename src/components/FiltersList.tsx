import { genreOptions, platformOptions, sortOptions } from "../utils/filterOptions"
import FilterOption from "./FilterOption"
import { useActions } from "../hooks/useAction"

const FiltersList = () => {

    const {changeGenre, changePlatform, changeSorting} = useActions()

    return (
        <div style={{marginTop:'10px', marginBottom:'10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <FilterOption 
                label={'Platform: '}
                options={platformOptions}
                handleFilterChange={changePlatform}
            />
            <FilterOption 
                label={'Genre: '}
                options={genreOptions}
                handleFilterChange={changeGenre}
            />
            <FilterOption 
                label={'Sort By: '}
                options={sortOptions}
                handleFilterChange={changeSorting}
            />           
        </div>
    )
}

export default FiltersList