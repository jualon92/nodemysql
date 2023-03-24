import { Cliente } from "../Models/Cliente.js";

export const createCliente = async (req, res) => {
  try {
    const clienteData = { ...req.body };
    const cliente = await Cliente.create(clienteData);
    return res.status(200).json({ success: true, message: cliente });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    return res.status(200).json({ success: true, message: clientes });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const cliente= await Cliente.findByPk(req.params[0]);
    return res.status(200).json({ success: true, message: cliente });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const editCliente= async (req, res) => {
  try {
    const clienteData = { ...req.body };
    await Cliente.update(clienteData, { where: { id: clienteData.id } });

    return res.status(200).json({ success: true, message: clienteData });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    await Cliente.destroy({
      where: { id: req.params[0] },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
