import { Category } from "./categoryServices";

interface Product {
  id: string;
  name: string;
  category: Category;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: "1234",
    name: "Kildemos",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.elcykelsalg.dk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/i/kildemoes_logic_flow_dame47_platinum_matt_orange.jpg",
  },
  {
    id: "1235",
    name: "Kildemos Plus",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.elcykelsalg.dk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/i/kildemoes_logic_flow_dame47_platinum_matt_orange.jpg",
  },
  {
    id: "1236",
    name: "Kildemos Elite",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.elcykelsalg.dk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/i/kildemoes_logic_flow_dame47_platinum_matt_orange.jpg",
  },
  {
    id: "1237",
    name: "Kildemos Cruiser",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.elcykelsalg.dk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/i/kildemoes_logic_flow_dame47_platinum_matt_orange.jpg",
  },
  {
    id: "1238",
    name: "Kildemos Sport",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.elcykelsalg.dk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/i/kildemoes_logic_flow_dame47_platinum_matt_orange.jpg",
  },
  {
    id: "1239",
    name: "Kildemos Touring",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.cykel-basen.dk/pub/media/catalog/product/cache/ff45edbfc44912f67a4ee7c110bda3b3/k/i/kildemoes_city_steps_n7_cb_da51_blue_cykel-basen.jpg",
  },
  {
    id: "1240",
    name: "Kildemos Adventure",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.cykel-basen.dk/pub/media/catalog/product/cache/ff45edbfc44912f67a4ee7c110bda3b3/k/i/kildemoes_city_steps_n7_cb_da51_blue_cykel-basen.jpg",
  },
  {
    id: "1241",
    name: "Kildemos Classic",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.cykel-basen.dk/pub/media/catalog/product/cache/ff45edbfc44912f67a4ee7c110bda3b3/k/i/kildemoes_city_steps_n7_cb_da51_blue_cykel-basen.jpg",
  },
  {
    id: "1242",
    name: "Kildemos City",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.cykel-basen.dk/pub/media/catalog/product/cache/ff45edbfc44912f67a4ee7c110bda3b3/k/i/kildemoes_city_steps_n7_cb_da51_blue_cykel-basen.jpg",
  },
  {
    id: "1243",
    name: "Kildemos Commuter",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.cykel-basen.dk/pub/media/catalog/product/cache/ff45edbfc44912f67a4ee7c110bda3b3/k/i/kildemoes_city_steps_n7_cb_da51_blue_cykel-basen.jpg",
  },
  {
    id: "1244",
    name: "Kildemos Supreme",
    category: { id: "1", name: "Dam cykel" },
    imageUrl:
      "https://www.cykel-basen.dk/pub/media/catalog/product/cache/ff45edbfc44912f67a4ee7c110bda3b3/k/i/kildemoes_city_steps_n7_cb_da51_blue_cykel-basen.jpg",
  },
  {
    id: "4567",
    name: "Abus",
    category: { id: "5", name: "Lås" },
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
  },
  {
    id: "4568",
    name: "Abus Lock",
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
    category: { id: "5", name: "Lås" },
  },

  {
    id: "4569",
    name: "Abus Security",
    category: { id: "5", name: "Lås" },
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
  },

  {
    id: "4570",
    name: "Abus 1500",
    category: { id: "5", name: "Lås" },
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
  },

  {
    id: "4571",
    name: "Abus Bike Lock",
    category: { id: "5", name: "Lås" },
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
  },
  {
    id: "4572",
    name: "Abus Safety",
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
    category: { id: "5", name: "Lås" },
  },
  {
    id: "4573",
    name: "Abus Secure",
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
    category: { id: "5", name: "Lås" },
  },
  {
    id: "4574",
    name: "Abus Pro",
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
    category: { id: "5", name: "Lås" },
  },
  {
    id: "4575",
    name: "Abus Ultra",
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
    category: { id: "5", name: "Lås" },
  },
  {
    id: "4576",
    name: "Abus Shield",
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
    category: { id: "5", name: "Lås" },
  },
  {
    id: "4577",
    name: "Abus Smart",
    imageUrl:
      "https://cdn.starwebserver.se/shops/bjoorns-cykel/files/8730-3001-02-kopia.jpg",
    category: { id: "5", name: "Lås" },
  },
  {
    id: "7890",
    name: "cube",
    category: { id: "4", name: "Moutain bike" },
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cube.eu%2Fbikes%2Fmountainbike%2Fhardtail&psig=AOvVaw3TO1KWpCqkcD0aY1t8Gaqq&ust=1736334406864000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCIku6744oDFQAAAAAdAAAAABAE",
  },
];
export function getProducts() {
  return products;
}

export function getProduct(id: string) {
  const product = products.filter((product) => product.id !== id);
  return product;
}
