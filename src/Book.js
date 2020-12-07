import React, { Component } from 'react';
import {getBooks} from  './service.js';
import './styled-table.css';

export default class Book extends Component {
    constructor(){
        super();
      
        this.setState({ loading: true});
        this.renderBooks = this.renderBooks.bind(this);
        
    }
    componentWillMount() {
        this.setState({ loading: true});
    }
    async componentDidMount() {
        let data = await getBooks();
  
        this.setState({Books: data, loading: false});  
    }

    renderBooks(){
        return (
            this.state.loading? <div>Laoding</div> :
            
            <table className="styled-table">


            <thead>
                 <tr>
                 <td>ID</td>
                 <td>name</td>
                 <td>PassNumber</td>
                 <td>nurInStore</td>
                 <td>nurUsedInStore</td>
                </tr>
            </thead>    
            <tbody>
               {this.state.Books.map((book, i) => <TableRow key = {i} 
        data = {book} />)}
            </tbody>
            </table>
         )
    }


    render (){

        return (<div> {this.renderBooks()}</div>
           
        )
    }
}

class TableRow extends React.Component {
    render() {
       return (
    
          <tr>
             <td>{this.props.data.ISBN}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.description}</td>
             <td>{this.props.data.nurInStore}</td>
             <td>{this.props.data.nurUsedInStore}</td>
          </tr>
          
       );
    }
 
}