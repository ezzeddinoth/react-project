import axios from 'axios';

export async function getAllProducts() {
  let data;
  await axios.get(`/product/all`)
    .then(res => {
      const persons = res.data;
      data = persons;
    })
  return data;
}


export async function deleteProduct(id) {
  await axios.delete(`/product/product?id=` + id)
  //TODO Check...
  return true;
}

export async function updateProduct(product) {

  axios.put(`/product/product`, product)
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })
}

export async function saveProduct(product) {
  axios.post(`/product/product`, product)
    .then(function (response) {
      console.log(response);
    })
}