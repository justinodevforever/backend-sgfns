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
      dataSolicitacao,
    } = req.body;

    if (
      valor === 0 ||
      valor === undefined ||
      fk_ano === "" ||
      fk_ano === undefined ||
      fk_curso === "" ||
      fk_curso === undefined ||
      fk_estudante === "" ||
      fk_estudante === undefined ||
      fk_mes === "" ||
      fk_mes === undefined ||
      fk_semestre === "" ||
      fk_semestre === undefined ||
      fk_user === "" ||
      fk_user === undefined ||
      rupe === 0 ||
      fk_ano === null ||
      !dataSolicitacao
    ) {
      res.json({ message: "error" });
      return;
    }
    const resp = await prisma.propina.findFirst({
      where: {
        fk_ano,
        fk_mes,
        fk_estudante,
      },
    });

    if (resp?.id) {
      res.json({ message: "exist" });
      return;
    }
    const response = await prisma.propina.create({
      data: {
        rupe,
        valor,
        fk_ano,
        fk_estudante,
        fk_mes,
        fk_semestre,
        fk_user,
        dataSolicitacao,
      },
    });
    if (typeof response.rupe === "bigint") {
      response.rupe = response?.rupe?.toString();
    }
    res.status(201).json({ message: "sucess", response: response });
  } catch (error) {
    res.json({ message: "error" });
  }
};
const listaEstudantes = async (req, res) => {
  const { ano } = req.body;
  try {
    const dados = await prisma.estudante.findMany({
      include: {
        frequencia: true,
        curso: true,
        propina: {
          include: {
            mes: true,
          },
          orderBy: {
            mes: {
              algarismo: "asc",
            },
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
      where: {
        propina: {
          some: {
            anoLectivo: {
              ano,
            },
          },
        },
      },
    });
    const response = await prisma.estudante.findMany({
      include: {
        frequencia: true,
        curso: true,
        propina: {
          include: {
            mes: true,
          },
          orderBy: {
            mes: {
              algarismo: "asc",
            },
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
      where: {
        propina: {
          some: {
            anoLectivo: {
              ano,
            },
          },
        },
      },
    });
    const mes = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Outubro",
      "Novembro",
      "Dezembro",
      "total",
    ];
    // const meses = Array.from({ length: 12 }, (_, i) => i + 1);
    const totalMes = mes.reduce((acc, me) => {
      const key = `${me}`;
      acc[key] = 0.0;
      if (acc["total"]) acc["total"] = 0;
      if (acc["totalGeral"]) acc["totalGeral"] = 0;
      return acc;
    }, {});
    dados.map((estudante) => {
      estudante.propina.forEach((pagar) => {
        totalMes[pagar.mes.mes] += pagar.valor;
      });
    });
    const totalGeral =
      totalMes?.Janeiro +
      totalMes?.Fevereiro +
      totalMes?.Março +
      totalMes?.Abril +
      totalMes?.Maio +
      totalMes?.Junho +
      totalMes?.Julho +
      totalMes?.Outubro +
      totalMes?.Novembro +
      totalMes?.Dezembro;

    const resul = response.map((estudante) => {
      const todosMeses = mes.reduce((acc, me) => {
        const key = `${me}`;
        acc[key] = 0.0;
        if (acc["total"]) acc["total"] = 0;
        return acc;
      }, {});

      estudante.propina.forEach((pagar) => {
        if (pagar.mes.mes && estudante.id === pagar.fk_estudante) {
          todosMeses[pagar.mes.mes] = pagar.valor;
          todosMeses["total"] += pagar.valor;
        } else {
          todosMeses[pagar.mes.mes] = 0.0;
        }
      });

      return { estudante, todosMeses };
    });

    response.map((prop) => {
      prop.propina.map((p) => {
        if (typeof p.rupe === "bigint") {
          p.rupe = p.rupe.toString();
        }
      });
    });

    res.json({ response: resul, totalMes: totalMes, totalGeral: totalGeral });
  } catch (error) {
    console.log({ message: error.message });
  }
};
const listaRegime = async (req, res) => {
  const { regime, ano } = req.body;
  try {
    const dados = await prisma.estudante.findMany({
      include: {
        curso: true,
        propina: {
          include: {
            mes: true,
          },
          orderBy: {
            mes: {
              algarismo: "asc",
            },
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
      where: {
        AND: {
          regime,
          propina: {
            some: {
              anoLectivo: {
                ano,
              },
            },
          },
        },
      },
    });
    const response = await prisma.estudante.findMany({
      include: {
        curso: true,
        propina: {
          include: {
            mes: true,
          },
          orderBy: {
            mes: {
              algarismo: "asc",
            },
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
      where: {
        regime,
        propina: {
          some: {
            anoLectivo: {
              ano,
            },
          },
        },
      },
    });
    const mes = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Outubro",
      "Novembro",
      "Dezembro",
      "total",
    ];
    // const meses = Array.from({ length: 12 }, (_, i) => i + 1);
    const totalMes = mes.reduce((acc, me) => {
      const key = `${me}`;
      acc[key] = 0.0;
      if (acc["total"]) acc["total"] = 0;
      if (acc["totalGeral"]) acc["totalGeral"] = 0;
      return acc;
    }, {});
    dados.map((estudante) => {
      estudante.propina.forEach((pagar) => {
        totalMes[pagar.mes.mes] += pagar.valor;
      });
    });
    const totalGeral =
      totalMes?.Janeiro +
      totalMes?.Fevereiro +
      totalMes?.Março +
      totalMes?.Abril +
      totalMes?.Maio +
      totalMes?.Junho +
      totalMes?.Julho +
      totalMes?.Outubro +
      totalMes?.Novembro +
      totalMes?.Dezembro;

    const resul = response.map((estudante) => {
      const todosMeses = mes.reduce((acc, me) => {
        const key = `${me}`;
        acc[key] = 0.0;
        if (acc["total"]) acc["total"] = 0;
        return acc;
      }, {});

      estudante.propina.forEach((pagar) => {
        if (pagar.mes.mes && estudante.id === pagar.fk_estudante) {
          todosMeses[pagar.mes.mes] = pagar.valor;
          todosMeses["total"] += pagar.valor;
        } else {
          todosMeses[pagar.mes.mes] = 0.0;
        }
      });

      return { estudante, todosMeses };
    });

    response.map((prop) => {
      prop.propina.map((p) => {
        if (typeof p.rupe === "bigint") {
          p.rupe = p.rupe.toString();
        }
      });
    });

    res.json({ response: resul, totalMes: totalMes, totalGeral: totalGeral });
  } catch (error) {
    console.log({ message: error.message });
  }
};
const dadosGeraisCurso = async (req, res) => {
  const { dataInicial, dataFinal, ano, regime } = req.body;
  try {
    const response = await prisma.curso.findMany({
      include: {
        estudantes: {
          where: {
            regime,
          },
          include: {
            frequencia: true,
            propina: {
              where: {
                dataSolicitacao: {
                  gte: dataInicial,
                  lte: dataFinal,
                },
                anoLectivo: {
                  ano,
                },
              },
              include: {
                mes: true,
              },
            },
          },
        },
      },
    });

    const cursos = response.map((curso) => {
      if (curso.estudantes.length <= 0) {
        return;
      }
      let dados = {
        totaGeralCurso: 0,
        totalPorMes: {},
        totalGeralM: 0,
        totalGeralF: 0,
        totalGeralMF: 0,
        qtdGeral: 0,
      };
      const frequencia = curso?.estudantes?.reduce((acc, estudante) => {
        const { frequencia, sexo, propina } = estudante;
        // let totalGeralEstudante = 0;

        if (!acc[curso.curso]) {
          acc[curso.curso] = {
            totaGeralCurso: 0,
            totalPorMes: {},
            totalGeralM: 0,
            totalGeralF: 0,
            totalGeralMF: 0,
            qtdGeral: 0,
          };
        }
        if (!acc["Ano" + frequencia.ano]) {
          acc["Ano" + frequencia.ano] = {
            ano: "",
            totalSexoM: 0,
            totalSexoF: 0,
            totalMesAno: 0,
            qtdAno: 0,
            totalMF: 0,
            pagamentosMes: {},
          };
        }
        acc["Ano" + frequencia.ano].ano = estudante.frequencia.ano;
        if (sexo === "M" && acc["Ano" + frequencia.ano]) {
          acc["Ano" + frequencia.ano].totalSexoM++;
          acc[curso.curso].totalGeralM++;
        } else if (sexo === "F" && acc["Ano" + frequencia.ano]) {
          acc["Ano" + frequencia.ano].totalSexoF++;
          acc[curso.curso].totalGeralF++;
        }
        acc["Ano" + frequencia.ano].totalMF =
          acc["Ano" + frequencia.ano].totalSexoF +
          acc["Ano" + frequencia.ano].totalSexoM;
        acc[curso.curso].totalGeralMF =
          acc[curso.curso].totalGeralF + acc[curso.curso].totalGeralM;

        propina.forEach((p) => {
          const { fk_mes, valor, mes } = p;

          if (!acc[curso.curso].totalPorMes[mes.mes]) {
            acc[curso.curso].totalPorMes[mes.mes] = {
              valor: 0,
              qtd: 0,
              // mes: "",
            };
          }
          if (!acc["Ano" + frequencia.ano].pagamentosMes[mes.mes]) {
            acc["Ano" + frequencia.ano].pagamentosMes[mes.mes] = {
              totalPago: 0,
              totalEstudante: 0,
              totalGeralMes: 0,
              totalGeralEstudante: 0,
              // mes: "",
            };
          }

          acc["Ano" + frequencia.ano].pagamentosMes[mes.mes].totalPago += valor;
          acc["Ano" + frequencia.ano].pagamentosMes[mes.mes].totalEstudante++;
          acc["Ano" + frequencia.ano].totalMesAno += valor;
          acc["Ano" + frequencia.ano].qtdAno++;
          //   acc["Ano" + frequencia.ano].pagamentosMes[mes.mes].totalPago;
          acc[curso.curso].totaGeralCurso += valor;
          acc[curso.curso].qtdGeral++;
          acc[curso.curso].totalPorMes[mes.mes].valor += valor;
          acc[curso.curso].totalPorMes[mes.mes].qtd++;
          dados = acc[curso.curso];
        });

        return acc;
      }, {});
      return { curso: curso.curso, frequencia, dados };
    });

    // response.map((c) => {
    //   c.estudantes.map((e) => {
    //     e.propina.map((p) => {
    //       if (typeof p.rupe === "bigint") p.rupe = p.rupe.toString();
    //     });
    //   });
    // });
    let dados = [];

    cursos.map((c) => {
      if (c !== undefined) dados.push(c);
    });

    res.json(dados);
  } catch (error) {
    console.log({ message: error.message });
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
          ano: `${Number(ano) - Number(1)}/${ano}`,
        },
      },
      include: {
        usuario: true,
        mes: true,
        estudante: {
          include: {
            frequencia: true,
          },
        },
        anoLectivo: true,
      },
    });
    // if (response.length <= 0) {
    //   res.json({ message: "Não Exite Estudante com Este Nº de B.I" });
    //   return;
    // }

    let mesesAll = [];
    let mesesAll1 = [];
    if (typeof response.rupe === "bigint") {
      response.rupe = response.rupe.toString();
    }
    response.map((prop) => {
      if (typeof prop.rupe === "bigint") {
        prop.rupe = prop.rupe.toString();
      }
      mesesAll.push(prop.mes.mes);
    });

    for (let mes = 0; mes < meses.length; mes++) {
      if (meses[mes].toLowerCase() === mesHoje.toLowerCase()) break;

      if (!mesesAll.some((me) => me.includes(meses[mes]))) {
        mesesAll1.push(meses[mes]);
      }
    }

    if (mesesAll1.length <= 0) {
      res.json({ message: "Sem dívida" });
      return;
    }

    res.json({ dividas: mesesAll1, message: "está com dívida" });
  } catch (error) {
    console.log({ mensage: error.message });
  }
};

const getPropinasMensal = async (req, res) => {
  const { bi, mes, ano } = req.body;
  try {
    const response = await prisma.propina.findFirst({
      include: {
        estudante: {
          include: {
            frequencia: true,
            curso: true,
          },
        },
        mes: true,
        anoLectivo: true,
        usuario: true,
      },
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
    });
    if (response) {
      if (typeof response.rupe === "bigint") {
        response.rupe = response.rupe.toString();
      }

      res.json(response);
    }
  } catch (error) {
    res.json({ message: error.message });
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
      },
      include: {
        estudante: {
          include: {
            frequencia: true,
            curso: true,
          },
        },
        mes: true,
        anoLectivo: true,
        usuario: true,
      },
    });
    const resp = [];
    if (response) {
      response.map((m, i) => {
        m.rupe = m?.rupe?.toString();
        resp.push(m);
      });
    }
    res.json(resp);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getPropinas = async (req, res) => {
  try {
    const response = await prisma.propina.findMany({
      include: {
        estudante: {
          include: {
            frequencia: true,
          },
        },
        mes: true,
        anoLectivo: true,
        usuario: true,
      },
    });

    const resp = [];
    response.map((m, i) => {
      m.rupe = m.rupe.toString();
      resp.push(m);
    });
    res.json(resp);
  } catch (error) {
    res.json(error.message);
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
        estudante: {
          include: {
            frequencia: true,
          },
        },
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
const countDiurno = async (req, res) => {
  try {
    const response = await prisma.propina.count({
      where: {
        estudante: {
          regime: "Regular",
        },
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
const countPosLaboral = async (req, res) => {
  try {
    const response = await prisma.propina.count({
      where: {
        estudante: {
          regime: "Pós-Laboral",
        },
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
        estudante: {
          include: {
            frequencia: true,
          },
        },
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

    const response = await prisma.propina.findMany({
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
  countPosLaboral,
  countDiurno,
  listaEstudantes,
  dadosGeraisCurso,
  listaRegime,
};
