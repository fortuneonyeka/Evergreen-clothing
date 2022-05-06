import React from 'react'
import './categories.styles.scss'

const Categories = () => {
  const categories = [
    {
      title:"Hats",
      id:1
    },
    {
      title:"Sneakers",
      id:2
    },
    {
      title:"Jackets",
      id:3
    },
    {
      title:"Men's",
      id:4
    },
    {
      title:"Women's",
      id:5
    },

  ]
  return (
    <div className="categories-container">
      {categories.map(({title ,id}) => (
        <div key={id} className="category-container">
        <div className="background-image" />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default Categories