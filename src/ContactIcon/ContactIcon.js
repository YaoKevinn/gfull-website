import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import './ContactIcon.css'


function ContactIcon() {

    return (
        <div className="contactIcon">
            <IconButton className="iconButton" aria-label="Go to Whatsapp" onClick={()=>window.open('https://wa.me/5491125250888')}>
                <WhatsAppIcon className="iconWhatsapp" />
            </IconButton>
            <IconButton className="iconButton" aria-label="Go to Mail" href="#contactForm">
                <MailOutlineIcon className="iconMail" />
            </IconButton>
            <IconButton className="iconButton" aria-label="Go to Facebook" onClick={()=>window.open('https://www.facebook.com/profile.php?id=100011154066762')}>
                <FacebookIcon className="iconFacebook" />     
            </IconButton>
            <IconButton className="iconButton" aria-label="Go to Phone" href="#contactForm" >
                <PhoneIcon className="iconPhone" />     
            </IconButton>
        </div>
    )
}

export default ContactIcon
