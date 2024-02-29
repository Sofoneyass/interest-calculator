let calculatebtn = document.getElementById
("calculate-btn" );
let result = document.getElementById
("result");
let calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration"). value;
    let interest = duration == "year" ? (p*r*t)/100 : 
    (p * r * t)/1200;
    let amount = p + interest;

    result.innerHTML = `<div>principal amount: <span>$${ p.toFixed(2)}</span></div>
        <div>total interest: <span>$${
            interest.toFixed(2)
        }<span/><div/> 
        <div>total amount: <span>$${amount.toFixed(2)}</span><div/>`;
};
calculatebtn.addEventListener("click",calculate);
window.addEventListener("load", calculate);