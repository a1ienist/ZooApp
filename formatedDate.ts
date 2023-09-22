const now = new Date();
const year: number = now.getFullYear();
const month: string = String(now.getMonth() + 1).padStart(2, '0'); 
const day: string = String(now.getDate()).padStart(2, '0');
const hours: string = String(now.getHours()).padStart(2, '0');
const minutes: string = String(now.getMinutes()).padStart(2, '0');
    
const formattedDateTime: string = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDateTime);

export { formattedDateTime };
