const getMensagem = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(400).json({ mensage: error.mensage });
  }
};

const createMensagem = async (req, res) => {
  const { sms, contactId, sendId, createdAt } = req.body;

  try {
  } catch (error) {
    res.status(400).json({ mensage: error.mensage });
  }
};

const getMensagens = async (req, res) => {
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemporNome = async (req, res) => {
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemNaoLida = async (req, res) => {
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};
const getMensagemporNomeOrder = async (req, res) => {
  try {
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const deleteMensagem = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json({ user: "Removido Com sucesso" });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

const upDateMensagem = async (req, res) => {
  const { id } = req.params;

  try {
    res.status(200).json({ mensage: "Dados atualizados com sucesso" });
  } catch (error) {
    res.json({ mensage: error.mensage });
  }
};

module.exports = {
  createMensagem,
  getMensagens,
  getMensagem,
  deleteMensagem,
  upDateMensagem,
  getMensagemporNome,
  getMensagemporNomeOrder,
  getMensagemNaoLida,
};
