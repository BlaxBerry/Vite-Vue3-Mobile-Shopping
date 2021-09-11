import { computed } from "vue";

export default function filtePrice(price) {

    let pricefilted = computed(() => {
        return "¥ " + price.toFixed(2) + " 元";
    });

    return pricefilted
}