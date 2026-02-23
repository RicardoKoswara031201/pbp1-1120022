import type { Menu } from "../types/menu";

const BASE_URL = "/api";

export async function getMenus(): Promise<Menu[]> {
  const res = await fetch(`${BASE_URL}/list-menu`);

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}

export async function getMenuById(id: number): Promise<Menu> {
  const res = await fetch(`${BASE_URL}/menu/${id}`);

  if (!res.ok) {
    throw new Error("Menu not found");
  }

  return res.json();
}

export async function createMenu(data: Menu): Promise<Menu> {
  const res = await fetch(`${BASE_URL}/create-menu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create menu");
  }

  return res.json();
}

export async function updateMenu(
  id: number,
  data: Menu
): Promise<Menu> {
  const res = await fetch(`${BASE_URL}/update-menu/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update menu");
  }

  return res.json();
}

export async function deleteMenu(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/delete-menu/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete menu");
  }
}