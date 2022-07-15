import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from '~/test'
import { Button } from './'

describe('Button', () => {
  test('should show text all the time', () => {
    render(<Button text="Testing" />)
    expect(screen.getByText(/Testing/i)).toBeDefined()
  })
})
