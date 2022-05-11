import React, { useState } from "react";
import * as S from "./styled"

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <S.Container>
      <S.MenuBtn
        onClick={() => setIsOpen(isOpen ? false : true)}
        isOpen={isOpen}
      />
      <S.Options isOpen={isOpen}>
        <S.OptionItem>
          <S.OptionLink onClick={() => setIsOpen(false)} activeClassName="active" to="/">Home</S.OptionLink>
        </S.OptionItem>
        <S.OptionItem>
          <S.OptionLink onClick={() => setIsOpen(false)} activeClassName="active" to="/">Portfolio</S.OptionLink>
        </S.OptionItem>
        <S.OptionItem>
          <S.OptionLink onClick={() => setIsOpen(false)} activeClassName="active" to="/">Contact</S.OptionLink>
        </S.OptionItem>
      </S.Options>
    </S.Container>
  )
}

export default MenuMobile