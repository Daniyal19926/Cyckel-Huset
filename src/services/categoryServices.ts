export interface Category {
  id: string;
  name: string;
}
const categories: Category[] = [
  { id: "1", name: "Dam cykel" },
  { id: "2", name: "Herr cykel" },
  { id: "3", name: "Barn cykel" },
  { id: "4", name: "Moutain bike" },
  { id: "5", name: "Lås" },
  { id: "6", name: "Ljus" },
  { id: "7", name: "Hjälm" },
];
export default function getCategories() {
  return categories;
}
