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
        setError(err instanceof Error ? err.message : "Failed to fetch menu");
      });
  }, []);

  async function handleDelete(id?: string) {
    if (!id) return;

    try {
      await deleteMenu(id);
      setMenus((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus menu");
    }
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