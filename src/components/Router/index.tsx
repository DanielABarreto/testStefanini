import { Routes, Route } from 'react-router-dom'

import { Signup, Login } from '~/pages'
import { DefaultLayout } from '~/styles'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}
