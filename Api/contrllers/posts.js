import { db } from "../configs/db.js"
import createError from "../configs/err.js"
import {  format } from 'date-fns'



export const createpost = (req,res,next)=>{
    
    const currDate =  format(new Date(), 'yyyy-MM-dd')
    console.log(currDate)

   
    try {
        const q = "INSERT INTo post(`postID`, `postTitle`, `postDesc`,`postDate`, `uID`, `postCategory`) VALUES(?)"
        const  values = [
            req.body.postID,
            req.body.postTitle,
            req.body.postDesc,
            currDate,
            req.body.uID,
            req.body.postCategory
        ]

       db.query(q,[values], (err,data)=>{
    
        if (err) return next(createError(500, `server Error`))
        res.status(200).json(`Data added succefully`)
       })
        
    } catch (error) {
        next(error)
        
    }
}

export const updatePost = (req,resp,next)=>{
    try {
        
        const q = " UPDATE post SET `postTitle`=?,  `postDesc`=? , `postCategory`=? WHERE postID = ? ";
        const  postID = req.params.postid
        const values = [
            req.body.postTitle,
            req.body.postDesc ,
            req.body.postCategory                   
        ]

        db.query(q,[...values, postID], (err, data)=>{
            if (err) return  next(createError(500, "server Error"))
            resp.status(200).json(data)
        })
        
    } catch (error) {
        next(error)
        
    }
}

// get All posts

export const getAllpost = (req,resp,next)=>{
    try {
       const q = "SELECT * FROM post";

        db.query(q, (err,data)=>{
            if(err) return next(createError(500, "Server error"))
            if(data.length === 0) return next(createError(404, "No post found"))
            resp.status(200).json(data)
        })

    } catch (error) {
        next(error)
    }
}

// get one Post

export const getonepost = (req,resp,next)=>{
    try {
        const postID = req.params.postid
       const q = "SELECT * FROM post WHERE postID=?";

        db.query(q, [postID], (err,data)=>{
            if(err) return next(createError(500, "Server error"))
            if(data.length === 0) return next(createError(404, "post not found"))
            resp.status(200).json(data)
        })

    } catch (error) {
        next(error)
    }
}

// delete

export const deletePost = (req,resp,next)=>{
    try {
        
        const q = "DELETE FROM post  WHERE postID = ? ";
        const  postID = req.params.postid
       

        db.query(q,[postID], (err, data)=>{
            
            if (err) return  next(createError(500, "server Error"))
            resp.status(200).json(data)
        })
        
    } catch (error) {
        next(error)
        
    }
}

export const suggestPost = (req,resp,next)=>{

   try {
    const q = "SELECT * FROM post WHERE  postCategory =? "

    const postCategory = req.params.category
    db.query(q,[postCategory], (err,data)=>{
        if(err) return next(createError(500, "server error"))
        if(data.length === 0) return next(createError(404, "Category not found"))
        resp.status(200).json(data)

    })
    
   } catch (error) {
    next(error)
   }
}