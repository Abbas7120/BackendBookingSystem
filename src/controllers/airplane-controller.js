const {airplaneService}=require("../services")
const {StatusCodes}=require("http-status-codes")
async function createAirplane(req,res){
    try{
const airplane=await airplaneService.createAirplane({
    modelNumber:req.body.modelNumber,
    capacity:req.body.capacity
})
return res.status(StatusCodes.CREATED).json({
    success:true,
    message:"Successfully created the airplane",
    data:airplane,
    error:{}
})
    }
    catch(error){
return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success:false,
    message:"Not able to create the airplane",
    data:{},
    error:error
})
    }
}

module.exports={createAirplane}