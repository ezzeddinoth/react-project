import axios from 'axios';

export async function getOrders() {
    let data;
    await axios.get(`/order/all`)
          .then(res => {
            const orders = res.data;
            data = orders;
    })
    let data1= [];
    let obj;
    let orderId;
    let numberOfItems;
    let paid;
    data.forEach(order=> {
        orderId= order.orderId
        numberOfItems= order.numberOfItems
        paid= order.paid
        obj={orderId,...order.person,...order.product, numberOfItems,paid}
       data1.push(obj)
    })
    
    return data1;
}

export async function deleteOrder(id) {
  await axios.delete(`/order/order?id=`+id)
      //TODO Check...
  return true;
}

export async function updateOrder(order) {

  axios.put(`/order/order`,  order)
  .then(response => {
    console.log(response)
}).catch(error => {
    console.log(error.response)
})
}

export async function saveOrder(order) {
axios.post(`/order/order`, 
  order
)
.then(function (response) {
  console.log(response);
})
}