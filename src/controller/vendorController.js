const { mysqlConnection } = require("../db")


const createVendor = async (req, res) =>{
    try {
    let {name, email, phone, address, password, type} = req.body
    console.log(req.body)

    //let data = mysqlConnection.query('SELECT * FROM learnerdetails WHERE learner_id = ?',[req.params.id],

    var sql = "INSERT INTO users SET ?"
    let data = mysqlConnection.query(sql, req.body)

    

    return res.status(200).send({status:true, data: data})

    } catch(err){
        return res.status(400).send({status: false, error: err.message})
    }

}

module.exports.createVendor = createVendor

const getVendor = async (req, res) =>{
    try {
        let {vendorId} = req.params
        let data = await mysqlConnection.query(`SELECT * FROM users WHERE id = ${id}`)

    }
    catch(err){
        return res.status(400).send({status: true, data: data})
    }


}

module.exports.getVendor = getVendor

const updateVendor = async (req, res) => {
    let {id} = req.params
    let vendorData = req.body

    let data = await mysqlConnection.query(`SELECT * FROM users WHERE id = ${id}`)

    if(!data){
        return res.status(400).send({status: false, error: "UNAABLE TO UPDATE"})
    }
}





/////

const createCategory = async function(req, res){
    try{
        let data = categor.create(req.body)
        return res.status(200).send({status:true, data: data})

    } catch(err){
        return res.status(400).send({status: false, error: err.message})
    }


}

const deleteCategory = async function(req, res){
    try{
    let catId = req.params.catId

    let data = category.findOneAndDelete(catId)
    return res.status(200).send({status:true, message: "Success"})

    } catch(err){
        return res.status(400).send({statu: false, error: err})
    }

}


