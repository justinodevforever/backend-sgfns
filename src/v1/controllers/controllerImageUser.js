const createImageUser = async (req, res) => {
  const { fk_user, legenda } = req.body;
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const getImagesUser = async (req, res) => {
  const { fk_user } = req.body;
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const imagesUser = async (req, res) => {
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const removeImageUser = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

module.exports = {
  createImageUser,
  getImagesUser,
  removeImageUser,
  imagesUser,
};
