class StringBuilder{
    constructor(string) {
        this._string = string;
    }

get string(){
    return this._string;
}

append(str){
    this._string += str;
   
}

prepend(str){
    this._string = str + this._string;
   
}

pad(str){
    this._string = str + this._string + str;
}
}

const builder = new StringBuilder('.');

builder.append('^');
builder.prepend('^');
builder.pad('=');

console.log(builder.string);
