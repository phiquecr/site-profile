import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #ff9900;
`

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;

  @media (max-width: 1440px) {
    padding: 0 4rem;
  }

  @media (max-width: 900px) {
    padding: 0 2rem;
  }
`