function cals() {
    let tmarkOne = parseFloat(document.getElementById("U-num").value);
    let tmarkTwo = parseFloat(document.getElementById("C-num").value);
    let tmarkThree = parseFloat(document.getElementById("B-num").value);
    let tmarkFour = parseFloat(document.getElementById("M-num").value);
    let tmarkFive = parseFloat(document.getElementById("E-num").value);

    let T_add = tmarkOne + tmarkTwo + tmarkThree + tmarkFour + tmarkFive;

    document.getElementById("Add").innerHTML = T_add;

    let Urdu = parseFloat(document.getElementById("uduResult").value);
    let Chemistry = parseFloat(document.getElementById("chemResult").value);
    let Biology = parseFloat(document.getElementById("bioResult").value);
    let Math = parseFloat(document.getElementById("mathResult").value);
    let English = parseFloat(document.getElementById("engResult").value);
    let obt = Urdu + Chemistry + Biology + Math + English;
    document.getElementById("Obtn").innerHTML = obt;
    let per = T_add * 100 / obt ;
    document.getElementById("Percentage").innerHTML = per.toFixed(2);
    
    if (per >= 80 && per < 100)  {
        document.getElementById("Grade").innerText = "A+1";

    }    
    else if (per >= 70 && per < 80)  {
        document.getElementById("Grade").innerText = "B";

    }    
    else if (per >= 60 && per < 70) {
        document.getElementById("Grade").innerText = "C";
    }
    
    else if (per >= 50 && per < 60) {
        document.getElementById("Grade").innerText = "D";
    }
    else{
        document.getElementById("Grade").innerText = "Fail";
    }
}