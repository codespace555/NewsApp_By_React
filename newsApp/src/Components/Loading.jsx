import React, { Component } from 'react'
import ZZ5H from "/public/ZZ5H.gif"

export default class Loading extends Component {
  render() {
    return (
      <div className='flex justify-center'>
        <img src={ZZ5H} alt="Loading" />
      </div>
    )
  }
}
