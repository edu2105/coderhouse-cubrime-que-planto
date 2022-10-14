const getProducts = async (product="") => {
    const url = `https://enifi.stage.duettosystems.com/tools/products/${product}`;
    const response = await fetch(url);

    if(!response.ok){
        const { url, status, statusText } = response;
        throw Error(`Error: ${status} ${statusText} when fetching ${url}`);
    }
    
    const products = await response.json();
    return products;
};

export default getProducts;