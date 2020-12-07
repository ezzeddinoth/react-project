import React from 'react';
import Table from '../Component/Table';
import {getAllProducts,deleteProduct,updateProduct,saveProduct} from '../Service/ProductService';


export default class Product extends React.Component {
    state = {
        products: [],loading: true
      }
    async componentWillMount() {
       //await deleteProduct(1002)

       //let p = await getProductById(1002); 
       //p.name="UPDATED";  
       //await updateProduct(p);

    }
 
    
    async componentDidMount() {
       let products = await getAllProducts(1)      
       this.setState({ products:products, loading:false})
      }


    render(){   
        return (    
            this.state.loading? <div>laoding</div>:
            <div>Product in Store:
        <Table data={this.state.products}></Table>
        </div>)
    }

}