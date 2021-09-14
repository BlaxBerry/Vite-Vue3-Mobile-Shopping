import { Toast } from 'vant';

// show toast before the data rendered
export default function loading() {
    Toast.loading({
        message: "Loading...",
        forbidClick: true,
        loadingType: 'spinner',
        iconSize: '1.5rem',
        duration: 1000
    });
}