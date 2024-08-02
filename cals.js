function send(i){
    var a= document.getElementById("vin")
    var total=0;
    switch (i) {
        case 1:
             a.value+=Number(1);
         break;
            case 2:
             a.value+=2;
         break;
             case 3:
             a.value+=3;
         break;
         case 4:
            a.value+=4;
        break;
        case 5:
            a.value+=5;
        break;
        case 6:
            a.value+=6;
        break;
        case 7:
            a.value+=7;
        break;
        case 8:
            a.value+=8;
        break;
        case 9:
            a.value+=9;
        break;
        case 0:
            a.value+=0;
        break;
        case '+':
            a.value+='+';
        break;
        case '-':
            a.value+='-';
        break;
        case '*':
            a.value+='*';
        break;
        case '/':
            a.value+='/';
        break;
        case'':
        a.value='';
        break;
        case '=':
            let result=red(a.value)
        a.value=result;
        break;
        

    
      
    }

}

function red(k) {

    var  kl="";
      total+=Number
    var ar=[]
      for(let i=0; i<k.length;i++){
          if(k[i]=='+'||k[i]=='-'|| k[i]=='/'||k[i]=='*') kl+='?'
           else kl+=k[i];
          
      }
      
     kl=kl.split('?')
     console.log(kl)
     var j=0;
     var total=0;
     total=Number(kl[j])
     console.log(total)
    
     for(let i=0; i<k.length;i++){
      if(k[i]=='+'){
        total=total+Number(kl[j+1])
        kl.shift();
        console.log(kl)
    
           
      }
      // 
      if(k[i]=='-'){
        total= total-Number(kl[j+1])
        kl.shift();
        console.log(kl)
    
    
      }
      // 
      if(k[i]=='/'){
        total=total/Number(kl[j+1])
        kl.shift();
        console.log(kl)
    
    
      }
      //
      if(k[i]=='*'){
        total=total*Number(kl[j+1])
        kl.shift();
        console.log(kl)
    
      }
    
     }
     
    
       return total
      
     }
    