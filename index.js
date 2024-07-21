async function gen(){

if(document.getElementById('text').value === "" ){
    alert("Enter something")
}
else{
    const a = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${document.getElementById('text').value }`

    document.getElementById('img').src = a;
}
}