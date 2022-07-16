const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
    counter.textContent="0";

   
    updateNumbers();
    function updateNumbers(){
        let currentNumber = +counter.textContent;
      
        const dataId = counter.getAttribute('data-id');
        console.log(dataId);
        const increment = dataId / 20;
        currentNumber =  Math.ceil( currentNumber + increment);
      
        if(currentNumber < dataId){
            counter.textContent = currentNumber;
            setTimeout(updateNumbers, 50)
        }
        else{
            counter.textContent = dataId;
        }
    } 
    
})