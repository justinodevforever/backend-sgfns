const createServico = async (req, res) => {
  try {
    const {
      valor,
      fk_tipo,
      fk_estudante,
      fk_curso,
      fk_user,
      fk_anoFrequencia,
    } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const getServicos = async (req, res) => {
  try {
  } catch (error) {
    res.json(error);
  }
};
const getServico = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};

const deleteServico = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.json(error);
  }
};
const upDateServico = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      valor,
      fk_tipo,
      fk_curso,
      fk_estudante,
      fk_user,
      fk_anoFrequencia,
    } = req.body;
  } catch (error) {
    res.json(error);
  }
};

const getEstudanteServico = async (req, res) => {
  try {
    const agora = Date.now();
    const date = new Date(agora);

    let [TiposServicosHoje, hour] = date
      .toLocaleTiTiposServicostring("pt-BR", { month: "numeric" })
      .split(",");

    const { ano, id } = req.params;

    if (Number(TiposServicosHoje) === Number(1)) {
      TiposServicosHoje = 12;
      // const response = await Servico.findAll({
      //   include: [
      //     { model: usuario },
      //     {
      //       model: TiposServicos,
      //       where: {
      //         algarismo: {
      //           [Op.eq]: `${Number(TiposServicosHoje)}`,
      //         },
      //       },
      //     },
      //     { model: AnoLetivo },
      //   ],
      //   where: {
      //     [Op.and]: {
      //       fk_anoFrequencia: ano,
      //     },
      //   },
      // });
      // if (!response[0]) {
      //   res.json({
      //     Mensagem: "Deves Fazer o Pagamento das tuas Servicos",
      //     m: response[0],
      //   });
      // } else if (response[0]) {
      //   res.json({ Mensagem: "Situação da Servico Legal" });
      // }
      // return;
    }

    // const response = await Servico.findAll({
    //   include: [
    //     { model: usuario },
    //     {
    //       model: TiposServicos,
    //       where: {
    //         algarismo: {
    //           [Op.eq]: `${Number(TiposServicosHoje) - 1}`,
    //         },
    //       },
    //     },
    //     { model: AnoLetivo },
    //   ],
    //   where: {
    //     fk_anoFrequencia: ano,
    //   },
    // });

    // if (!response[0]) {
    //   res.json({
    //     Mensagem: "Deves Fazer o Pagamento das tuas Servicos",
    //   });
    // } else if (response[0]) {
    //   res.json({ Mensagem: "Situação da Servico Legal" });
    // }
  } catch (error) {
    res.json({ mensage: error });
  }
};

module.exports = {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  upDateServico,
  getEstudanteServico,
};
