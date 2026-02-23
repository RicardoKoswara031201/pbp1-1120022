import { useEffect, useState } from "react";
import { getMenus, deleteMenu } from "../Api/MainApi";
import type { Menu } from "../types/menu";
import MenuCard from "../components/Menucard";

export default function ListMenu() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMenus()
      .then(setMenus)
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to fetch menu");
        }
      });
  }, []);

  async function handleDelete(id?: number) {
    if (!id) return;

    await deleteMenu(id.toString());
    setMenus((prev) => prev.filter((m) => m.id !== id));
  }

  if (error) return <p>{error}</p>;

  return (
    <div>
      {menus.map((menu) => (
        <MenuCard
          key={menu.id}
          menu={menu}
          onDelete={() => handleDelete(menu.id)}
        />
      ))}
    </div>
  );
}