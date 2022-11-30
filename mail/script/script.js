//array contenente lista mail 
const EmailList = ["pippo@topolinia.com", "paperino@topolinia.com" , "topolino@topolinia.com", "minnie@topolinia.com" ]

//bottone per fare partire la verifica
let bottone = document.getElementById("verifica");
bottone.addEventListener('click', function(){
    
    let email

    //input email
    email = document.getElementById("email").value;

    //for
    let found = false; 
    for (let i =0; i < EmailList.length;  i++) {
        const emailcontrol = EmailList[i];
        
        if (emailcontrol === email){
            found= true;
        }
    }
    //restituisco i risultati a schermo 
    if (found){
        document.getElementById ('risultato').innerHTML = "la tua mail è presente"
    }
    else{
        document.getElementById ('risultato').innerHTML = "la tua mail non è presente"
    }

}
);

