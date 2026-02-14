const {logger}=require('../config')
class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
const response = await this.model.create(data);
return response;
        }
        catch(error){
logger.error("Somethng went wrong in crud repository");
throw error;
        }
    }

   async destroy(data){
    try{
const response=await this.model.destroy({
    where:{id:data}
})
   return response; }
    catch(error){
     logger.error("Somethng went wrong in crud repository");
throw error;   
    }
   } 

   async get(data){
    try{
const response=await this.model.findByPk(data)
return response;
    }
    catch(error){
        logger.error("Somethng went wrong in crud repository");
throw error;    }
   }

   async getAll(){
    try{
        const response=await this.model.findAll()
        return response;
    }
    catch(error){
        logger.error("Somethng went wrong in crud repository");
throw error;
    }
   }
}

module.exports=CrudRepository;