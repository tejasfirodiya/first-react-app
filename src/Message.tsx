function Message(){
    if(GetName())
    return <h1>Hi, {GetName()}!</h1>;
    return <h1>Hello World!</h1>;
}

function GetName(){
    return "Tejas";
}
export default Message;