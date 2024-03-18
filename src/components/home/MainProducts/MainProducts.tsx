
const getProducts = async () => {
    try {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}admin/api/2024-01/products/11235813213455.json `, {
        headers: new Headers({
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
        })
    })
    const { products } = await response.json()
    return products
  } catch (error) {
    console.log(error)
  }
}

export const MainProducts = async () => {
    const products = await getProducts()
    
    return (
      <section>
        <h1> Main Products</h1>
      </section>
    )
    }
