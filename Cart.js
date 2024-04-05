function increment(){
    /* get  the value*/
    var value=document.getElementById('number').value;
    /* Convert the value into number */
    var num= parseInt(value);
  
    
    /*check the number is a text or number*/
    num= isNaN(num) ? 0 : num; 
  
    /*condition, if the value is less than 10 */
    if(num<10) {
        num++;
        document.getElementById('number').value=num;
    }
  }
  
  function decrement(){
    /* getting the value*/
    var value=document.getElementById('number').value;
    /* Converting the value into number */
    var num= parseInt(value);
  
    
    /*check the number is a text or number*/
    num= isNaN(num) ? 0 : num; 
  
    /*condition, if the value is less than 10 */
    if(num>1) {
        num--;
        document.getElementById('number').value=num;
    }
  }