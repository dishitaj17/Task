function getValues(val)
{
    document.getElementById("result").value+=val; 
}
function finalResult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}

// create a function for clear data
function clr()
{
document.getElementById("result").value="";    
}
// create a function for removed or  slice a values 
function bckSlice()
{
    var bck=document.getElementById("result").value;
    var res=bck.slice(0,-1);
    document.getElementById("result").value=res;
}
