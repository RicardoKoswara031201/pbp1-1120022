export type Size = "small" | "medium" | "large";
export type Label = "vegan" | "gluten_free" | "halal" | "low_cal";
export type Kategori = "makanan" | "minuman";

export interface Menu {
  id?: number;
  nama: string;
  deskripsi: string;
  harga: number;
  size: Size;
  label: Label;
  kategori: Kategori;
}

// export type Barang = {
//     nama: "1123001_Es Teh Tawar"
//     deskripsi: "Teh tawar dingin segar"
//     harga: 7000
//     size: "small"
//     label: "halal"
//     kategori: "minuman"
// }

// export type  BarangUpdate = {
//     nama: "1123001_Teh Tawar Panas"
//     deskripsi: "Teh tawar hangat panas"
//     harga: 7000
//     size: "small"
//     label: "halal"
//     kategori: "minuman"
// }