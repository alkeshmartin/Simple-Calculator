function display(num) {
    /*  console.log(result); */
     result.value +=num
    }
    
    function allclr() {
        result.value = ""
    }
    
    
    function equal() 
    {
        try
            {
                result.value=eval(result.value)
            }
        catch(error)
            {
                result.value="Error";
                setTimeout(()=>{
                    clearDisplay ();
                    },1000)
            }
        
    }
    function back() {
        result.value = result.value.slice(0, -1)
    }