export default function formatCurrency(num) {
    return Number(num.toFixed(1)).toLocaleString() + ".000 Đ";
}
  