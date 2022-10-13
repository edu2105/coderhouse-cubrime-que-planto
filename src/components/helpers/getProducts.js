const getProducts = async (product="") => {
    const url = `https://enifi.stage.duettosystems.com/tools/products/${product}`;
    const response = await fetch(url);
    const products = await response.json();
    
    return products;
};

export default getProducts;