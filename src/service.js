
export async function getPerson() {
    let response = await fetch("http://localhost:5000/person/6");
    let data = await response.json()
    return data;
}

export async function grantAccess(name,pass) {
    //alert(name);alert(pass);
    let response = await fetch("http://localhost:5000/person1/"+name+"/"+pass);
    let data = await response.json()
    return data;
}


export async function getBooks() {
    //alert(name);alert(pass);
    let response = await fetch("http://localhost:5000/book/");
    let data = await response.json()
    return data;
}

