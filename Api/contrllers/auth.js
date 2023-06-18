import bcrypt from "bcrypt";
import { db } from "../configs/db.js";
import createError from "../configs/err.js";

export  const createAccnt= async(req, res,next)=>{
    console.log(req.body)
    
    const salt = bcrypt.genSaltSync(10);
     
    const hash = bcrypt.hashSync(req.body.userpassword, salt);
   
    try {
        const q = "INSERT INTO user (`userID`, `userName`, `userpassword`, `email`,`isAdmin`) VALUES (?)";
        
        const values = [req.body.userID, req.body.userName,hash , req.body.email, req.body.isAdmin]
         
        db.query(q, [values], (err, data)=>{
            if(err?.errno === 1062) return next(createError(406, 'An account with this Email already exists')) 
            if(err) return next( createError(500, err?.sqlMessage ) )
           
            return res.status(200).json(data)
        })        
        
    } catch (error) {
        next(error)        
    }

}


export const logIn =(req,res,next)=>{
    try {
      const  q = "SELECT userID email, userName, isAdmin, userpassword, img  FRoM user WHERE email =(?)"

        db.query(q, [ req.body.email], (err, data)=>{
            if (err) return next(createError(500, `server error`))
            if(data.length === 0) return next(createError(404, 'user not found'))
          const isCorrect =   bcrypt.compareSync(req.body.userpassword, data[0]?.userpassword);
            if(!isCorrect) return next(createError(401, `invalid username or password`))

            const {userpassword, ...others} = data[0]
               console.log(others )
            res.status(200).json({...others ,tokens:'ddddd'})
        })
        
    } catch (error) {
        next(error)
    }

    
}
