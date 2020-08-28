import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import './ContactForm.css'


class ContactFrom extends Component {

    constructor(props){
        super(props);
        this.state = {
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
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "template_Svo0YaZ5",
                "contactForm__form",
                "user_iKgHAL704pABw8EMZ4EHh"
            )
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
        alert('您的訊息已寄出, 我們將盡快以郵件方式回復您');
        this.setState({
            name:"",
            address:"",
            phone:"",
            email:"",
            subject:""
        });
    }
    render(){
        return (
            <div className="contactForm" id="contactForm"> 
                <form id="contactForm__form" className="contactForm__form" onSubmit={this.handleSubmit.bind(this)} >
                    <p className="contactForm__formP">聯絡我們</p>
                    <br/>
                    <div className="contactForm__contactList" style={{textDecoration:'none'}}>
                        <WhatsAppIcon onClick={()=>window.open('https://wa.me/5491125250888')} style={{color:'#27c34b',cursor:'pointer'}}/>
                        <p> +54 9 11 2525 0888</p>
                    </div>
                    <div className="contactForm__contactList" style={{textDecoration:'none'}}>
                        <FacebookIcon onClick={()=>window.open('https://www.facebook.com/profile.php?id=100011154066762')} style={{color:'#0e8bf1', cursor:'pointer'}}/>
                        <p> GFull SA</p>
                    </div>
                    <div className="contactForm__contactList">
                        <MailOutlineIcon color="error"/>
                        <p>info@gfullsa.com</p>
                    </div>
                    <div className="contactForm__contactList">
                        <PhoneIcon color="primary"/>
                        <p> +54 9 11 2525 0888</p>
                    </div>
                    <br/>
                    <TextField 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="contactForm__formInput" 
                        label="姓名" 
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    <TextField 
                        type="text" 
                        id="address"
                        name="address" 
                        className="contactForm__formInput" 
                        label="住址" 
                        value={this.state.address}
                        onChange={this.handleChange.bind(this)}
                    />
                    <TextField 
                        type="text" 
                        id="phone"
                        name="phone" 
                        className="contactForm__formInput" 
                        label="聯絡電話" 
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    <TextField 
                        type="email" 
                        id="email"
                        name="email" 
                        className="contactForm__formInput" 
                        label="電子郵件" 
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    <br/>
                    <TextField
                        type="text"
                        id="subject"
                        name="subject"
                        className="contactForm__formInput"
                        placeholder="寫下您的任何疑問..."
                        value={this.state.subject}
                        onChange={this.handleChange.bind(this)}
                        multiline
                        rows={5}
                        rowsMax={20}
                        variant="outlined"
                        required
                        />
                    <p style={{color:'gray'}}> (*)必填項目</p>
                    <br/>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="contactForm__button"
                        startIcon={<SendIcon />}
                    >
                        確認內容並寄送
                    </Button>
                </form>
            </div>
        )
    }
}

export default ContactFrom
