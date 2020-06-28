import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

// interface TrasactionDTO{

// }

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async formated() {
    throw new Error('Method not implemented.');
  }
  // public async findByExistis(category: string): Promise<Category> {
  //   const categoryRepository = getRepository(Category);
  //   const categoryFind = await categoryRepository.findOne({ title: category });
  //   if (!categoryFind) {
  //     const newCategory = categoryRepository.create({ title: category });
  //     await categoryRepository.save(newCategory);
  //     return newCategory;
  //   }
  //   return categoryFind;
  // }

  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();
    const transactionsIncome = transactions.filter(
      transaction => transaction.type === 'income',
    );
    const transactionsOutcome = transactions.filter(
      transaction => transaction.type === 'outcome',
    );
    const totalIncome = transactionsIncome.reduce((sum, transaction) => {
      return sum + Number(transaction.value);
    }, 0);
    const totalOutcome = transactionsOutcome.reduce((sum, transaction) => {
      return sum + Number(transaction.value);
    }, 0);

    const balance = {
      income: totalIncome,
      outcome: totalOutcome,
      total: totalIncome - totalOutcome,
    };

    return balance;
  }
}

export default TransactionsRepository;
