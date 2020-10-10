let age = 16;
let name = 'John';
//Age calculation has been work
if (age >= 18) {
    console.log('John can drink bear');
} else {
    console.log('John can drink juice');
}
let Johnage = 5;
switch (true){
 case Johnage < 13:
     console.log("John is a boy");
     break;
 case Johnage > 13 && Johnage < 20:
 console.log("John is a teenager");
    break;
    case Johnage > 20 && Johnage < 30: 
    console.log("John is a young man");
    break;
    default:
        console.log("John is a man");
}
let job = 'student';
switch (job){
    case 'instructor':
        console.log("John is an instructor");
        break;
        case 'driver':
        console.log("John is an driver");
        break;
        case 'desiner':
        console.log("John is an desiner");
        break;
        default:
            console.log("John is a student");   
}