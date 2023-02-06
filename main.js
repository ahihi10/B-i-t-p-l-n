const { response, json } = require("express");

function start(){
    getResultAll1()
    getResultAll2()
    getResultAll3()
}
start();

let reset1;
let reset2;
let reset3;
// function getResultAll1(){
//     fetch(`http://localhost:5000/renderall1`)
//     .then(data=>{
//         rendercustomers(data);
//         reset1=data;
//     })
// }
// function getResultAll2(){
//     fetch(`http://localhost:5000/renderall2`)
//     .then(data=>{
//         renderfilm(data);
//         reset2=data;
//     })
// }
// function getResultAll3(){
//     fetch(`http://localhost:5000/renderall3`)
//     .then(data=>{
//         rendercommic(data);
//         reset3=data;
//     })
// }

function resetTable1(){
    fetch(`http://localhost:5000/renderall1`)
    .then(response=>response.json())
    .then(result1=>{
        alert('da cap nhat');
        rendercustomers(result1);
    })
}
function resetTable2(){
    fetch(`http://localhost:5000/renderall2`)
    .then(response=>response.json())
    .then(result2=>{
        alert('da cap nhat');
        renderfilm(result2);
    })
}
function resetTable3(){
    fetch(`http://localhost:5000/renderall3`)
    .then(response=>response.json())
    .then(result3=>{
        alert('da cap nhat');
        rendercommic(result3);
    })
}
function inra(){
    table=`<tr style='background-color:rgb(255,192,203)'>
    <th>ID</th>
    <th>Họ tên</th>
    <th>Số điện thoại</th>
    <th>ID phim truyện đã thuê</th>
    <th>Thời gian thuê</th>
    <th>Số tiền cược</th>
    <th>Tổng tiền</th>
</tr>`
    fetch(`http://localhost:5000/renderall1`)
        .then(response=> response.json())
        .then(result1=>{
            if(result1.length==0){
                alert('khong tim duoc')
            }
            for(let i=0; i<result1.length; i++){
                table+=`<tr>
                <td>${result1[i].customersid}</td>
                <td>${result1[i].name}</td>
                <td>${result1[i].tel}</td>
                <td>${result1[i].id_film}</td>
                <td>${result1[i].Rental_period}</td>
                <td>${result1[i].money_bet}</td>
                <td>${result1[i].total_money}</td>
                <td>
                    <button onclick='delete2(${result1[i].customersid})'>Delete</button>
                    <button onclick='edit2(${result1[i].customersid})'>Edit</button>
                </td>
                </tr>`
            }
            document.getElementById('table1').innerHTML=table
        })
    };



    function inra1(){
        table1=`<tr style='background-color:rgb(255,192,203)'>
        <th>ID</th>
        <th>Tên phim</th>
        <th>Đạo diễn </th>
        <th>Năm xuất bản</th>
        <th>Thể loại</th>
        <th>Giá thuê theo ngày</th>
        <th>Thời gian</th>
        <th>Dung lượng</th>
        <th>Độ phân giải</th>
    </tr>`
        fetch(`http://localhost:5000/renderall2`)
            .then(response=> response.json())
            .then(result2=>{
                if(result2.length==0){
                    alert('khong tim duoc')
                }
                for(let i=0; i<result2.length; i++){
                    table1+=`<tr>
                    <td>${result2[i].filmid}</td>
                    <td>${result2[i].name_film}</td>
                    <td>${result2[i].directors}</td>
                    <td>${result2[i].publishyear}</td>
                    <td>${result2[i].category}</td>
                    <td>${result2[i].rentbyday}</td>
                    <td>${result2[i].time}</td>
                    <td>${result2[i].capacity}</td>
                    <td>${result2[i].resolution}</td>
                    <td>
                    <button onclick='delete3(${result2[i].filmid})'>Delete</button>
                    <button onclick='edit3(${result2[i].filmid})'>Edit</button>
                    </td>
                    </tr>`
                }
                document.getElementById('table2').innerHTML=table1
            })
        }





        function inra3(){
            table2=`<tr style='background-color:rgb(255,192,203)'>
            <th>ID</th>
        <th>Tên truyện</th>
        <th>Tác giả </th>
        <th>Năm xuất bản</th>
        <th>Thể loại</th>
        <th>Giá thuê theo ngày</th>
        <th>Số trang</th>
        <th>Khổ giấy </th>
        <th>Ngôn ngữ</th>
        </tr>`
            fetch(`http://localhost:5000/renderall3`)
                .then(response=> response.json())
                .then(result3=>{
                    if(result3.length==0){
                        alert('khong tim duoc')
                    }
                    for(let i=0; i<result3.length; i++){
                        table2+=`<tr>
                        <td>${result3[i].commicid}</td>
                        <td>${result3[i].name_commic}</td>
                        <td>${result3[i].author}</td>
                        <td>${result3[i].publishyear2}</td>
                        <td>${result3[i].type}</td>
                        <td>${result3[i].rent_day}</td>
                        <td>${result3[i].pages}</td>
                        <td>${result3[i].paper_size}</td>
                        <td>${result3[i].language}</td>
                        <td>
                        <button onclick='delete4(${result3[i].commicid})'>Delete</button>
                        <button onclick='edit4(${result3[i].commicid})'>Edit</button>
                        </td>
                        </tr>`
                    }
                    document.getElementById('table3').innerHTML=table2
                })
            }



function add1(){
    let item_customersid=document.getElementById('customersid').value;
    let item_name=document.getElementById('name').value;
    let item_tel=document.getElementById('tel').value;
    let item_id_film=document.getElementById('id_film').value;
    let item_Rental_period=document.getElementById('Rental_period').value;
    let item_money_bet=document.getElementById('money_bet').value;
    let item_total_money=document.getElementById('total_money').value;
    let item={
        customersid:item_customersid,
        name: item_name,
        tel: item_tel,
        id_film:item_id_film,
        Rental_period:item_Rental_period,
        money_bet:item_money_bet,
        total_money:item_total_money

    }
    let index=customers.findIndex((c)=>c.id==item.customersid);
    if(index>=0){
        customers.splice(index,1,item)
    }else{
        customers.push(item);
    }
    console.log(customers);
    renderall();
}
add1();



function delete2(customersid1){
    let delid=customersid1;
    fetch(`http://localhost:5000/delete/${customersid1}`)
    .then(response=> response.json())
    .then(result1=>{
        alert('đã xóa');
        console.log(result1);
        renderSearch();
        resetTable1();
    })
}
delete2();


function delete3(filmid2){
    let delid1=filmid2;
    fetch(`http://localhost:5000/delete1/${filmid2}`)
    .then(response=> response.json())
    .then(result2=>{
        alert('đã xóa');
        console.log(result2);
        renderSearch();
        resetTable2();
    })
}
delete3();

function delete4(commicid3){
    let delid2=commicid3;
    fetch(`http://localhost:5000/delete2/${commicid3}`)
    .then(response=> response.json())
    .then(result3=>{
        alert('đã xóa');
        console.log(result3);
        renderSearch();
        resetTable3();
    })
}
delete4();

function edit1(a1,a2,a3,a4,a5,a6,a7){
    for(let i=0; i<customers.length;i++){
        if(customers[i].customersid=a1,customers[i].name=a2,customers[i].tel=a3,customers[i].id_film=a4,customers[i].Rental_period=a5,customers[i].money_bet=a6,customers[i].total_money=a7 ){
            document.getElementById('customersid').value=a1;
            document.getElementById('name').value=a2;
            document.getElementById('tel').value=a3;
            document.getElementById('id_film').value=a4;
            document.getElementById('Rental_period').value=a5;
            document.getElementById('money_bet').value=a6;
            document.getElementById('total_money').value=a7;
        }
    }
}

function edit2(y2){
    for(let i=0; i<film.length;i++){
        if(film[i].filmid==y2){
            document.getElementById('filmid').value=film[i].filmid;
            document.getElementById('name_film').value=film[i].name_film;
            document.getElementById('directors').value=film[i].directors;
            document.getElementById('publishyear').value=film[i].publishyear;
            document.getElementById('category').value=film[i].category;
            document.getElementById('rentbyday').value=film[i].rentbyday;
            document.getElementById('time').value=film[i].time;
            document.getElementById('capacity').value=film[i].capacity;
            document.getElementById('resolution').value=film[i].resolution;
        }
    }
}

function edit3(y3){
    for(let i=0; i<commic.length;i++){
        if(commic[i].commicid==y3){
            document.getElementById('commicid').value=commic[i].commicid;
            document.getElementById('name_commic').value=commic[i].name_commic;
            document.getElementById('author').value=commic[i].author;
            document.getElementById('publishyear2').value=commic[i].publishyear2;
            document.getElementById('type').value=commic[i].type;
            document.getElementById('rent_day').value=commic[i].rent_day;
            document.getElementById('pages').value=commic[i].pages;
            document.getElementById('paper_size').value=commic[i].paper_size;
            document.getElementById('language').value=commic[i].language;
        }
    }
}