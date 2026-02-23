import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMenuById, updateMenu } from "../Api/MainApi";
import MenuForm from "../components/MenuForm";
import type { Menu } from "../types/menu";

export default function UpdateMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState<Menu | null>(null);

  useEffect(() => {
    getMenuById(id!).then(setMenu);
  }, [id]);

  if (!menu) return <p>loading...</p>;

  return (
    <MenuForm
      initialData={menu}
      onSubmit={(data) => updateMenu(id!, data)}
    />
  );
}