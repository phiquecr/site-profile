import React from "react";
import MenuMobile from "../MenuMobile";
import * as S from "./styled"

const MenuNavigation = () => (
  <S.Container>
    <S.BoxMenu>
      <S.NameTitle>Pedro Henrique</S.NameTitle>
      <S.Options>
        <S.OptionItem>
          <S.OptionLink to="/">Home</S.OptionLink>
        </S.OptionItem>
        <S.OptionItem>
          <S.OptionLink to="/">Portfolio</S.OptionLink>
        </S.OptionItem>
        <S.OptionItem>
          <S.OptionLink to="/">Contact</S.OptionLink>
        </S.OptionItem>
      </S.Options>
      <MenuMobile 
        pageWrapId={'page-wrap'} 
        outerContainerId={'outer-container'}
      />
    </S.BoxMenu>
  </S.Container>
)

export default MenuNavigation