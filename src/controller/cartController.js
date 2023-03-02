


const createCart = async function (req, res) {
    try {
        const body = req.body;
        const userId = req.params.userId

        var sql = "INSERT INTO cart SET ?"
        let data = mysqlConnection.query(sql, req.body)
    
        
    
        return res.status(200).send({status:true, data: data})


    } catch(err){
        return res.status(400).send({status: false, error: err.message})
    }

}

const addToCart = async function(req, res){
    try {
        let {userId} = req.params
        let body = req.body

        // let data = await cart.create(body)

        //return res.status(201).send({staus: true, data: data})

    }
    catch(err){
    return res.status(400).send({status: false, error: err.message})
    }


}


const updateCart = async function(req, res){
    
}

const getCart = async function (req, res) {
    try {
        const userId = req.params.userId

        let data = await cartModel.findOne({ userId: userId, isDeleted: false }).populate("items.productId")
        if (!data) {
            return res.status(404).send({ status: false, message: `Cart does not Exist with user id :${userId}` })
        }


        res.status(200).send({ status: true, message: "Success", data: data })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
};



const deleteCart = async function (req, res) {
    try {
        const userId = req.params.userId

        let Cart = await cartModel.findOne({ userId: userId });
        if (!Cart)
            return res.status(404).send({ status: false, message: `No cart with this userId` });

        if (Cart.products.length == 0)
            return res.status(400).send({ status: false, message: "Cart already empty" });

        let deletedData = await cartModel.findOneAndUpdate(
            { _id: Cart._id }, { items: [], totalPrice: 0, totalItems: 0 }, { new: true })

        res.status(204).send({ status: true, message: "Cart successfully removed", data: deletedData })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
};





module.exports = { createCart, updateCart, getCart, deleteCart, addToCart } 