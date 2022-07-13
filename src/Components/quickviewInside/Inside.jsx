import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Custom from './Custom'
import InsideDescription from './InsideDescription'
import Review from './Review'
import TopCateg from './TopCateg'




function Inside() {
  return (
    <div>
        <TopCateg/>
            <Routes>
                <Route  path="description" element={<InsideDescription/>}></Route>
                <Route  path="custom" element={<Custom/>}></Route>
                <Route  path="review" element={<Review/>}></Route>
            </Routes>

    </div>
  )
}

export default Inside