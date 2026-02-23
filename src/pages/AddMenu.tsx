import { useState } from "react";
import type { Menu } from "../types/menu";
import "../styles/addMenu.css";

export default function AddMenu() {
  // 🔹 state SESUAI interface Menu
  const [menu, setMenu] = useState<Menu>({
    nama: "",
    deskripsi: "",
    harga: 0,
    size: "small",
    label: "halal",
    kategori: "makanan",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setMenu({
      ...menu,
      [name]:
        name === "harga"
          ? Number(value)
          : value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 🔥 DI SINI DATANYA SUDAH SESUAI Menu
    console.log(menu);
    // nanti tinggal kirim ke API
  }

  return (
    <div className="add-container">
      <h1 className="title">Tambah Menu Baru</h1>

      <form className="menu-form" onSubmit={handleSubmit}>
        {/* KIRI */}
        <div className="form-left">
          <label>nama menu</label>
          <input
            name="nama"
            value={menu.nama}
            onChange={handleChange}
          />

          <label>deskripsi</label>
          <input
            name="deskripsi"
            value={menu.deskripsi}
            onChange={handleChange}
          />

          <label>harga</label>
          <input
            type="number"
            name="harga"
            value={menu.harga}
            onChange={handleChange}
          />
        </div>

        {/* KANAN */}
        <div className="form-right">
          <label>size</label>
          <select
            name="size"
            value={menu.size}
            onChange={handleChange}
          >
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>

          <label>label</label>
          <select
            name="label"
            value={menu.label}
            onChange={handleChange}
          >
            <option value="vegan">vegan</option>
            <option value="gluten_free">gluten_free</option>
            <option value="halal">halal</option>
            <option value="low_cal">low_cal</option>
          </select>

          <label>kategori</label>
          <select
            name="kategori"
            value={menu.kategori}
            onChange={handleChange}
          >
            <option value="makanan">makanan</option>
            <option value="minuman">minuman</option>
          </select>
        </div>

        <button className="submit-btn">simpan menu</button>
      </form>
    </div>
  );
}