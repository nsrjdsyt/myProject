import React,{Component} from 'react';

const productList = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function ProductCategoryRow (props){
    return (<tr><td colSpan="2" style={{fontWeight:'bold'}}>{props.category}</td></tr>);
}

function ProductRow (props){
    let name = props.stocked ? props.name : <span style={{color:'red'}}>{props.name}</span>
    return (<tr><td>{name}</td><td>{props.price}</td></tr>);
}

function ProductTable (props){
    let categoryTemp = null,
        rows=[];

        props.productList.forEach((product) => {
            if(product.name.indexOf(props.filterText) === -1 || (props.inStockOnly && !product.stocked)){
                return
            }

            if(product.category !== categoryTemp){
                rows.push(<ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>);
                categoryTemp = product.category;
            }

            rows.push(<ProductRow  {...product} key={product.name}></ProductRow>)

        });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleCheckChange = this.handleCheckChange.bind(this)
    }
    handleTextChange(e){
        this.props.filterTextChange(e.target.value)
    }
    handleCheckChange(e){
        this.props.inStockOnlyChange(e.target.checked)
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="Serach...." text={this.props.filterText} onChange={this.handleTextChange}></input>
                <br></br>
                <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleCheckChange}></input> Only show products in stock
            </div>
        )
    }
}

export default class FilterableProductTable  extends Component{
    constructor(props){
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.filterTextChange = this.filterTextChange.bind(this)
        this.inStockOnlyChange = this.inStockOnlyChange.bind(this)
    }

    filterTextChange(text){
        this.setState({
            filterText: text
        })
    }

    inStockOnlyChange(stocked){
        this.setState({
            inStockOnly: stocked
        })
    }

    render(){
        return (
            <div>
                <SearchBar {...this.state} filterTextChange={this.filterTextChange} inStockOnlyChange={this.inStockOnlyChange}></SearchBar>
                <ProductTable productList={productList} {...this.state}></ProductTable>
            </div>
        )
    }
}
