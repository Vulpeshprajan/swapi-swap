import Joi from 'joi';
import joi from 'joi';

const plainShortStr = Joi.string().max(20).required();
const shortStr = Joi.string().max(20).alphanum().required()
const email = Joi.string().max(50).email({minDomainSegments: 2}).required();
const shortStrNull = Joi.string().max(30).allow(null).allow("");
const _id =  Joi.string().max(30);


export const createAdminValidation = (req, res, next) => {
    console.log(req.body);

    //server side validation
    const schema = Joi.object({
        fname: shortStr,
        lname: shortStr,
        email: email,
        password: Joi.string().min(8).required(),
        dob: Joi.date().allow(null).allow(""),
        phone: Joi.string().max(15),
        address: Joi.string().max(100),
        gender: Joi.string().max(6).allow(""),
    });

    const value = schema.validate(req.body);

    if (value.error) {
        return res.json({
            status: 'error',
            message: value.error.message,
        });
    }
    next();
};

// {
//     fname: 'Bijay',
//     lname: 'Nagarkoti',
//     email: 'a@gmail.com',
//     password: 'ASDFJKL',
//     phone: '838383838',
//     address: 'Sydney',
//     gender: 'male'
//   }


export const newCategoryValidation = (req, res, next) => {
try {

    const schema = Joi.object({
        name:plainShortStr,
        parentCat: shortStrNull,

    })

    const value = schema.validate(req.body)
    if(value.error) {
        return res.json ({
            status: "error",
            message: value.error.message,

        })
    }

     next()

} catch (error) {
    res.json({
        status: "error",
        message: value.error.message,
    })
    
}




}
export const updateCategoryValidation = (req, res, next) => {
try {

    const schema = Joi.object({
        _id: _id.required(),
        name:plainShortStr,
        parentCat: shortStrNull,

    })

    const value = schema.validate(req.body)
    if(value.error) {
        return res.json ({
            status: "error",
            message: value.error.message,

        })
    }

     next()

} catch (error) {
    res.json({
        status: "error",
        message: value.error.message,
    })
    
}




}