import React, { Component } from 'react'
import ZZ5H from "./ZZ5H.gif"
import animation_llamardn_small from  "./animation_llamardn_small.gif"

export default class Loading extends Component {
  render() {
    return (
      <div className='flex justify-center gap-x-5  flex-wrap md:flex-row'>
        <img className='' src={animation_llamardn_small} alt="Loading" />
        <img className='' src={animation_llamardn_small} alt="Loading" />
        <img className='' src={animation_llamardn_small} alt="Loading" />
        <img className='' src={animation_llamardn_small} alt="Loading" />
        <img className='' src={animation_llamardn_small} alt="Loading" />
        <img className='' src={animation_llamardn_small} alt="Loading" />
        <img className='' src={animation_llamardn_small} alt="Loading" />
      </div>
    )
  }
}
