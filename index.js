const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        document.querySelector("p").innerText=`${data.activity}`;
        document.querySelector("h1").textContent="🦋 HappyBot 🦋";
        document.body.classList.add("fun");
    })
})