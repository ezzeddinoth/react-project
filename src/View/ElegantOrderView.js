import React from 'react';
import Table from '../Component/Table';
import {getOrderDTO} from '../Service/OrderDTOService'



export default class ElegantOrderView extends React.Component {
    state = {
        orders: [],loading: true
      }

    async componentDidMount() {
  
       let orders = await getOrderDTO()      
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