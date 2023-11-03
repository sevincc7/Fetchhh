const div= document.getElementById("cate")
const btn= document.getElementById("btn")
const iput= document.getElementById("inpOne")


fetch('https://northwind.vercel.app/api/customers')
.then(res => res.json())
.then(data => {
    data.forEach(item => {
        const p = document.createElement('p')
        p.textContent = `${item.name} - ${item.description} - ${item.id}`
      div.appendChild(p)
    })
})

btn.addEventListener('click', function () {
    fetch('https://northwind.vercel.app/api/customers', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inpOne.value,
           }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data gonderildi" + data);
          });
})

function FetchDel() {
    let url = `https://northwind.vercel.app/api/customers/SKmbo_5`;

    fetch(url, {
      method: "DELETE",
    }).then((res) => console.log(res));
  }