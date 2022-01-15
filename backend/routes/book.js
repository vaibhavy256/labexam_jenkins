const {response,request}=require('express')
const express=require('express')
const db=require('../db')
const utils=require('../utils')
const router= express.Router()

router.get("/displayall",(request,response)=>{
    const connection=db.openConnection();
    const statement=`select * from book`
    connection.query(statement,(error,data)=>{
        connection.end();
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

router.post("/add",(request,response)=>{
    const connection=db.openConnection();
    const{book_id, book_title, publisher_name, author_name}=request.body
    const statement=`insert into book(book_id, book_title, publisher_name, author_name) values (default,'${book_title}','${publisher_name}','${author_name}')`
    connection.query(statement,(error,data)=>{
        connection.end();
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

router.patch("/update",(request,response)=>{
    const connection=db.openConnection();
    const{book_id,publisher_name, author_name}=request.body
    const statement=`update book set publisher_name='${publisher_name}', 
                    author_name='${publisher_name}' where book_id='${book_id}'`
    connection.query(statement,(error,data)=>{
        connection.end();
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

router.delete("/delete",(request,response)=>{
    const connection=db.openConnection();
    const{book_id}=request.body
    const statement=`delete from book where book_id='${book_id}'`
    connection.query(statement,(error,data)=>{
        connection.end();
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})
module.exports=router