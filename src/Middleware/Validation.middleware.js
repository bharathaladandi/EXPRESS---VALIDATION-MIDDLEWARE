const Validation = (req, res, next) =>{

    try{
       if(id === typeof(number) && Name === typeof(string) && rating === typeof(number) &&
        des === typeof(string) && genre === typeof(string) && cast === typeof(Array(string))) {
           next();
       }
    }
    catch{
        res.status(400).send("Data is incorrect")
    }


}



module.exports = Validation;