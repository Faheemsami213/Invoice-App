
const serviceContainer =   document.querySelector(".sect_3")
const subTotal         =   document.querySelector(".subTotal")
const service          =   [
                            {
                                serviceName : "Wash Car",
                                cost    :   10  
                            },
                            {
                                serviceName : "Maw Lawn",
                                cost    :   20 
                            },
                            {
                                serviceName : "Pull Weeds",
                                cost    :   30  
                            }
                            ]
let  payOneDone        =    true
let  payTwoDone        =    true  
let  payThreeDone      =    true  

let   addService       =   []

function cheakDeposit(example1,example2){


        if(example1){
   
                addService.push(example2.cost)
                serviceContainer.innerHTML += `
                                                        <div class="service">
                                                                <h3>${example2.serviceName}</h3>
                                                                <h3><span>$</span>${example2.cost}</h3>

                                                        </div>
                                                        `
                                                           
                    }
        else{
                alert("You have already add this Service ")
        }

}

function totalCostOfService(example3){
let total  =  0

        for( let k  =  0  ;  k < example3.length ; k++){
                total  += example3[k]
                subTotal.innerHTML = `
                          <span>$</span>
                          ${total}
                `

        }

}

document.getElementById("washCar").addEventListener("click",()=>{
        
            cheakDeposit(payOneDone,service[0])
            totalCostOfService(addService)
            payOneDone  = false
})
document.getElementById("mawLawn").addEventListener("click",()=>{
           cheakDeposit(payTwoDone,service[1])
           totalCostOfService(addService)
           payTwoDone   = false
    
})
document.getElementById("pullWeeds").addEventListener("click",()=>{
          cheakDeposit(payThreeDone,service[2])
          totalCostOfService(addService)
          payThreeDone   = false
})
document.querySelector(".emailBtn").addEventListener("click",function(){
        alert("Thank you for your invoice! We will be in contact with you soon!")
})
            
