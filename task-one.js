let appleCount = document.getElementById('apple_count').value;
let mangoCount = document.getElementById('mango_count').value;
let guavaCount = document.getElementById('guava_count').value;
let applePrice = document.getElementById('apple_price').value;
let mangoPrice = document.getElementById('mango_price').value;
let guavaPrice = document.getElementById('guava_price').value;
let  totalApplePrice = applePrice*appleCount;
let  totalMangoPrice = mangoCount * mangoPrice;
let  totalGuavaPrice = guavaCount * guavaPrice;

function plus(product){
    switch (product){
        case 'apple':
            appleCount++;
            document.getElementById('apple_count').value = appleCount;
            document.getElementById('apple_price').value = appleCount + " X " + applePrice;
            totalApplePrice = document.getElementById('total_apple_price').value = appleCount * applePrice;
            document.getElementById('total_price').value = parseInt(totalApplePrice)+parseInt(totalMangoPrice)+parseInt(totalGuavaPrice);

        break;
        case 'mango':
            mangoCount++;
            document.getElementById('mango_count').value = mangoCount;
            document.getElementById('mango_price').value = mangoCount + " X "+ mangoPrice;
            totalMangoPrice = document.getElementById('total_mango_price').value = mangoCount * mangoPrice;
            document.getElementById('total_price').value = parseInt(totalApplePrice)+parseInt(totalMangoPrice)+parseInt(totalGuavaPrice);



        break;
        default : 
            guavaCount++;
            document.getElementById('guava_count').value = guavaCount;
            document.getElementById('guava_price').value = guavaCount + " X "+ guavaPrice;
            totalGuavaPrice = document.getElementById('total_guava_price').value = guavaCount * guavaPrice;
            document.getElementById('total_price').value = parseInt(totalApplePrice)+parseInt(totalMangoPrice)+parseInt(totalGuavaPrice);



        break;
    }

}
function minus(product){
    switch (product){
        case 'apple':
            if(appleCount == 0)
            {
               appleCount = 0;
            }else{
                appleCount--;
            }
            document.getElementById('apple_count').value = appleCount;
            document.getElementById('apple_price').value = appleCount +" X "+ applePrice;
            totalApplePrice =  document.getElementById('total_apple_price').value = appleCount * applePrice;
            document.getElementById('total_price').value = parseInt(totalApplePrice)+parseInt(totalMangoPrice)+parseInt(totalGuavaPrice);

        break;
        case 'mango':
            if(mangoCount == 0)
            {
                mangoCount = 0;
            }else{
                mangoCount--;
            }
            document.getElementById('mango_count').value = mangoCount;
            document.getElementById('mango_price').value = mangoCount + " X " + mangoPrice;
            totalMangoPrice = document.getElementById('total_mango_price').value = mangoCount * mangoPrice;
            document.getElementById('total_price').value = parseInt(totalApplePrice)+parseInt(totalMangoPrice)+parseInt(totalGuavaPrice);

        break;
        default :
            if(guavaCount == 0)
            {
                guavaCount = 0;
            }else{
                guavaCount--;
            }
            document.getElementById('guava_count').value = guavaCount;
            document.getElementById('guava_price').value = guavaCount + " X "+ guavaPrice;
            totalGuavaPrice =  document.getElementById('total_guava_price').value = guavaCount * guavaPrice;
            document.getElementById('total_price').value = parseInt(totalApplePrice)+parseInt(totalMangoPrice)+parseInt(totalGuavaPrice);

        break;
    }

}
console.log('mangoCount')