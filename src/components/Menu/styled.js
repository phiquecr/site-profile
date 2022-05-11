import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background-color: #fff;
`

export const BoxMenu = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 1440px) {
    padding: 0 4rem;
  }

  @media (max-width: 900px) {
    padding: 0 2rem;
  }
`
export const NameTitle = styled.h1`
  font-size: 1.33em;
  color: #000;
`

export const Options = styled.ul`
  display: flex;
  height: 100%;
  gap: 2.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`

export const OptionItem = styled.li`
  
`

export const OptionLink = styled(GatsbyLink)`
  text-decoration: none;
  font-weight: 500;
  color: #000;

  &:hover {
    transition: .2s;
    color: #ff9900;
  }
`