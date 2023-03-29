import React from 'react'
import Section from '../../components/section/Section'

function Homepage() {
  const children = (
    <div className="row">
      <div className="col-12">
        <h1 className="text-center">Homepage</h1>
      </div>
    </div>
  )
  return (
    <div className="main container-fluid">
      <Section children={children} />
    </div>
  )
}

export default Homepage