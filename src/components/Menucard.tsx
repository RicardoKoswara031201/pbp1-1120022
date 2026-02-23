import type { Menu } from "../types/menu";
import { Link } from "react-router-dom";

export default function MenuCard({
  menu,
  onDelete,
}: {
  menu: Menu;
  onDelete: (id: number) => void;
}) {
  return (
    <div>
      <h3>{menu.nama}</h3>
      <p>{menu.deskripsi}</p>
      <p>rp {menu.harga}</p>
      <button onClick={() => onDelete(menu.id!)}>
        hapus
      </button>
      <Link to={`/update/${menu.id}`}>update</Link>
    </div>
  );
}