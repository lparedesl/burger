var connection = require('./connection');

module.exports = {
    selectAll: function(table, cb) {
        connection.query('SELECT * FROM ' + table, function (error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    insertOne: function(table, record, cb) {
        var cmd = connection.query('INSERT INTO ' + table + ' SET ?', record, function (error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    updateOne: function(table, record, condition, cb) {
        var cmd = connection.query('UPDATE ' + table + ' SET ? WHERE ' + condition, record, function (error, results) {
            if (error) throw error;
            cb(results);
        });
    }
};
