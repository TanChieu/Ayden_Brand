import React from "react";
import Image from "next/image";
import footerStyles from "../css/FooterMobile.module.css";
{/* npm install react-icons | https://www.npmjs.com/package/react-icons*/ }
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.Logo}>
                <div id={footerStyles.logo1}><Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" />
                </div>
            </div>
            <div className={footerStyles.group}>
                <div className={footerStyles.groupChild}>
                    <p id={footerStyles.text1}>Theo dõi tại<br /><br /></p>
                    <div className={footerStyles.GroupIcons}>
                        <a href="https://www.facebook.com/?locale=vi_VN" id={footerStyles.icons}><FaFacebook size={20} color="#c0c0c0" /></a>
                        <a href="https://www.tiktok.com/vi-VN/" id={footerStyles.icons}><FaTiktok size={20} color="#c0c0c0" /></a>
                        <a href="https://www.youtube.com/" id={footerStyles.icons}><FaYoutube size={20} color="#c0c0c0" /></a>
                    </div>
                </div>
                <div className={footerStyles.groupInfo}>
                    <p id={footerStyles.text2}>Liên hệ và hỗ trợ<br /></p>
                    <div className={footerStyles.information}>
                        <a id={footerStyles.info}>0846708753 <br /> 0944094603 <br /> 0392155116</a>
                        <a id={footerStyles.info}>Nguyễn Tấn Chiêu<br /> Huỳnh Trung Tín <br />Phạm Nhật Duy</a>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
export default Footer;
