import React, { Component } from 'react'
import ZZ5H from "./ZZ5H.gif"
import animation_llamardn_small from  "./animation_llamardn_small.gif"

export default class Loading extends Component {
  render() {
    return (
      <div className='flex justify-center gap-x-5 flex-col  item-center md:flex-row p-15 mx-[55px]'>
        <img className='w-[320px] h-[580px] ' src={animation_llamardn_small} alt="Loading" />
        <img className='w-[350px] h-[580px]' src={animation_llamardn_small} alt="Loading" />
        <img className='w-[350px] h-[580px] ' src={animation_llamardn_small} alt="Loading" />
    
      </div>
    )
  }
}
