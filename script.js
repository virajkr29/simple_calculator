function showValue(inpt){
    let scroll_interest = document.getElementById("interest").value;
    document.getElementById("rest").innerHTML= (inpt/10) ;
}

function compute()
{
    let amount = parseFloat(document.getElementById("principal").value);
    let interest = parseFloat(document.getElementById("interest").value)/10;
    let years = parseInt(document.querySelector("#yrs").value);
    let p_interest = (amount*interest*years)/100;
    let p_amount = amount+p_interest;


    document.getElementById('result').innerHTML = 
    `<p>If you deposit ${amount},</p>
    <p>at an interest rate of ${interest}%</p>
    <p>You will recive an amount of ${p_interest}</p>
    <p>In Year ${years+2021}</p>
    `;
    
}
        