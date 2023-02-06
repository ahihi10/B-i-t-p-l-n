const { response } = require("express");

let x;
getResultAll();
function getResultAll(){
    fetch(`http://localhost:5000/renderall`)
    .then (response=> response.json())
    .then(data => {
        alert('đã cập nhật');
        x=data;
        console.log(data);
        renderemployee(data);

    })
    .catch(alert('error'));
}
console.log(x);