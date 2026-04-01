import express from 'express';
import cors from 'cors'; 
import Crud from './index.js';

const app = express();
app.use(cors());
app.use(express.json());

/* =========================
   GET - LISTAR TODOS
========================= */
app.get('/carros', (req, res) => { 
  Crud.selecionar((dados) => {
    res.json(dados);
  });
});

/* =========================
   GET - POR ID
========================= */
app.get('/carros/:id', (req, res) => {
  const id = req.params.id;

  Crud.selecionaPorId(id, (carro) => {
    if (!carro) {
      return res.status(404).json({ erro: 'Carro não encontrado' });
    }
    res.json(carro);
  });
});

/* =========================
   POST - INSERIR
========================= */
app.post('/carros', (req, res) => {
  const carro = req.body;

  Crud.inserir(carro, (novoCarro) => {
    res.status(201).json(novoCarro);
  });
});

/* =========================
   PUT - ATUALIZAR
========================= */
app.put('/carros/:id', (req, res) => {
  const carro = req.body;
  carro.id = req.params.id;

  Crud.atualizar(carro, (carroAtualizado) => {
    res.json(carroAtualizado);
  });
});

/* =========================
   DELETE - REMOVER
========================= */
app.delete('/carros/:id', (req, res) => {
  const carro = { id: req.params.id };

  Crud.apagar(carro, () => {
    res.status(204).send();
  });
});

/* =========================
   SERVER
========================= */
app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});