import type { Menu } from "../types/menu";
import { useState } from "react";

export default function MenuForm({
  initialData,
  onSubmit,
}: {
  initialData: Menu;
  onSubmit: (data: Menu) => void;
}) {
  const [form, setForm] = useState<Menu>(initialData);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nama || !form.deskripsi) {
      setError("form tidak boleh kosong");
      return;
    }
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input name="nama" value={form.nama} onChange={handleChange} />
      <input name="deskripsi" value={form.deskripsi} onChange={handleChange} />
      <input name="harga" type="number" value={form.harga} onChange={handleChange} />
      <button type="submit">simpan</button>
    </form>
  );
}