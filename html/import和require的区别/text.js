function text(a,b,c){
    if(a){
        console.log(`第一个值为${a}。`)
    }else{
        console.log(`没有第一个值！`)
    }
    if(b){
        console.log(`第二个值为${b}。`)
    }else{
        console.log(`没有第二个值！`)
    }
    if(c){
        console.log(`第三个值为${c}。`)
    }else{
        console.log(`没有第三个值！`)
    }
    return "完成"
}
var firstName = 'Michael';
var lastName = 'Jackson';

export default firstName;
// export lastName = lastName;
