export async function getProductos(){

    const response = await fetch("http://localhost:3001/productos", {
        method: 'GET',
        headers: {
            'token': '123',
        }
    })
    const responseJson = await response.json()
    return responseJson
}

export async function getProductosSearch(q){
    const response= await fetch(`http://localhost:3001/productos/${q}`, {
        method: 'GET',
        headers: {
            'token': '123',
        }
    })
    const responseJson = await response.json()
    return responseJson
}


export default{
    getProductos,
    getProductosSearch

}