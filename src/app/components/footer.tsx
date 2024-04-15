import React from "react";
import Image from "next/image";
import footerStyles from "../css/footer.module.css";
import Link from "next/link";
{/* npm install react-icons | https://www.npmjs.com/package/react-icons*/ }
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.group1}>
                <div className={footerStyles.group_child1}>
                    <div id={footerStyles.logo1}><Link className={footerStyles.linkText} href="/admin/Main"><Image src="/FashionNews/logo.svg" width={182} height={38} alt="Logo" /></Link><br />
                        Trang thông tin đăng tải hỗ trợ cho các thương hiệu thời trang tại Việt Nam. Mọi thông tin yêu cầu hỗ trợ xin liên hệ về cho bộ phận hỗ trợ nguyentanchieu2002@gmail.com.
                    </div><br />
                    <div className={footerStyles.lableText}>
                        <a id={footerStyles.lable}>CÔNG TY TNHH AYDEN TECHCO</a><br />
                        <a id={footerStyles.dateText}>Cấp ngày 21/04/2024</a></div>
                </div>
            </div>
            <div className={footerStyles.group2}>
                <div className={footerStyles.containerGroup2}>
                    <div className={footerStyles.containerInfor}>
                        <p id={footerStyles.text2}>Cho khách hàng</p>
                        <Link className={footerStyles.linkText} href="/Policy">Chính sách và quy định</Link><br /><br />
                        <Link className={footerStyles.linkText} href="/Introduce">Giới thiệu về AydenBrands</Link>
                        <p style={{ color: '#C0BAB2', fontWeight: 'bold' }}>Liên hệ và hỗ trợ thông qua</p>
                        <div className={footerStyles.infoText} ><a style={{ fontWeight: 'bold' }}>Điện thoại: </a> <a>0846708753</a></div><br />
                        <div className={footerStyles.infoText} ><a style={{ fontWeight: 'bold' }}>Email: </a> <a>nguyentanchieu2002@gmail.com</a></div>

                    </div>
                    <div className={footerStyles.group_child2}>
                        <p id={footerStyles.text1}>Theo dõi tại<br /></p>
                        <div className={footerStyles.GroupIcons}>
                            <a href="https://www.facebook.com/?locale=vi_VN" id={footerStyles.icons}><FaFacebook size={25} color="#c0c0c0" /></a>
                            <a href="https://www.tiktok.com/vi-VN/" id={footerStyles.icons}><FaTiktok size={25} color="#c0c0c0" /></a>
                            <a href="https://www.youtube.com/" id={footerStyles.icons}><FaYoutube size={25} color="#c0c0c0" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
