import { FC, ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { store } from '~/store'
import { defaultTheme, GlobalStyle } from '~/styles'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
