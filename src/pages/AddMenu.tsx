import { useState } from "react";
import type { Menu } from "../types/menu";
import { createMenu } from "../Api/MainApi";
import "../styles/addMenu.css";

interface AddMenuProps {
  onAdd?: (menu: Menu) => void; 
}

export default function AddMenu({ onAdd }: AddMenuProps) {
  const [menu, setMenu] = useState<Menu>({
    nama: "",
    deskripsi: "",
    harga: 0,
    size: "small",
    label: "halal",
    kategori: "makanan",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setMenu({
      ...menu,
      [name]: name === "harga" ? Number(value) : value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newMenu = await createMenu(menu);
      console.log("Menu berhasil ditambahkan:", newMenu);

      // Update parent list jika ada callback
      if (onAdd) onAdd(newMenu);

      // Reset form
      setMenu({
        nama: "",
        deskripsi: "",
        harga: 0,
        size: "small",
        label: "halal",
        kategori: "makanan",
      });

      alert("Menu berhasil ditambahkan!");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Gagal menambahkan menu");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="add-container">
      <h1 className="title">Tambah Menu Baru</h1>

      <form className="menu-form" onSubmit={handleSubmit}>
        {/* KIRI */}
        <div className="form-left">
          <label>Nama Menu</label>
          <input
            name="nama"
            value={menu.nama}
            onChange={handleChange}
            required
          />

          <label>Deskripsi</label>
          <input
            name="deskripsi"
            value={menu.deskripsi}
            onChange={handleChange}
            required
          />

          <label>Harga</label>
          <input
            type="number"
            name="harga"
            value={menu.harga}
            onChange={handleChange}
            min={0}
            required
          />
        </div>

        {/* KANAN */}
        <div className="form-right">
          <label>Size</label>
          <select name="size" value={menu.size} onChange={handleChange}>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>

          <label>Label</label>
          <select name="label" value={menu.label} onChange={handleChange}>
            <option value="vegan">vegan</option>
            <option value="gluten_free">gluten_free</option>
            <option value="halal">halal</option>
            <option value="low_cal">low_cal</option>
          </select>

          <label>Kategori</label>
          <select
            name="kategori"
            value={menu.kategori}
            onChange={handleChange}
          >
            <option value="makanan">makanan</option>
            <option value="minuman">minuman</option>
          </select>
        </div>

        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? "Menyimpan..." : "Simpan Menu"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}