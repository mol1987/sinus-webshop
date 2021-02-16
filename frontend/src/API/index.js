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

export async function UpdateProduct(data, token) { 
    await fetch('http://localhost:5000/api/products/' + data._id, 
   {method: 'PATCH',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
    },
   body: JSON.stringify(data)})
}

export async function CreateNewProduct(data, token) { 
    const req = await fetch('http://localhost:5000/api/products/', 
    {method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token},
     body: JSON.stringify(data)} )
     const dataReq = await req.json()
     return dataReq
}

export async function DeleteProduct(id, token) { 
    const req = await fetch('http://localhost:5000/api/products/' + id, 
    {method: 'DELETE',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
        }
     })
     const dataReq = await req.json()
    return dataReq 
}

export async function RegisterUser(data) { 
    const req = await fetch('http://localhost:5000/api/register/', 
    {method: 'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
     body: JSON.stringify(data)} )
    const dataReq = await req.json()
    return dataReq  
}

export async function AuthenticateUser(data) { 
    const req = await fetch('http://localhost:5000/api/auth/', 
    {method: 'POST',
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)} )
    const dataReq = await req.json()
    return dataReq    
}

export async function GetAllOrders(token) { 
    const req = await fetch('http://localhost:5000/api/orders/',
    {method: 'GET',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
        }
    } )
    const data = await req.json()
    return data
}

export async function CreateOrder(data, token) { 
    const req = await fetch('http://localhost:5000/api/orders/', 
    {method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
    },
     body: JSON.stringify(data)} )
    const reqData = await req.json()
    return reqData
}
