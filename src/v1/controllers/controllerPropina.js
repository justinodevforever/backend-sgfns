const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPropina = async (req, res) => {
  try {
    const {
      valor,
      fk_mes,
      fk_estudante,
      fk_curso,
      fk_user,
      fk_ano,
      fk_semestre,
      rupe,
    } = req.body;

    if (
      valor === 0 ||
      valor === undefined ||
      fk_ano === 0 ||
      fk_ano === undefined ||
      fk_curso === 0 ||
      fk_curso === undefined ||
      fk_estudante === 0 ||
      fk_estudante === undefined ||
      fk_mes === 0 ||
      fk_mes === undefined ||
      fk_semestre === 0 ||
      fk_semestre === undefined ||
      fk_user === 0 ||
      fk_user === undefined ||
      rupe === 0 ||
      fk_ano === null
    ) {
      res.status(201).json({ message: "error" });
      return;
    }
    const resp = await prisma.propina.findFirst({
      where: {
        fk_ano,
        fk_mes,
        fk_estudante,
      },
    });

    if (resp) {
      res.status(201).json({ message: "exist" });
      return;
    }
    await prisma.propina.create({
      data: {
        rupe,
        valor,
        anoLectivo,
        fk_ano,
        createdAt: Date.now(),
        fk_estudante,
        fk_mes,
        fk_user,
        fk_semestre,
      },
    });
    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: error });
  }
};
const verDivida = async (req, res) => {
  const { bi } = req.body;
  try {
    const meses = [
      "Outubro",
      "Novembro",
      "Dezembro",
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
    ];
    const agora = Date.now();
    const date = new Date(agora);

    let [mesHoje, c] = date
      .toLocaleTimeString("pt-BR", { month: "long" })
      .split(" ");

    const [ano, dia] = date
      .toLocaleTimeString("pt-BR", { year: "numeric" })
      .split(",");

    const response = await prisma.propina.findMany({
      where: {
        estudante: {
          bi,
        },
        anoLectivo: {
          ano: {
            contains: ano,
          },
        },
      },
      include: {
        usuario: true,
        mes: true,
        estudante: true,
        anoLectivo: true,
      },
    });

    let mesesAll = [];
    let mesesAll1 = [];
    response.map((prop) => {
      mesesAll.push(prop.Me.mes);
    });

    for (let mes = 0; mes < meses.length; mes++) {
      if (meses[mes].toLowerCase() === mesHoje.toLowerCase()) break;

      if (!mesesAll.some((me) => me.includes(meses[mes]))) {
        mesesAll1.push(meses[mes]);
      }
    }

    if (mesesAll1.length <= 0) res.json({ message: "Sem dívida" });

    res.json({ dividas: mesesAll1, message: "está com dívida" });
  } catch (error) {
    console.log({ mensage: error });
  }
};

const getPropinasMensal = async (req, res) => {
  const { bi, mes, ano } = req.body;
  try {
    const response = await prisma.propina.findFirst({
      where: {
        estudante: {
          bi,
        },
        anoLectivo: {
          ano,
        },
        mes: {
          mes,
        },
      },
      include: {
        estudante: true,
        mes: true,
        anoLectivo: true,
        usuario: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getPropinasAnual = async (req, res) => {
  const { bi, ano, semestre } = req.body;
  try {
    const response = await prisma.propina.findMany({
      where: {
        estudante: {
          bi,
        },
        anoLectivo: {
          ano,
        },
        mes: {
          mes,
        },
      },
      include: {
        estudante: true,
        mes: true,
        anoLectivo: true,
        usuario: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getPropinas = async (req, res) => {
  try {
    const response = await prisma.propina.findMany({
      include: {
        estudante: true,
        mes: true,
        anoLectivo: true,
        usuario: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getPropina = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.propina.findFirst({
      where: {
        id,
      },
      include: {
        estudante: true,
        mes: true,
        anoLectivo: true,
        usuario: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const getPropinaEspecifico = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await prisma.propina.findFirst({
      where: {
        id,
      },
      include: {
        estudante: true,
        mes: true,
        anoLectivo: true,
        usuario: true,
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const deletePropina = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.propina.findFirst(id);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const upDatePropina = async (req, res) => {
  try {
    const { id } = req.params;
    const { fk_mes, fk_ano, rupe } = req.body;
    if (!fk_ano || !fk_mes || !rupe) {
      return res.json({ message: "Error" });
    }
    const response = await prisma.propina.update({
      where: {
        id,
      },
      data: {
        fk_ano,
        fk_mes,
        rupe,
      },
    });

    res.json({ message: "Sucess" });
  } catch (error) {
    res.json({ message: "Error" });
  }
};

const getEstudantePropina = async (req, res) => {
  try {
    const agora = Date.now();
    const date = new Date(agora);

    let [mesHoje, hour] = date
      .toLocaleTimeString("pt-BR", { month: "numeric" })
      .split(",");

    const { ano, id } = req.params;

    if (Number(mesHoje) === Number(1)) {
      mesHoje = 12;
      const response = await prisma.propina.findMany({
        where: {
          mes: {
            algarismo: `${Number(mesHoje)}`,
          },
          fk_ano: ano,
        },
        include: {
          usuario: true,
          anoLectivo: true,
          mes: true,
        },
      });
      if (!response[0]) {
        res.json({
          Mensagem: "Deves Fazer o Pagamento das tuas Propinas",
          m: response[0],
        });
      } else if (response[0]) {
        res.json({ Mensagem: "Situação da Propina Legal" });
      }
      return;
    }

    const response = await Propina.findAll({
      include: [
        { model: usuario },
        {
          model: Mes,
          where: {
            algarismo: {
              [Op.eq]: `${Number(mesHoje) - 1}`,
            },
          },
        },
        { model: AnoLetivo },
      ],
      where: {
        fk_ano: ano,
      },
    });

    if (!response[0]) {
      res.json({
        Mensagem: "Deves Fazer o Pagamento das tuas Propinas",
      });
    } else if (response[0]) {
      res.json({ Mensagem: "Situação da Propina Legal" });
    }
  } catch (error) {
    res.json({ mensage: error });
  }
};

module.exports = {
  createPropina,
  getPropinas,
  getPropina,
  deletePropina,
  upDatePropina,
  getEstudantePropina,
  getPropinasAnual,
  getPropinasMensal,
  getPropinaEspecifico,
  verDivida,
};
