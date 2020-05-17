import { DatabaseConnection } from './database-connection';

let db = null;
export default class databaseInit {
  db = DatabaseConnection.getConnection();
  constructor() {
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on')
    );
  }

} 