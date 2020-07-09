const button = document.querySelector('button')!; // ! this mean you know the button is null

function clickHandler(message:string){
    console.log('clicked'+message)
}

// or rap with if() statment 
if(button){
    button.addEventListener('click', clickHandler.bind(null,"You\'re welcome!")); // don't use "noImplicitThis": true
}
        function add(n1:number,n2:number){
            if(n1+n2 >0){
                return n1+n2;
            }
            return;
        }
