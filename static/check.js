
function show(name,email,balance){
    document.getElementById("name").innerHTML=name
    document.getElementById("from").value=name
    document.getElementById("email").innerHTML=email
    document.getElementById("balance").innerHTML=balance
    table1=document.getElementById("viewCustomers")
    table2=document.getElementById("showCustomer")
    form=document.getElementById("show")
    table1.style.display="none";
    table2.style.display="inline-table";
    form.style.display="table";
   
}
function success(){
    var amount= document.getElementById("amount").value
    if(amount== 0 ){
        alert("Transaction failed");
        return false;
    }
    document.getElementById("success").innerHTML="Transaction Successful"
}


