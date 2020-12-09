import axios from 'axios';

export async function getOrderDTO() {
    let data;
    await axios.get(`/orderDTO/all`)
          .then(res => {
            const orderDTO = res.data;
            data = orderDTO;
    })
    return data;
}