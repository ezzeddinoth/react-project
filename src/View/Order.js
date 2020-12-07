import React from 'react';
import Table from '../Component/Table';
import {getOrders, deleteOrder, getOrderById,updateOrder,saveOrder} from '../Service/OrderService'

import {getPerson,getPersonById,deletePerson,savePerson,updatePerson} from '../Service/PersonService'
import {getAllProducts,getProductById,deleteProduct,updateProduct,saveProduct} from '../Service/ProductService';


export default class Person extends React.Component {
    state = {
        orders: [],loading: true
      }
    
    async componentWillMount() {

      //deleteOrder(3);
        /*let o=await getOrderById(1);
        o.FIRSTNAME="EDITED";
        await updateOrder(o);  */   

        /*let product=await getProductById(1);
        let person=await getPersonById(1);
        //person.firstName='ANGA';// adjust equality and Hashcode in JAva
        let orderId=207;
        let numberOfItems=177;
        let paid= true;
        let order={orderId,person,product,numberOfItems,paid}

        await updateOrder(order);
        */
      }

    async componentDidMount() {
  
       let orders = await getOrders()      
       this.setState({ orders:orders, loading:false})
      }


    render(){   
        return (    
            this.state.loading? <div>laoding</div>:
            <div>Orders in System:
        <Table data={this.state.orders}></Table>

        </div>)
    }

}