const CrudRepository = require("./crud-repositiories")
const {Airplane}=require("../models")
class AirplaneRepository extends CrudRepository{
constructor(){
    super(Airplane)
}
}
module.exports=AirplaneRepository;