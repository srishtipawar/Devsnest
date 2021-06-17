var row = '<tr>';
for(i=0;i<30;i++){
    row+='<td></td>';
}
row+='</tr>';
var content='';
for(i=0;i<20;i++){
    content+=row;
}

document.getElementById('tab').innerHTML = content;
let buttons = document.querySelectorAll('td');

buttons.forEach(cell=>{
    cell.addEventListener('click',e=>{
        cell.classList.toggle("white");
    });
});