import React from 'react'

export const Loader = () => {
  return (
    <div class="container">
      <div class="circle">
        <div class="bread crust">
          <div class="top-bread"></div>
          <div class="bottom-bread"></div>
          <div class="bread crumb">
            <div class="top-bread"></div>
            <div class="bottom-bread"></div>
            <div class="spread">
              <div class="pb">
              </div>
              <div class="jam">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wait">
        <h2 className="waiting">Just a sec...</h2></div>
    </div>
  )
}