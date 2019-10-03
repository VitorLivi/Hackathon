var db = require('../dbconnection');

var TABELA = 'MENTOR'      ,
    ID =          'ID'            ,
    ID_USUARIO=   'ID_USUARIO'    ,
    ID_HACKATHON= 'ID_HACKATHON'  ;

var MENTOR = {
    selectMentor: function (data,callback) {
        var queryString = "SELECT "
                            + "MENTOR." + ID_USUARIO       + ", "
                            + "MENTOR." + ID_HACKATHON     +
                            " FROM "  + TABELA + " WHERE " + ID_HACKATHON + " = "+data.id_hackathon;

        return db.query(queryString, callback);
    },
    insert: function (data, callback) {
        var queryString =   "INSERT INTO " + TABELA + " ( "
                            + ID_USUARIO   + ", "
                            + ID_HACKATHON + 
                        
                            ") VALUES (?,?);";
        var DATA_FIELDS = [ 

            data.id_usuario    ,
            data.id_hackathon           
  
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    },
    delete: function (data, callback) {
        var queryString = "DELETE FROM " + TABELA + 
                          " WHERE " + ID + " = ? ";
        var DATA_FIELDS = [
            data.id
        ];

        return db.query(queryString, DATA_FIELDS, callback);
    },
};
module.exports = MENTOR;