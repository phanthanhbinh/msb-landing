import { menu } from "../menu";

export const newMenu: any[] = [];
menu.forEach((item: any) => {
  if (item.subMenu.length > 0) {
    item.subMenu.forEach((subMenu: any) => {
      newMenu.push({
        ...subMenu,
        openKey: item.key,
      });
    });
  } else {
    newMenu.push(item);
  }
});
