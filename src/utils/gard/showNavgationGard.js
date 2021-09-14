import { Dialog } from 'vant'


export default function GardNavagation(router) {

    Dialog.confirm({
        title: 'Please Login',
        message: '请先登后才能访问',
        theme: 'round-button',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
    })
        // click confirm
        .then(() => {
            // go to login route
            router.push('/user')
        })
        // click cancel
        .catch(() => {
            return
        });

}