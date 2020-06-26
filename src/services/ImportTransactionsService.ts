import fs from 'fs';
import path from 'path';
import ParseCSV from 'csv-parse';
import Transaction from '../models/Transaction';
import uploadConfig from '../config/upload';

interface Request {
  tableFileName: string;
}

class ImportTransactionsService {
  async execute({ tableFileName }: Request): Promise<void> {
    // async execute({ tableFileName }: Request): Promise<Transaction[]> {
    const pathTable = path.join(uploadConfig.directory, tableFileName);

    const file = await fs.promises.readFile(pathTable, 'utf-8');
    console.log(file);
    // falta converter para JSON
  }
}

export default ImportTransactionsService;
