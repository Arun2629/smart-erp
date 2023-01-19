import React from 'react'
import { FaSearch } from "react-icons/fa"

const Search = (props) => {
    const {search,setSearch} = props
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log(search)
    return (
        <div className='search'>
            <span><FaSearch/></span>
            <input type='search' value={search}  onChange={handleChange} placeholder='Search by title or body'/>
        </div>
    )
}

export default Search