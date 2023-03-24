 
import {User} from "./Lib/sequalize.js"

export const createCamion = async (req, res) => {
  try {
    const camionData = {...req.body}
    const camion = await User.create(camionData);
    return res.status(200).json({ success: true, message: camion });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
 
};

export const getCamiones = async (req, res) => { 
  try {
    const camiones = await User.findAll();
    return res.status(200).json({ success: true, message: camiones });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};


export const editCamion = async (req, res) => { 
    try {
      const camionData = {...req.body}
      console.log("camion data", camionData)
    await  User.update(camionData,  {where:  {id:camionData.id}})
     
      return res.status(200).json({ success: true, message: camionData});
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  };
  