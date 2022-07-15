import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.3rem;
  font-weight: bold;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
`
