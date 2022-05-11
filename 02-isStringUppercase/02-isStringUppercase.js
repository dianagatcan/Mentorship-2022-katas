
function isStringUppercase(string){
    //if matches everyhing except A-z and whitespaces
    if(/[^a-zA-Z-' ]/.test(string)){
        return 'Invalid input'
    }
    return string === string.toUpperCase();
}

module.exports = isStringUppercase;
