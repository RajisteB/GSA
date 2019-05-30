import React from 'react'

const Burger = (props) => {
  let trigger = props.active ? "is-active" : "";
  return (
    <button 
      type="button" 
      className={`hamburger hamburger--spring ${trigger}`} 
      onClick={props.toggle}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}

export default Burger;