import bcrypt from "bcrypt";
import { db } from "../configs/db.js";
import createError from "../configs/err.js";

export  const createAccnt= async(req, res,next)=>{
    
    const salt = bcrypt.genSaltSync(10);
    
    const hash = bcrypt.hashSync(req.body.userpassword, salt);
   
    try {
        const q = "INSERT INTO user (`userID`, `userName`, `userpassword`, `email`) VALUES (?)";
        
        const values = [req.body.userID, req.body.userName,hash , req.body.email]
         
        db.query(q, [values], (err, data)=>{
            console.log(err.sqlMessage)
            if(err.errno === 1062) return next(createError(406, err.sqlMessage)) 
            if(err) return next( createError(500, `Server Error` ) )
           
            return res.status(200).json(data)
        })
        
    } catch (error) {
        next(error)
        
    }

}


export const logIn =(req,res,next)=>{
    try {
      const  q = "SELECT  email, userpassword FRoM user WHERE email =(?)"

        db.query(q, [ req.body.email], (err, data)=>{
            if (err) return next(createError(404, `Invalid user account`))
          const isCorrect =   bcrypt.compareSync(req.body.userpassword, data[0].userpassword);
            if(isCorrect === false) return next(createError(401, `invalid username or password`))

            res.status(200).json(data)
        })
        
    } catch (error) {
        next(error)
    }

    
}
