


//display all numbesra and operators other than AC and = inside input with id=result when we click on it

function display(num)
{
    result.value+=num
}

//clear all contents from input when we click on AC button

function clearall()
{
    result.value = ""
}

//evaluate expression using eval()

function output()
{
    result.value = eval(result.value)
}

//remove last item

function remove()
{
    result.value = (result.value).slice(0,-1)
}