const getcolor = () => {

    // hexa code
    // 16777215 for hexadecimal no
    // 16 for hexadeicmal code
    const randomNumber =Math.floor (Math.random() * 16777215)
   const randomCode="#" + randomNumber.toString(16);
   document.body.style.backgroundColor=randomCode
   document.getElementById("color-code").innerText=randomCode;

   //coping on clip board
   navigator.clipboard.writeText(randomCode);
  
}
// event call
document.getElementById("btn").addEventListener(
    "click", getcolor
)
// init call
getcolor();