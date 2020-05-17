import { Pessoa } from '../models/pessoa';
import {DatabaseConnection} from '../database/connection';

const table = "pessoa";

const db = DatabaseConnection.getConnection();

export default function PessoaService() {
  function addData(Pessoa) {
    
  }
}