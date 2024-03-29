const createDisciplina = async (req, res) => {
  try {
    const { nome, fk_ano, fk_curso, fk_semestre } = req.body;
    if (!nome || !fk_curso || !fk_semestre || !fk_ano) {
      return res.json({ message: "error" });
    }

    res.status(201).json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const getDisciplinas = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: "error" });
  }
};
const DisciplinasPorAnoCurso = async (req, res) => {
  try {
    const { ano, curso, semestre } = req.body;
    if (!ano || !curso || !semestre) {
      return res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};
const DisciplinasEspecifico = async (req, res) => {
  try {
    const { fk_ano } = req.body;
    if (!fk_ano) {
      return res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};
const searchDisciplina = async (req, res) => {
  try {
    const { nome } = req.body;
    if (!nome) {
      return res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};
const getDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};

const deleteDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ message: "error" });
    }
  } catch (error) {
    res.json({ message: "error" });
  }
};
const upDateDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, fk_ano, fk_curso, fk_semestre } = req.body;
    if (!nome || !fk_curso || !fk_semestre || !fk_ano || !id) {
      return res.json({ message: "error" });
    }

    res.json({ message: "sucess" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

module.exports = {
  createDisciplina,
  getDisciplinas,
  getDisciplina,
  deleteDisciplina,
  upDateDisciplina,
  DisciplinasEspecifico,
  DisciplinasPorAnoCurso,
  searchDisciplina,
};
