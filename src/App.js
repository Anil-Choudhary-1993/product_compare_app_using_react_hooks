import React, { useState } from 'react';
import './App.css';
import { data, attributes } from './initialstate';
import Container from './Container';
import AppBar from './AppBar';
import Cards from './Cards';
import CompareProducts from './CompareProducts';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  product_title: {
    fontSize: 'x-large',
    paddingTop: '2%',
    paddingLeft: '3%'
  },
  product_title_min: {
    fontSize: 'x-large',
    paddingTop: '2%',
    paddingLeft: '30%'
  }
}));

function App() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:900px)');

  const [attr, setAttributes] = useState(attributes);
  const updateAttributes = (attr) => {
    setAttributes(attr);
  }

  const [selectedProduct, setSelectedProduct] = useState([]);
  const updateSelectedProduct = (product) => {
    if (!selectedProduct.find(v => v.id === product.id)) {
      selectedProduct.push(product)
      let newList = [...selectedProduct]
      setSelectedProduct(newList)
    } else {
      let newList = selectedProduct.filter(v => v.id !== product.id)
      setSelectedProduct(newList)
    }
  }

  return (
    <React.Fragment>
      <AppBar
        attributes={attr}
        updateAttributes={updateAttributes} />
      <Container>
        <div className={matches ? classes.product_title_min : classes.product_title}>
          Compare Products
        </div>
        <Cards
          data={data}
          selectedData={selectedProduct}
          setSelectedData={updateSelectedProduct} />
      </Container >
      <CompareProducts
        attributes={attr}
        products={selectedProduct} />
    </React.Fragment >
  )
}

export default App;
