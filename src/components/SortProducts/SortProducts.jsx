import React from 'react'

const SortProducts = () => {

  return (
   <div>
      <form>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" onChange={}>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </form>
    </div>
  )
}

export default SortProducts