var input=prompt('กรอกข้อความ');
var count=prompt('จำนวนรอบ');
for(var i=1;i<=10;i++){
    document.write('จำนวนรอบ'+i+'ข้อความ'+input+'<br>');
}
var username ='admin';
var input=prompt('บอกชื่อมา');
if(username==='admin'){
    document.write('<p>คุณคือ admin</p>');
}else{
    document.write('<p>คุณไม่ใช่ admin</p>');
}
function myButton() {
    document.getElementById("demo").innerHTML = "True";
}
