const searchBtn =document.getElementById("btnSearch");
const clearBtn =document.getElementById("btnClr");
function search(){
    const input=document.getElementById("SearchInput").value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ``;
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        if (input.toLowerCase().includes("beach")){
            const beaches=getTwoRandomItems(data.beaches);
            beaches.forEach(beach=>{
                resultDiv.innerHTML+=`<div><img src="${beach.imageUrl}" alt="hjh"></img><div><h2>${beach.name}</h2><p>${beach.description}</p><button id='btn${beach.id}'>Visit</button></div></div>`;
            })

        
        }
        else if (input.toLowerCase().includes("countr")){
            const countries=getTwoRandomItems(data.countries);
            var selectedCountries=[];
            console.log(countries);
            countries.forEach(country => {
                let randomIndex=Math.floor(Math.random() * country.cities.length);
                selectedCountries.push([country.cities[randomIndex],country.id]);
            });
            console.log(selectedCountries);
            selectedCountries.forEach(country=>{
                resultDiv.innerHTML+=`<div><img src="${country[0].imageUrl}" alt="hjh"></img><div><h2>${country[0].name}</h2><p>${country[0].description}</p><button id='btn${country[1].id}'>Visit</button></div></div>`;
            })
            console.log(selectedCountries);
          
        }
        else if (input.toLowerCase().includes("templ")){
            const temples=getTwoRandomItems(data.temples);
            temples.forEach(temple=>{
                resultDiv.innerHTML+=`<div><img src="${temple.imageUrl}" alt="hjh"></img><div><h2>${temple.name}</h2><p>${temple.description}</p><button id='btn${temple.id}'>Visit</button></div></div>`;
              
            })
            
        }
        else{
            console.log("didn't reach");
            // display a message
        }    
    
    })
    .catch(error=> console.error('Error:', error))
}

function getTwoRandomItems(arr) {
    let selected = new Set();
    while (selected.size < 2) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        selected.add(arr[randomIndex]);
    }
    return [...selected];
}
function cleartext(){
    const input=document.getElementById("SearchInput");
    const resultDiv = document.getElementById('result');
    input.value="";
    input.placeholder="Enter a destinations"
    resultDiv.innerHTML=``;
}
searchBtn.addEventListener('click',search);
clearBtn.addEventListener('click',cleartext);

