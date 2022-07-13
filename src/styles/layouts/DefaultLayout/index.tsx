import { Outlet } from 'react-router-dom'
import { Header } from '~/components'
import { LayoutWrapper } from './styles'

export const DefaultLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  )
}
