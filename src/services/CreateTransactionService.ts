import { getCustomRepository, getRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';
import Category from '../models/Category';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getRepository(Category);
    const { total } = await transactionsRepository.getBalance();

    if (type === 'outcome' && total < value) {
      throw new AppError('You do not to have enough balance');
    }

    // If not exists then create
    let categoryAux = await categoryRepository.findOne({
      title: category,
    });

    if (!categoryAux) {
      categoryAux = categoryRepository.create({
        title: category,
      });
    }
    await categoryRepository.save(categoryAux);
    // if (type === 'outcome' && value > balance.outcome) {
    //   throw new AppError('Saldo Insuficiente', 400);
    // }

    // {
    //   "id": "uuid",
    //   "title": "Salário",
    //   "value": 4000,
    //   "type": "income",
    //   "category": {
    //     "id": "uuid",
    //     "title": "Salary",
    //     "created_at": "2020-04-20T00:00:49.620Z",
    //     "updated_at": "2020-04-20T00:00:49.620Z"
    //   },
    //   "created_at": "2020-04-20T00:00:49.620Z",
    //   "updated_at": "2020-04-20T00:00:49.620Z"
    // },

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category: categoryAux,
    });
    await transactionsRepository.save(transaction);
    return transaction;
  }
}

export default CreateTransactionService;
