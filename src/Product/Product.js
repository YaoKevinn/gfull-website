import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Modal from './Modal'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Chip } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Product.css'



function Product(props) {

    // Modal config
    const [showModalState, setShowModalState] = useState({ show:false });

    const showModal = () => {
        setShowModalState({ show: true });
    };

    const hideModal = () => {
        setShowModalState({ show: false });
    };

    // PurchaseState config
    const [purchaseState, setPurchaseState] = useState({ quantity:0, total:0, warningText:false });

    const addQuantityHandler = (event) => {
        event.preventDefault();
        const newQuantity = purchaseState.quantity + 1;
        const totalPrice = props.calculateTotalPerItem(newQuantity, product);
        setPurchaseState({ quantity: newQuantity, total: totalPrice, warningText: false});
    }

    const removeQuantityHandler = (event) => {
        event.preventDefault();
        const currentQuantity = purchaseState.quantity;
        if (currentQuantity > 0){
            const newQuantity = currentQuantity - 1;
            const totalPrice = props.calculateTotalPerItem(newQuantity, product);
            setPurchaseState({ quantity: newQuantity,total: totalPrice, warningText: false});
        }
    }

    const addButtonHandler = (event) => {
        event.preventDefault();
        const currentQuantity = purchaseState.quantity;
        if (currentQuantity !== 0) {
            const currentTotal = purchaseState.total;
            props.addToCart(product.id, currentQuantity, currentTotal);
            hideModal();
            snackBarOpen();
            setPurchaseState({ quantity:0, total:0, warningText: false});
        }else {
            setPurchaseState({quantity:0, total: 0, warningText: true});
        }
    }

    // Snack bar state config
    const [open, setOpen] = React.useState(false);

    const snackBarOpen = () => {
      setOpen(true);
    };
  
    const snackBarClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    //Output data config
    const product = props.pObj;
    const productImg = require('../images/product/'+product.productImage);

    return (
            <Grid item xs={12} sm={6} md={4} lg={2} align="center">
                <Card className="product">
                    <CardMedia
                        component="img"
                        alt=""
                        height="200"
                        image={productImg}
                        title="item"
                        draggable={false}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="h2" align="left">
                                {product.productName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="span" className="product__descriptionSpan">
                                {product.productDescription}
                        </Typography>
                        <Typography variant="h6" color="textPrimary" component="span" className="product__priceSpan">
                                <small>P$</small> <span className="productPrice">{product.price1kg}</span> <small> / kg</small>
                        </Typography>
                        { product.discountKgs !== 0 ? (
                            <Typography variant="h6" color="textPrimary" component="span" className="product__priceSpan">
                                <Chip className="product__chipStyle" label="特價" size="small" /> 
                                <small>P$ </small> <span className="productPrice">{product.priceKgs}</span><small> / {product.discountKgs} kg</small>
                            </Typography>) : null }
                    
                        <br/>
                        <Button className="product__addButton" variant="contained" startIcon={<AddShoppingCartIcon />} onClick={showModal}>
                            加至購物車
                        </Button>
                    </CardContent>
            </Card>
            <Modal show={showModalState.show} handleClose={hideModal}>
                <img className="product__modalImg" src={productImg} alt="prdImg"/>
                <div className="product__modalDescription">
                    <p>{product.productName}</p>
                    <p>{product.productDescription}</p>
                    <small>P$ </small><span>{product.price1kg}</span><small> / kg</small>
                    <br/>
                    <small>P$ </small><span>{product.priceKgs}</span><small> / {product.discountKgs} kg</small>
                    <div className="product__modalCounter">
                         <Fab 
                            color="default" 
                            aria-label="remove" 
                            size="small" 
                            style={{margin:'auto 10px'}}
                            onClick={removeQuantityHandler} >
                                <RemoveIcon />
                        </Fab>
                        <span>{purchaseState.quantity}</span> Kg
                        <Fab 
                            color="default" 
                            aria-label="add" 
                            size="small" 
                            style={{margin:'auto 10px'}}
                            onClick={addQuantityHandler}>
                                <AddIcon />
                        </Fab>
                    </div>
                    <span>總計 ${purchaseState.total}</span>
                    <br/>
                    <br/>
                    <Button 
                        className="product__addButton" 
                        variant="contained" 
                        startIcon={<AddShoppingCartIcon />}
                        onClick={addButtonHandler}>確認數量
                    </Button>
                    { purchaseState.warningText ? <span id="warningText" style={{color:'red', margin:'15px 0', display:'block'}}>請輸入購買數量...</span> : null}
                </div>
            </Modal>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={snackBarClose}
                message={'** '+product.productName+' ** 加入購物車!'}
                action={
                    <React.Fragment>
                         <IconButton size="small" aria-label="close" color="inherit" onClick={snackBarClose}>
                               <CloseIcon fontSize="small" />
                         </IconButton>
                    </React.Fragment>
                }/>
        </Grid>
    )
}

export default Product
