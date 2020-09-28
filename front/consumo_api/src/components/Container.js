import React,{Component} from'react';
import App from './App';
import {getProductos, getProductosSearch} from'../services/productos';
import Search from './Search';



class Container extends Component{

    constructor(props){
        super(props)

        this.state={
           productos: [], 
           isFetch: true
        }
    }

    async componentDidMount(){
        const responseJson= await  getProductos()
        this.setState({productos:responseJson, isFetch:false})
        
    }

    handleSearch = async (search)=>{
        const responseJson = await getProductosSearch(search)
        this.setState({productos:responseJson})
    }


    render(){

        const { isFetch, productos}= this.state;

        return (
            <>  
            <Search handleSearch={this.handleSearch} ></Search>
            {
                isFetch && 'Cargando...'
            }
            {
                (!isFetch&& !productos.length) && 'No se econtró el producto...'
            }
            <section className="container">
                {
                    this.state.productos.map((producto)=><App  
                    codigo={producto.CODIGO} 
                    sku={producto.SKU} 
                    descripcion={producto.Descripcion} 
                    key={producto._id}/>)
                }
            </section>
            </>
        )
    }

} 

export default Container;