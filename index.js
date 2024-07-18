
        let inp1=document.getElementById("inp")
        function cal1(data){
            inp1.value+=data;

        }
        function evaluate1(){
            inp1.value=eval(inp1.value)
        }
        function delete1(){
            //inp1.value=inp1.value.slice(0,-1)
            inp1.value=inp1.value.substring(0,inp1.value.length-1)

        }

        function clear1(){
            inp1.value=""

        }
        function sine1(){
            inp1.value=Math.sin(inp1.value*(Math.PI/180))
        }
        function cos1(){
            inp1.value=Math.cos(inp1.value*(Math.PI/180))
        }

        function tan1(){
            inp1.value=Math.tan(inp1.value*(Math.PI/180))
        }

        function asin1(){
            inp1.value=Math.sin(inp1.value*(180/Math.PI))
        }
        function acos1(){
            inp1.value=Math.cos(inp1.value*(180/Math.PI))
        }
        function atan1(){
            inp1.value=Math.tan(inp1.value*(180/Math.PI))
        }
        function per1(){
            inp1.value=inp1.value/100
        }

        function log1(){
            inp1.value=Math.log10(inp1.value)
        }

        function ln1()
        {
            inp1.value=Math.log(inp1.value)
        }

        function squareroot(){
            inp1.value=Math.sqrt(inp1.value)
        }

        function pow1(){
            inp1.value=Math.pow(inp1.value,2)

        }

        function pow2(){
            inp1.value=Math.pow(inp1.value,3)
        }

        function exp1(){
            inp1.value=Math.exp(inp1.value)
        }

        function plusorminus()
        {
            let y=inp1;
            let x=y.value
            let m=x*-1;
            inp1.value=m
        
        }