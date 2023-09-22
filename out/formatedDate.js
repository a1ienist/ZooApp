const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // +1, так как месяцы начинаются с 0
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDateTime);
export { formattedDateTime };
