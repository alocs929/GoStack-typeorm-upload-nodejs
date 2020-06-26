import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import ImportTransactionsService from '../services/ImportTransactionsService';
// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();
const upload = multer(uploadConfig);
transactionsRouter.get('/', async (request, response) => {
  // TODO
  return response.json({ ok: true });
});

transactionsRouter.post('/', async (request, response) => {
  // const { title, value, type, category } = request.body;
  // const transaction = await
  return response.json({ ok: true });
});

transactionsRouter.delete('/:id', async (request, response) => {
  // TODO
  return response.json({ ok: true });
});

transactionsRouter.post(
  '/import',
  upload.single('table'),
  async (request, response) => {
    const updateTable = new ImportTransactionsService();
    // const categories =
    await updateTable.execute({
      tableFileName: request.file.filename,
    });
    // console.log(categories);
    // Service pra tratar o arq
    // const
    // TODO
    return response.json({ ok: true });
  },
);

export default transactionsRouter;
