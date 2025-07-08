class DBConnector
{
    constructor()
    {
        console.log('DBConnector constructor is called...');
    }
    insertRow()
    {
        console.log('a new row will be inserted...')
    }
    updateRow()
    {
        console.log('row will be updated');
    }
    deleteRow()
    {
        console.log('row will be deleted');
    }
    fetchRow()
    {
        console.log('row(s) will be fetched');
    }
}
module.exports.DBConnector = DBConnector;