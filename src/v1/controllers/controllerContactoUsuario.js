const createContactUsuario = async (req, res) => {
  const { sendId, receiveId, seguir } = req.body;
  try {
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const getContactsusuario = async (req, res) => {
  const { receiveId, sendId } = req.body;

  try {
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const getContactUsuario = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};
const ContactUsuario = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ mensage: error.mensage });
  }
};
const Contactusuariopecific = async (req, res) => {
  const { contactId, userId } = req.body;
  try {
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const deleteContactUsuario = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

const upDateContactUsuario = async (req, res) => {
  const { id } = req.params;
  const { receiveId, sendId } = req.body;
  try {
    if (
      receiveId != undefined &&
      receiveId != null &&
      sendId != undefined &&
      sendId != null &&
      id != undefined &&
      id != null
    ) {
    }
  } catch (error) {
    res.status(401).json({ mensage: error.mensage });
  }
};

module.exports = {
  createContactUsuario,
  getContactUsuario,
  getContactsusuario,
  deleteContactUsuario,
  upDateContactUsuario,
  ContactUsuario,
  Contactusuariopecific,
};
