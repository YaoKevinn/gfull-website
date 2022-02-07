import React, { useState } from 'react'
import Modal from '../Product/Modal'
import './Footer.css'

function Footer() {

    const [ showVacationModal, setShowVacationModal ] = useState(true);

    // const getVacationAlert = () => {
    //     return {
    //        __html: `
    //         尊敬的客户：
    //         <br><br>
    //         您好！圣诞新年双节即将到来， 禾富食品公司全体员工提前恭祝广大客户，圣诞&新年快乐、生意兴隆、万事如意！非常感谢您长期以来对我们工作的支持与理解。以防您缺货，请您错开假期，提前备货安排，根据我公司工作实际情况， 
    //         <br><br>
    //         <b style="color: green">双节放假安排如下：双节放假时间为：
    //         <br>
    //         2021年12月24日 到 2022年01月09日</b>
    //         <br><br>
    //         在放假期间给您造成的不便之处，敬请谅解。放假期间禾富网站/禾富WHATSAPP /禾富微信 均為您开通订货.  
    //         放假期间所有接收的订购单均于 2022年 01月 10日 安排配送
    //         再次感谢您对我们工作的支持。
    //         <br><br>     
    //         禾富公司全體工作人員恭祝各位
    //         新春快乐，万事如意!
    //         <br><br>
    //        `
    //     };
    //  }; 

    // const closeModal = () => {
    //     setShowVacationModal(false);
    // }
    

    return (
        <div className="footer">
            {/* <Modal 
                style={{borderRadius: 20}} 
                show={showVacationModal}
                handleClose={closeModal}
                className="ReactModal__Overlay"
            >
                <p className="alert-text" dangerouslySetInnerHTML={getVacationAlert()}></p>
                <button className="confirm-btn" onClick={closeModal}>确定</button>
            </Modal>  */}
            <p>禾富 版權所有 © 2020 GFull S.A. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
