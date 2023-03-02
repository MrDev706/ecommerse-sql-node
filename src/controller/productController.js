



const createProduct  = async function(req, res) {
    try{
       let body = req.body

       let prodData = await ProductModel.create(body)
       return res.status(201).send({staus: true, message: "Success", data: prodData})

    } catch (err){
        res.status(500).send({ status: false, message: err.message });
        
    }

}



///GET PRODUCT///



const getProductById = async function (req, res) {
    try {
      let productId = req.params.productId;
  
      let data = await productModel.findOne({ _id: productId, isDeleted: false })
      if (!data) {
        return res.status(404).send({ status: false, message: "No product found by this Product id" });
      }
  
      res.status(200).send({ status: true, message: "Success", data: data })
  
    } catch (err) {
      res.status(500).send({ status: false, message: err.message });
    }
  
  };




////UPDATE PRODUCT////


const updateProductById = async function (req, res) {
    try {
  
      let productId = req.params.productId
  
      let data = req.body

      
    let updatedData = await productModel.findOneAndUpdate({ _id: productId }, data, { new: true })
    res.status(200).send({ status: true, message: "Success", data: updatedData })


    }
    catch (err) {
        return res.status(500).send({ status: false, error: err.message });

    }

    }

