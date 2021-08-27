function pickNumber(){
    const arr = [];
    while(arr.length< 6){
        let random = Math.floor(Math.random()*44+1);
        if(arr.includes(random)) continue;
        arr.push(random);
    }
    arr.sort(function(a, b) {
        if(a > b) return 1;
        else return -1;
      });

    const els = document.querySelectorAll("#lucky-numbers li");
    els.forEach(function(el, index){
        el.innerText = arr[index];
    });
    console.log(arr);
}