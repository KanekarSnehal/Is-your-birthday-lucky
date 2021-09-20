const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number-button");
const outputBox=document.querySelector("#output-box");
const errorBox=document.querySelector("#error-box")

checkNumberButton.addEventListener("click",checkBirthDateIsLucky);

function checkBirthDateIsLucky()
{
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    
    if(sum &&  dob && Number(luckyNumber.value)>0)
    {
        compareValues(sum,luckyNumber.value);
        errorBox.style.display="none";
        outputBox.style.display="block";
    }
    else 
    {
        outputBox.style.display="none";
        errorBox.style.display="block";
        errorBox.innerText="**Please enter both the fields greater than zero. 😡**";
    }
    
        
}

function calculateSum(dob)
{
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++)
    {
        sum+=Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum,luckyNumber)
{
    if(sum%luckyNumber===0)
    {
        outputBox.innerText="Your birthday is lucky 😻";
    }
    else
    {
        outputBox.innerText="Your birthday is not lucky 🤐";
    }
}



