const cors=require('cors');
const express=require('express');
const app=express();

const port=5000;
let mysql=require('mysql2');
let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'test'
})
app.set('view engine', 'ejs');
app.use(cors());
app.options('*', cors());

function query(sql){
    const res=new Promise((res,rej)=>{
        connection.query(sql,(err, result)=>{
            if(err) rej('Loi truy van');
            res(result);
        })
    })
    return res;
}

app.get(`/renderall1`, (req,res)=>{
    const result=query(`select * from customers`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})



app.get(`/renderall2`, (req,res)=>{
    const result=query(`select * from film`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/renderall3`, (req,res)=>{
    const result=query(`select * from commic`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/timtheoten/:name_film`, (req,res)=>{
    const name_film2=req.params.name_film;
    const result=query(`SELECT * FROM film WHERE name_film="${name_film2}";`);
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/timtheoten1/:name_commic`, (req,res)=>{
    const name_commic3=req.params.name;
    const result=query(`SELECT * FROM commic WHERE name_commic="${name_commic3}";`);
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/timtheoauthor/:author`, (req,res)=>{
    const author3=req.params.author;
    const result=query(`SELECT * FROM commic WHERE author="${author3}";`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/timtheodirectors/:directors`, (req,res)=>{
    const directors2=req.params.directors;
    const result=query(`SELECT * FROM film WHERE directors="${directors2}";`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
    
})

app.get(`/timtheotype/:type`, (req,res)=>{
    const type3=req.params.type;
    const result=query(`SELECT * FROM commic WHERE type="${type3}";`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/timtheocategory/:category`, (req,res)=>{
    const category2=req.params.category;
    const result=query(`SELECT * FROM film WHERE category="${category2}";`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/delete/:customersid`, (req,res)=>{
    const customersid1=req.params.customersid;
    const result=query(`DELETE FROM customers WHERE customers.customersid = "${customersid1}" `)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/delete1/:filmid`, (req,res)=>{
    const filmid2=req.params.filmid;
    const result=query(`DELETE FROM film WHERE film.filmid = "${filmid2}" `)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/delete2/:commicid`, (req,res)=>{
    const commicid3=req.params.commicid;
    const result=query(`DELETE FROM commic WHERE commic.commicid = "${commicid3}" `)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

app.get(`/add/:customersid/:name/:tel/:id_film/:rental_period/:money_bet/:total_money`, (req,res)=>{
    const customersid1=req.params.customersid;
    const name1=req.params.name;
    const tel1=req.params.tel;
    const id_film1=req.params.id_film;
    const rental_period1=req.params.rental_period;
    const money_bet1=req.params.money_bet;
    const total_money1=req.params.total_money;
    const result=query(`INSERT INTO customers (customersid, name, tel, id_film, Rental_period, money_bet, total_money) VALUES ('${customersid1}', '${name1}', '${tel1}', '${id_film1}', '${rental_period1}', '${money_bet1}', '${total_money1}');`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
});

app.get(`/add1/:filmid/:name_film/:directors/:publishyear/:category/:rentbyday/:time/:capacity/:resolution`, (req,res)=>{
    const filmid2=req.params.filmid;
    const name_film2=req.params.name_film;
    const directors2=req.params.directors;
    const publishyear2=req.params.publishyear;
    const category2=req.params.category;
    const rentbyday2=req.params.rentbyday;
    const time2=req.params.time;
    const capacity2=req.params.capacity;
    const resolution2= req.params.resolution;
    const result=query(`INSERT INTO film (filmid, name_film, directors, publishyear, category, rentbyday, time, capacity, resolution ) VALUES ('${filmid2}', '${name_film2}', '${directors2}', '${publishyear2}', '${category2}', '${rentbyday2}', '${time2}', '${capacity2}', '${resolution2}');`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
});

app.get(`/add2/:commicid/:name_commic/:author/:publishyear2/:type/:pages/:paper_size/:language`, (req,res)=>{
    const commicid3=req.params.commicid;
    const name_commic3=req.params.name_commic;
    const author3=req.params.author;
    const publishyear3=req.params.publishyear2;
    const type3=req.params.type;
    const pages3=req.params.pages;
    const paper_size3=req.params.paper_size;
    const language3=req.params.language;
    const result=query(`INSERT INTO commic (commicid, name_commic, author, publishyear2, type, pages, paper_size, language) VALUES ('${commicid3}', '${name_commic3}', '${author3}', '${publishyear3}', '${type3}', '${pages3}', '${paper_size3}', '${language3}');`)
    result
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
});




app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})