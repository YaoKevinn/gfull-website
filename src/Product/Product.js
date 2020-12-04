import React, { useState } from 'react';
// import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FadeIn from 'react-fade-in';
import LazyLoad from 'react-lazy-load';
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

    const hideModalWithConfirm = () => {
        if (purchaseState.quantity !== 0 && window.confirm("確定關閉嗎? ***商品尚未加入購物車, 請點選'確認數量'加入***")){
            setShowModalState({ show: false });
        }
        if (purchaseState.quantity === 0) {
            setShowModalState({ show: false });
        }
    };

    // PurchaseState config
    const [purchaseState, setPurchaseState] = useState({ quantity:0, total:0, warningText:false });

    const addQuantityHandler = (event) => {
        event.preventDefault();
        var newQuantity = 0;
        if (product.unitPrice) {
            newQuantity = purchaseState.quantity + 1;
        }else {
            newQuantity = purchaseState.quantity + product.discountUnit;
        }

        const totalPrice = props.calculateTotalPerItem(newQuantity, product);
        setPurchaseState({ quantity: newQuantity, total: totalPrice, warningText: false});
    }

    const removeQuantityHandler = (event) => {
        event.preventDefault();
        const currentQuantity = purchaseState.quantity;
        var newQuantity = 0;
        var totalPrice = 0;
        if (currentQuantity > 0){
            if (product.unitPrice) {
                newQuantity = currentQuantity - 1;
            }else{
                newQuantity = currentQuantity - product.discountUnit;
            }
            totalPrice = props.calculateTotalPerItem(newQuantity, product);
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
            <>
            {/* <Grid item xs={6} sm={4} md={3} lg={2} align="center"> */}
                <Card className="product">
                        {/* <CardMedia
                            component="img"
                            alt=""
                            height="190"
                            image={productImg}
                            title="item"
                            draggable={false} /> */}
                        <LazyLoad height={180} offsetVertical={500} className="productImageLazy" throttle={250} >
                            <FadeIn>
                            <img src={productImg} alt="img" placeholder={<p>Loading</p>} className="productImage" height="190" draggable={false} />
                            </FadeIn>
                        </LazyLoad>
                                
                    <CardContent >
                        <Typography gutterBottom variant="body1" component="h2" align="left" className="product__name">
                                <strong>{product.productName}</strong>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="span" className="product__descriptionSpan">
                                {product.productDescription}
                        </Typography>
                        {
                            product.category === "promo" ?
                            <>
                                <Typography variant="subtitle1" color="textPrimary" component="span" className="product__priceSpan">
                                    <s>
                                        <small>$</small> 
                                        <span className="productPrice">{product.originalPrice}</span> 
                                        <small>/{product.unit}</small>
                                    </s>
                                </Typography>
                                <Typography variant="subtitle1" color="textPrimary" component="span" className="product__priceSpan">
                                    <Chip className="product__chipStyle" label="特价" size="small" />
                                    <small>$</small> 
                                    <span className="productPrice">{product.unitPrice}</span> 
                                    <small>/{product.unit}</small>
                                </Typography>
                             </>
                            :
                                product.unitPrice ? 
                                <Typography variant="subtitle1" color="textPrimary" component="span" className="product__priceSpan">
                                    <small>$</small> 
                                    <span className="productPrice">{product.unitPrice}</span> 
                                    <small>/{product.unit}</small>
                                </Typography> 
                                :null
                        }
                        { product.discountUnit ? (
                            <Typography variant="subtitle1" color="textPrimary" component="span" className="product__priceSpan">
                                {/* <Chip className="product__chipStyle" label="批发价" size="small" />  */}
                                    <span className="productPrice red"><strong>{product.discountUnit+product.unit}</strong></span>
                                    <span className="productPrice"><small> &nbsp; $</small> {product.discountPrice}</span>
                                    <span className="productPrice"><small>({Math.round(product.discountPrice/product.discountUnit)}/{product.unit})</small></span>
                            </Typography>) : null }
                        { product.discountUnit2 ? (
                            <Typography variant="subtitle1" color="textPrimary" component="span" className="product__priceSpan">
                                {/* <Chip className="product__chipStyle" label="批发价" size="small" />  */}
                                    <span className="productPrice red"><strong>{product.discountUnit2+product.unit}</strong></span>
                                    <span className="productPrice"><small>&nbsp;$</small> {product.discountPrice2}</span>
                                    <span className="productPrice"><small>({Math.round(product.discountPrice2/product.discountUnit2)}/{product.unit})</small></span>
                            </Typography>) : null }
                            { product.discountUnit3 ? (
                            <Typography variant="subtitle1" color="textPrimary" component="span" className="product__priceSpan">
                                {/* <Chip className="product__chipStyle" label="批发价" size="small" />  */}
                                    <span className="productPrice red"><strong>{product.discountUnit3+product.unit}</strong></span>
                                    <span className="productPrice"><small>&nbsp;$</small> {product.discountPrice3}</span>
                                    <span className="productPrice"><small>({Math.round(product.discountPrice3/product.discountUnit3)}/{product.unit})</small></span>
                            </Typography>) : null }
                        <Button className="product__addButton" variant="contained" startIcon={<AddShoppingCartIcon />} onClick={showModal}>
                            加至購物車
                        </Button>
                    </CardContent>
            </Card>
            <Modal show={showModalState.show} handleClose={hideModalWithConfirm} className="ReactModal__Overlay">
                <img className="product__modalImg" src={productImg} alt="prdImg"/>
                <div className="product__modalDescription">
                    <p>{product.productName}</p>
                    <p>{product.productDescription}</p>
                    {
                        product.unitPrice ? 
                            <><small>P$ </small><span>{product.unitPrice}</span><small> / {product.unit}</small></> : null
                    }
                    { product.discountUnit ? 
                        <><br/><small>P$ </small><span>{product.discountPrice}</span><small> / {product.discountUnit}{product.unit}</small></> : null
                    }
                    { product.discountUnit2 ? 
                         <><br/><small>P$ </small><span>{product.discountPrice2}</span><small> / {product.discountUnit2}{product.unit}</small></> : null
                    }
                    { product.discountUnit3 ? 
                         <><br/><small>P$ </small><span>{product.discountPrice3}</span><small> / {product.discountUnit3}{product.unit}</small></> : null
                    }
                    <div className="product__modalCounter">
                         <Fab 
                            color="default" 
                            aria-label="remove" 
                            size="small" 
                            style={{margin:'auto 10px'}}
                            onClick={removeQuantityHandler} >
                                <RemoveIcon />
                        </Fab>
                        <span>{purchaseState.quantity}{product.unit}</span>
                        <Fab 
                            color="default" 
                            aria-label="add" 
                            size="small" 
                            style={{margin:'auto 10px'}}
                            onClick={addQuantityHandler}>
                                <AddIcon />
                        </Fab>
                    </div>
                    <span>總計 ${Math.round(purchaseState.total)}</span>
                    <br/><br/>
                    { product.id === 122 ? 
                            <>
                                {/* product election logic */}
                                <span>請在購物車備註欄寫上您要的組合, 共60包/箱</span><br/>
                                <span>組合可以包含:</span><br/>
                                <span>菠菜細新竹米粉 200g</span><br/>
                                <span>菠菜粗新竹米粉 200g</span><br/>
                                <span>紅椒細新竹米粉 200g</span><br/>
                                <span>紅椒粗新竹米粉 200g</span><br/>
                                <span>紅蘿蔔細新竹米粉 200g</span><br/>
                                <span>紅蘿蔔粗新竹米粉 200g</span><br/>
                            </> : null}
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
        {/* </Grid> */}
        </>
    )
}

export default Product
