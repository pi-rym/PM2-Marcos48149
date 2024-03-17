const {getPeliculasService, postPeliculasService} = require('../services/POST.service');


const getPeliculasController= async (req, res)=> {
    try {
       const products =  await getPeliculasService()
       
       res.status(200).json(products)
    } catch (error) {
      res.status(500).json({error:error.message})
    }
  }
  
   const postPeliculasController= async (req, res)=>{
  
      try {
        await  postPeliculasService(req.body) 
    
        res.status(201).json({message:"Producto creado exitosamente"})
  
      } catch (error) {
          res.status(400).json({error:error.message})
      }
  
  }

module.exports = {
    getPeliculasController,
    postPeliculasController
};

