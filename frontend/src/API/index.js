export async function GetAllProducts() { 
    const req = await fetch('http://localhost:5000/api/products/',
    {method: 'GET'})
    const data = await req.json()
    return data
}

export async function GetProduct(id) { 
    const req = await fetch('http://localhost:5000/api/products/' + id, 
    {method: 'GET'})
    const data = await req.json()
    return data
}

export async function UpdateProduct(id, data) { 
    await fetch('http://localhost:5000/api/products/' + id, 
   {method: 'PATCH', body: JSON.stringify(data)} )
}

export async function CreateNewProduct(data) { 
    await fetch('http://localhost:5000/api/products/', 
    {method: 'POST', body: JSON.stringify(data)} )
}

export async function DeleteProduct(id) { 
    await fetch('http://localhost:5000/api/products/' + id, 
    {method: 'DELETE' })
}

export async function RegisterUser(data) { 
    await fetch('http://localhost:5000/api/register/', 
    {method: 'POST', body: JSON.stringify(data)} )
}

export async function AuthenticateUser(data) { 
    const req = await fetch('http://localhost:5000/api/register/', 
    {method: 'POST', body: JSON.stringify(data)} )
    const dataReq = await req.json()
    return dataReq    
}

export async function GetAllOrders() { 
    const req = await fetch('http://localhost:5000/api/orders/',
    {method: 'GET'} )
    const data = await req.json()
    return data
}

export async function CreateOrder(data) { 
    await fetch('http://localhost:5000/api/orders/', 
    {method: 'POST', body: JSON.stringify(data)} )
}