fetch('http://localhost:4000/transfer')
.then((apidata)=>{
    console.log(apidata)
    return apidata.json();
})
.then((actualdata) =>{
    console.log(actualdata)
    l=actualdata.length
    var table= document.getElementById("customers")
    var i=0
    for(let element of actualdata)
    {
        i=i+1
        let row = table.insertRow();
        for (k in element) {
            if(k=="_id"){
                let cell = row.insertCell()
                let text=document.createTextNode(i)
                cell.appendChild(text)
            }  
            if( k=="from"||k=="name"||k=="amount"){
                let cell = row.insertCell()
                let text = document.createTextNode(element[k]);
                cell.appendChild(text);
            }
        }
    }

})
       
.catch((error)=> {
    console.log(error)
});