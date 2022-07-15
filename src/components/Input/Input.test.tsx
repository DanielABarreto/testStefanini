import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'
import { screen } from '@testing-library/react'
import { render, userEvent } from '~/test'
import { Input } from './'

describe('Input', () => {
  test('should render the input', () => {
    render(
      <Input
        name="email"
        type="email"
        placeholder="Email"
        label="Email Address"
        aria-label="Email Address"
      />,
    )
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', {
        name: /email address/i,
      }),
    ).toBeInTheDocument()
  })

  test('should change input value', () => {
    render(
      <Input
        name="email"
        type="email"
        placeholder="Email"
        label="Email Address"
        aria-label="Email Address"
      />,
    )

    screen.logTestingPlaygroundURL()

    const input = screen.getByRole('textbox', {
      name: /email address/i,
    })
    expect(input).toBeInTheDocument()
    userEvent.type(input, '123')
    expect(input).toHaveValue('123')
  })
})
