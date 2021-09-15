import { Dialog } from "vant";
import loading from '../../utils/loading/loading'

export default function showDeleteDialog() {

    Dialog.confirm({
        title: "确定要删除吗 ？",
        theme: "round-button",
        confirmButtonText: "删除",
        cancelButtonText: "取消",
    })
        // click confirm
        .then(() => {
            console.log("删除");
            loading()
        })
        // click cancel
        .catch(() => {
            return;
        });
}