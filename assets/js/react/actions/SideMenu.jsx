export const TOGGLE_SIDEMENU = 'TOGGLE_SIDEMENU';
export const REGISTER_MENU_ENTRY = 'REGISTER_MENU_ENTRY';
export const TOGGLE_MENU_ENTRY = 'TOGGLE_MENU_ENTRY';

export const toggleSideMenu = () => {
  return {
    type: TOGGLE_SIDEMENU
  };
};

export const registerMenuEntry = (identifier, open, target) => {
  return {
    type: REGISTER_MENU_ENTRY,
    identifier,
    open,
    target
  };
};

export const toggleMenuEntry = (identifier) => {
  return {
    type: TOGGLE_MENU_ENTRY,
    identifier
  };
};
