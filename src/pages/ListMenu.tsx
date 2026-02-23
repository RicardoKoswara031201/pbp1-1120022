import { useEffect, useState } from "react";
import { getMenus, deleteMenu } from "../Api/MainApi.ts";
import type { Menu } from "../types/menu";
import MenuCard from "../components/Menucard";

export default function ListMenu() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMenus()
      .then(setMenus)
      .catch(err => setError(err.message));
  }, []);

  async function handleDelete(id: number) {
    await deleteMenu(id);
    setMenus(menus.filter(m => m.id !== id));
  }

  if (error) return <p>{error}</p>;

  return (
    <div>
      {menus.map(menu => (
        <MenuCard
          key={menu.id}
          menu={menu}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}