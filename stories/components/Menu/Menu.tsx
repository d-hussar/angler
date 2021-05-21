import React, {
  FC,
  Fragment,
  useState,
} from 'react';
import Submenu from '../Submenu';
import {
  Container,
  MenuItem,
  MenuItemWrapper,
} from './Menu.styled';
import {
  MenuProps,
  MenuState,
  OpenSubmenu,
} from './Menu.types';

const Menu: FC<MenuProps> = ({
  stories,
  currentUseCaseIndex,
  currentWidgetIndex,
  setActive,
}) => {
  const [openItemIndex, setOpenItemIndex] = useState<MenuState>(0);

  const openSubmenu: OpenSubmenu = index => () => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <Container>
      {
        stories.map(({ title, useCase }, index) => {
          const isActive = currentWidgetIndex === index;
          const isOpen = openItemIndex === index;

          return (
            <MenuItemWrapper key={ index }>
              <MenuItem
                isActive={ isActive }
                isOpen={ isOpen }
                onClick={ openSubmenu(index) }
              >
                { title }
              </MenuItem>
              {
                isOpen
                  ?
                    <Submenu
                      currentUseCase={ currentUseCaseIndex }
                      setActive={ setActive(index) }
                      isActive={ isActive }
                      items={ useCase }
                    />
                  : <Fragment />
              }
            </MenuItemWrapper>
          )
        })
      }
    </Container>
  )
};

export default Menu;
