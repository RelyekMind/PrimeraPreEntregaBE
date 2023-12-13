import { ProductManager } from "./ProductManager.js";

let CAIDIM = new ProductManager("./productos.json");

const TecladoHyperX =
  "https://oechsle.vteximg.com.br/arquivos/ids/9112583-1000-1000/imageUrl_2.jpg?v=637904836940930000";
const MouseSuperlight =
  "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png";
const MousepadXLRojo =
  "https://m.media-amazon.com/images/S/aplus-media-library-service-media/20f05e3f-ccf0-4bd3-b182-93025681e5a8.__CR0,0,970,600_PT0_SX970_V1___.jpg";

CAIDIM.addProduct(
  "001",
  "Teclados",
  "HyperX Alloy Fps Origins 60%n",
  100,
  Teclados,
  10
);
CAIDIM.addProduct(
  "002",
  "Mouses",
  "Logitech G Pro X Superlight",
  200,
  Mouses,
  10
);
CAIDIM.addProduct("003", "Mousepads", "Superglide XL Rojo", 200, Mousepads, 10);
