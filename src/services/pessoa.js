import { Pessoa } from '../models/pessoa';
import {DatabaseConnection} from '../database/connection';

const table = "pessoa";

const db = DatabaseConnection.getConnection();

export default class PessoaService {


  static addData(name, nickname, tel) {
    return new Promise((resolve, reject) =>db.transaction(
        tx => {
            tx.executeSql(`insert into ${table} (nome, apelido, telefone) 
            values (?,  ?,  ?)`, 
            [name, nickname, tel], 
            (_, { insertId, rows }) => {
                console.log("id insert: " + insertId);
                resolve(insertId)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }));
}

    static findAll() {
      return new Promise((resolve, reject) => db.transaction(tx => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
              resolve(rows)
          }), (sqlError) => {
              console.log(sqlError);
          }}, (txError) => {
          console.log(txError);
      }))
  }

}