import axios from "axios";

export const fetchProducts = () =>
    axios
        .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
        .then((res) => res.data)

export const fetchProductsPagination = async (page, limit) => {
    const offset = page * limit;
    await axios
        .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products", {
            params: { page: offset, limit },
        })
        .then((res) => res.data)
}

