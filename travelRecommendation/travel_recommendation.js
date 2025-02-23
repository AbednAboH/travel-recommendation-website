const searchBtn =document.getElementById("SearchInput");
function search(){
    const input=document.getElementById(SearchInput);
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        if (input.toLowerCase()=="beach"){

        }
        else if (input.toLowerCase()=="countr"){

        }
        else if (input.toLowerCase()=="templ"){
            
        }
        else{
            // display a message
        }    
    
    })
    .catch(error=> console.error('Error:', error))
}

