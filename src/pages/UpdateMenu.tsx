import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMenuById, updateMenu } from "../Api/MainApi";
import MenuForm from "../components/MenuForm";
import type { Menu } from "../types/menu";

export default function UpdateMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID menu tidak tersedia");
      setLoading(false);
      return;
    }

    getMenuById(id)
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Menu tidak ditemukan");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!menu) return <p>Menu tidak ditemukan</p>;

  return (
    <MenuForm
      initialData={menu}
      onSubmit={async (data) => {
        if (!id) return; // <- pastikan id ada
        try {
          await updateMenu(id, data); // id sekarang pasti string
          alert("Menu berhasil diperbarui!");
        } catch (err) {
          if (err instanceof Error) alert("Gagal update menu: " + err.message);
          else alert("Gagal update menu");
        }
      }}
    />
  );
}