module.exports = function toReadable (number) {
    let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let arr20 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let a = ""
    let hundreds, tens, ones;
    
        ones = number % 10;
        tens = (parseInt(number/10)) % 10;
        hundreds = parseInt(number / 100);
        for (let i = 0; i < 9; i++){
            if(i+1 == hundreds){
                a+=arr[i]+' hundred';
            }
        }
        if(tens==1){
            for (let i = 0; i < 10; i++){
                if(i == ones){
                    a+=' '+arr10[i];
                }
            }
        } 
        else if(tens==0){
            ;
        }
        else {
            for (let i = 2; i < 10; i++){
                if(i == tens){
                    a+=' '+arr20[i-2];
                }
            }
        }
        if(tens != 1){
            for (let i = 0; i < 9; i++){
                if(i+1 == ones){
                    a+=' '+arr[i];
                }
            }
        }
        if(number<100){
            a = a.trim();
        }
        if(number==0){
            a = 'zero';
        }
        return a;
    
}
