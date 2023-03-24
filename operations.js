import { Camion } from "./Models/Camion.js";

export const createCamion = async (req, res) => {
  try {
    const camionData = { ...req.body };
    const camion = await Camion.create(camionData);
    return res.status(200).json({ success: true, message: camion });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getCamiones = async (req, res) => {
  try {
    const camiones = await Camion.findAll();
    return res.status(200).json({ success: true, message: camiones });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getCamion = async (req, res) => {
  try {
    const camion = await Camion.findByPk(req.params[0]);
    return res.status(200).json({ success: true, message: camion });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const editCamion = async (req, res) => {
  try {
    const camionData = { ...req.body };
    await Camion.update(camionData, { where: { id: camionData.id } });

    return res.status(200).json({ success: true, message: camionData });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteCamion = async (req, res) => {
  try {
    await Camion.destroy({
      where: { id: req.params[0] },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
