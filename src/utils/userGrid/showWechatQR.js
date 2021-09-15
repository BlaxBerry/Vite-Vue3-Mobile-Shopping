import { Toast } from "vant";
import wechatQR from '../../assets/images/wechatQR.png'


export default function blockMsg() {
    Toast({
        icon: wechatQR,
        iconSize: '2.3rem',
        overlay: true
    });
}