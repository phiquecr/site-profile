import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }
`

export const MenuBtn = styled.button`
  position: relative;
  border: none;
  background: none;
  width: 2.5rem;
  height: 2.5px;
  background: ${props => props.isOpen ? 'none' :'#0B1617'};
  transition: .3s;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 2.5rem;
    height: 2.5px;
    background: #0B1617;
    transition: .3s;
  }

  &:before {
    top: ${props => props.isOpen ? '0' : '-9px'};
    right: 0;
    transform: rotate(${props => props.isOpen ? '45' :'0'}deg);
  }

  &:after {
    right: 0;
    bottom: ${props => props.isOpen ? '0' : '-9px'};
    transform: rotate(${props => props.isOpen ? '-45' :'0'}deg);
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Options = styled.ul`
  display: none;
  height: 100%;
  gap: 2.5rem;

  @media (max-width: 900px) {
    display: flex;
  }

  @media (max-width: 900px) {
    position: absolute;
    top: calc(3.5rem - 11px);
    left: 0;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    padding: 4rem 2rem 1rem;
    width: 100%;
    height: calc(100vh - 4rem);
    font-size: 1.3em;
    background: #fff;
    transition: .3s;

    a,
    button {
      margin: .8rem 0;
      color: #000;
      font-size: 1em;

      &:before,
      &:after {
        opacity: 1;
        visibility: visible;
      }

      &:before {
        width: 2.7rem;
        background: #fff;
      }

      &:after {
        left: 3rem;
        min-width: 4rem;
      }
    }
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