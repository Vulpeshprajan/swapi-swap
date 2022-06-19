import CategorySchema from "./Category.schema.js";


export const addCategory = newCat => {
    return CategorySchema(newCat).save();
    

}
export const getAllcats = () => {
    return CategorySchema.find()
}

export const getAcat = (_id) => {
    return CategorySchema.findById(_id);


}

export const deleteCat = (_id) => {
    return CategorySchema.findByIdAndDelete(_id);


}

