// src/Api/MainApi.ts
import type { Menu } from "../types/menu";

const BASE_URL = "https://kuis1-pbp.hansyulian.space/api";

// 1️⃣ Ambil semua menu
export async function getMenus(): Promise<Menu[]> {
  const res = await fetch(`${BASE_URL}/list-menu`);
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
}

// 2️⃣ Ambil menu by ID
export async function getMenuById(id: string): Promise<Menu> {
  const res = await fetch(`${BASE_URL}/menu/${id}`);
  if (!res.ok) throw new Error("Menu not found");
  return res.json();
}

// 3️⃣ Tambah menu
export async function createMenu(data: Menu) {
  const res = await fetch(`${BASE_URL}/create-menu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create menu");
  return res.json();
}

// 4️⃣ Update menu
export async function updateMenu(id: string, data: Menu) {
  const res = await fetch(`${BASE_URL}/update-menu/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update menu");
  return res.json();
}

// 5️⃣ Hapus menu
export async function deleteMenu(id: string) {
  const res = await fetch(`${BASE_URL}/delete-menu/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete menu");
}