import React from 'react'

const SortProducts = () => {

  return (
    <div>
        <form >
        <label for ="sort">Sorted</label>
        <select id="sort" onChange={}>
           <option value="nameAsc">Name: А → Z</option>
        <option value="nameDesc">Name: Z → А</option>
        <option value="priceAsc">Price: Low → High</option>
        <option value="priceDesc">Price: High → Low</option>
        <option value="popularity">Popularity</option>
        </select>
        </form>
    </div>
  )
}

export default SortProducts