import { Viaje } from "../Models/Viaje.js";

export const createViaje = async (req, res) => {
  try {
    const viaje  = await Viaje.create(req.body);
    return res.status(200).json({ success: true, message: viaje});
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getViajes = async (req, res) => {
  try {
    const viajes = await Viaje.findAll();
    return res.status(200).json({ success: true, message: viajes});
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getViaje = async (req, res) => {
  try {
    const viaje = await Viaje.findByPk(req.params[0]);
    return res.status(200).json({ success: true, message: viaje });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const editViaje = async (req, res) => {
  try {
    const viajeData = { ...req.body };
    await Viaje.update(viajeData, { where: { id: viajeData.id } });

    return res.status(200).json({ success: true, message: viajeData });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteViaje = async (req, res) => {
  
  try {
   
    await Viaje.destroy({
      where: { id: req.params[0] },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
