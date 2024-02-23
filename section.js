const button =document.getElementsByClassName('btn-square');

let sum = 0;
let showResult =0;
let seatResult =40;

for (const btn of button){
    btn.addEventListener('click',function select(event){
        if(event.target.disabled){
            return
        }
        event.target.disabled=true;
        showResult=showResult+1;
        seatResult = seatResult -1;
        if(showResult >=5){
          btn.setAttribute('disabled',true)
          return;
        }
        // document.getElementById('seat').disabled=true;
        setInnerText('seatNbr', showResult);
        setInnerText('totalSeat', seatResult);
        event.target.style.background =`green` 
        const selectSeat = event.target.innerText

        const takas = document.getElementById('taka').innerText
        const seat = document.getElementById('result')
        
        const li = document.createElement('li')
        const p = document.createElement('p')
        
        p.innerText = selectSeat
  
        const p2 = document.createElement('p')
        p2.innerText = 'Economy'
        const p3 = document.createElement('p')
        p3.innerText = takas

        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)

        seat.appendChild(li)

        const totalPrices = document.getElementById('totalPrice').innerText
        
        const numberPrices = parseInt(totalPrices);

        sum = numberPrices+parseInt(takas)
        setInnerText('totalPrice', sum)
        
    })

    
}

function setInnerText(id,value){
    document.getElementById(id).innerText=value
}
