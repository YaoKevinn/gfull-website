import React, { Component } from 'react'
import './Header.css'
import logoImg from '../images/logo.png'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import * as emailjs from 'emailjs-com';
import MultiSelectTreeView from '../MultiSelectTreeView/MultiSelectTreeView';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            cartDrawerOpen: false,
            categoryDrawerOpen: false,
            searchBarText: "",
            name:"",
            address:"",
            phone:"",
            email:"",
            subject:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("確認送出訂單? ")){
            emailjs
            .sendForm(
                "gmail",
                "email_order_list_template",
                "drawer__orderListForm",
                "user_iKgHAL704pABw8EMZ4EHh"
            )
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
        alert('郵件已寄出, 我們將盡快回復您');

        this.props.shoppingCartClearHandler();

        this.setState({
            name:"",
            address:"",
            phone:"",
            email:"",
            subject:""
        });
        console.log("email sent");
        }
    }
    
    getAllProductsAsAString = () => {
        var productString = '';
        const cartList = [...this.props.productList];
        if (cartList.length !== 0){
            for (const item of cartList) {
                //falta cambio
                productString = productString + item.productName + ' x ' + item.cant + item.unit + '  $' + item.total + '<br />';
            }
            productString = productString + '<br/><br/>總計: $' + String(this.getTotalPriceInCart());
        }
        return productString;
    }

    toggleCartDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        this.setState({cartDrawerOpen: open });
    };

    toggleCategoryDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        this.setState({categoryDrawerOpen: open });
    };

    getTotalPriceInCart = ()=> {
        var totalPrice = 0;
        const cartList = [...this.props.productList];
        if (cartList.length !== 0){
            for (const item of cartList) {
                totalPrice = totalPrice + item.total
            }
        }else{
            return 0;
        }
        return totalPrice;
    }

    handleCategoryClick = (categoryName) => {
        this.props.categoryHandler(categoryName);
        this.setState({categoryDrawerOpen: false });
        document.getElementById('scroll').scrollIntoView();
    }
    
    searchIconClicked = () => {
        const text = document.getElementById('headerSearchInput').value;
        this.setState({searchBarText: text});
        this.props.searchIconClickedHandler(null, text);
        this.setState({categoryDrawerOpen: false });
    }

    cartList = () => (
        <div
          role="presentation"
          onClick={()=>this.toggleCartDrawer(false)}
          className="overflow-scroll"
        >
          <List className="header__drawer">
            <ListItem alignItems="center"><ShoppingCartIcon /><span className="cartList__title">購物車</span></ListItem>
            <Divider />
            {this.props.productList.length !== 0 ?
                this.props.productList.map((item) => (
                <ListItem alignItems="flex-start" key={item.id}>
                    <div className="cartList__itemSection">
                        <ListItemText
                            primary={
                                <React.Fragment>
                                     <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                    >
                                    {item.productName+' - '+item.productDescription+' x '+item.cant+item.unit}
                                    </Typography>
                                </React.Fragment>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    component="span"
                                    variant="h6"
                                    color="textPrimary"
                                    >
                                    <strong>${Math.round(item.total)}</strong>
                                    </Typography>
                                </React.Fragment>}/>
                        <IconButton className="cartList__removeBtn" aria-label="delete" onClick={()=>this.props.productRemoveHandler(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </ListItem>
            )): <ListItem alignItems="center">
                    <span className="cartList__emptyText">**尚未添加任何產品至購物車**</span>
                </ListItem> }
            </List>
          <Divider />
                <ListItem className="cartList__totalPriceSection" alignItems="flex-start">
                        <span>總計:</span>
                        <span className="cartList__totalPrice">ARS ${Math.round(this.getTotalPriceInCart())}</span>
                </ListItem>
          <Divider />
          <List alignitems="center">
                <form id="drawer__orderListForm" onSubmit={ this.props.productList.length !== 0 ? this.handleSubmit.bind(this) : ()=>alert("很抱歉, 購物車裡沒有商品, 輸入產品數量後請記得點選確認數量來加進購物車, 感謝!")} >
                    <input 
                        type="hidden" 
                        id="products" 
                        name="products"
                        value={this.getAllProductsAsAString()} 
                    />
                    <label className="drawer__orderListTitle">** 請輸入送貨細節及聯絡方式 **</label>
                    <label className="drawer__warningText">如购买<span style={{fontWeight:'bold'}}>“代购”</span>系列商品，将以店家实际架上价格为主。若有价差我们会及时与您联系。</label>
                    <TextField 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="drawer__formInput" 
                            label="收貨人" 
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <TextField 
                            type="text" 
                            id="address"
                            name="address" 
                            className="drawer__formInput" 
                            label="送貨地址" 
                            value={this.state.address}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <TextField 
                            type="text" 
                            id="phone"
                            name="phone" 
                            className="drawer__formInput" 
                            label="聯絡電話" 
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <TextField 
                            type="email" 
                            id="email"
                            name="email" 
                            className="drawer__formInput" 
                            label="電子郵件" 
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                        />
                        <br/>
                        <TextField
                            type="text"
                            id="subject"
                            name="subject"
                            className="drawer__formInput"
                            placeholder="備註..."
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this)}
                            multiline
                            rows={5}
                            rowsMax={20}
                            variant="outlined"
                            />
                        <p style={{color:'gray'}}> (*)必填項目</p>
                        <br/>
                        <label className="drawer__warningText" style={{color:'gray', fontWeight:'bold'}}>订单确认送出后，将会有专员与您联系安排送货时间，货到付款。感谢您的订购！</label>
                        <br/>
                        <Button
                            // type="submit"
                            onClick={ () => alert('订单已寄出！ Pedido Enviado!') }
                            variant="contained"
                            color="primary"
                            className="drawer__OrderListConfirmBtn"
                        >
                            確認內容並寄送
                        </Button>
                </form>
          </List>
          <Divider />
          <List alignitems="center">
              <ListItem className="cartList__continueBtn" button key={'繼續新增更多商品'} onClick={this.toggleCartDrawer(false)} >
                    <ListItemText primary={'繼續新增更多商品'} align="center" />
              </ListItem>
          </List>
        </div>
    );

    categoryList = () => (
        <div
            role="presentation"
            onClick={()=>this.toggleCategoryDrawer(false)}
            className="overflow-scroll">
        <List className="header__drawer">
            <ListItem>
                <ListItemText primary="商品分類" style={{textAlign:'center'}} />
            </ListItem>
            <Divider />
            <MultiSelectTreeView category={this.props.category} categoryHandler={this.handleCategoryClick} />
        </List>
        
      </div>
    )

    render(){
        return (
            <nav className="header">
                <Grid container spacign={0} align="center">
                    {/* logo on the left -> img */}
                    <Grid item xs={12} sm={12} md={3} align="center" className="header__logoSection">
                        <Link to="/">
                            <img 
                                className="header__logo" 
                                src={logoImg}
                                alt="amazon-icon"
                            />
                        </Link>
                    </Grid>
                    <Grid item xs={4} sm={4} md={1} className="header__category">
                        <Button onClick={this.toggleCategoryDrawer(true)}>
                                     <MenuIcon className="header__shoppingCartIcon" fontSize="large"/>
                                     <span style={{color:'green'}}>Menu</span>
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4} md={7} >
                        <div className="header__container" >
                                <Button className="header__navItem" href="#contactForm" >联络我们</Button>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={4}  md={1} align="center">
                        <Button className="header__shoppingCart">
                                 <Badge badgeContent={this.props.items} color="error">
                                     <ShoppingCartIcon className="header__shoppingCartIcon" fontSize="large" onClick={this.toggleCartDrawer(true)}/>
                                </Badge>
                        </Button>
                    </Grid>
                </Grid>
                <React.Fragment key={'right'}>
                    <Drawer anchor={'right'} open={this.state.cartDrawerOpen} onClose={this.toggleCartDrawer(false)}>
                        {this.cartList()}
                    </Drawer>
                </React.Fragment>
                <React.Fragment key={'left'}>
                    <Drawer anchor={'left'} open={this.state.categoryDrawerOpen} onClose={this.toggleCategoryDrawer(false)}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                             <input id="headerSearchInput" className="app__searchBar" type="text" placeholder="查询您要的产品" />
                             <IconButton style={{color:'green'}} component="span" onClick={this.searchIconClicked}>
                                <SearchIcon fontSize="large" />
                             </IconButton>
                         </div>
                        <Divider />
                        {this.categoryList()}
                    </Drawer>
                </React.Fragment>
            </nav>
        )
    }
}

export default Header
