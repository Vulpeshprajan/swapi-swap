import express from "express";
const Router = express.Router();
import slugify from "slugify";

import {addCategory, getAllcats, getAcat, deleteCat} from "../database/category/Category.model.js";

Router.all ("/", (req, res, next) => {
    next();
// res.json ({
// status : "success",
// message : "from category router"
// })
})


// return all or single categories
Router.get ("/:_id?" , async (req, res) => {
try {

    const {_id} = req.params;
    let result 

    if(_id){ 
        result = await getAcat(_id);
    }else {

    result = await getAllcats();
    }

    

    res.json({
        status: "success",
        message: "All the categories ",
       categories: result || []
    });
    
} catch (error) {
    console.log(error)
    res.json({
        status : "error",
        message : error.message

    })

}

})


// return single category


// create new category 
Router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const slug = slugify(req.body.name, {lower:true});
        console.log(slug);
        const result = await addCategory({...req.body , slug} );

        const status = result?._id ? "success" : "error";

        const message = result?._id ? "Category has been created" : "Unable to create category please try again later";

        res.send({status, message});
        
    } catch (error) {
        console.log(error.message)

        let msg = "Error, Unable to add new categor at the moment, Please try again later"

        if(error.message.includes("E11000 duplicate key error collection")) {
            msg = "Error, Category already exist" ;
        }
        
        res.send({
            status: "error",
            message: msg, 


        })
    }


})



//update category 

//delete category 
Router.delete("/:_id" , async (req, res) => {
    try {
        const {_id} = req.params

     
            const result = await deleteCat(_id);
            console.log(result)


            if(result?._id)
            return res.json ({
                status: "success",
                message: "category has been deleted", 

            })

        res.json ({
            status: "error",
            message: "Invalid request", 

        });

    } catch (error) {
        console.log(error)
        res.send ({
            status: "error",
            message: "Error, Unable to delete category", 
        })
    }


})



export default Router;