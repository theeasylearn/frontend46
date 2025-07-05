// create object
var security = {
    getHashPassword:function(password)
    {
        let HashPassword = "@$%^*100";
        return HashPassword;
    },
    comparePassword: function(hash,password){
        return true;
    }
}
module.exports = security;