import axios from "axios";

const APIGetProducts = async () => {
  try {
    const baseURL = import.meta.env.VITE_API_URL;
    const apiPath = import.meta.env.VITE_API_PATH;
    const url = `${baseURL}/${apiPath}/products`;
    const products = await axios.get(url);
    return products.data.products;
  } catch (err) {
    console.error(err);
  }
};
export { APIGetProducts };
