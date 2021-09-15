import { Dialog, Toast } from "vant";

export default function showSubmitDialog() {
    Dialog.confirm({
        title: "确定提交购买订单 ？",
        message:'该项目是架空APP，并不会真正购买。\n只是走流程而已，放心吧^_^',
        theme: "round-button",
        confirmButtonText: "提交",
        cancelButtonText: "取消",
    })
        // click confirm
        .then(() => {
            Toast.loading({
                message: '提交中',
                forbidClick: true,
                loadingType: 'spinner',
                iconSize: '1.5rem'
            });
        })
        // click cancel
        .catch(() => {
            return
        });
}