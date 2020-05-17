import { DatabaseConnection } from './connection';
var db = DatabaseConnection.getConnection()
export default class databaseInit {
  constructor() {
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on')
    );
    this.initDb();
  }
  initDb() {
    var sql = [
      `create table if not exists pessoa (id integer primary key autoincrement, nome text,
        apelido text, telefone int);`,
    ];
    
    db.transaction(tx => {
      sql.map(function(sql) {
        console.log("execute sql : " + sql);
        tx.executeSql(sql);
      }) 
    }, (error) => {
      console.log("error call back : " + JSON.stringify(error));
      console.log(error);
    },
    () => {
      console.log("transaction complete call back ");
    });
  }

} 