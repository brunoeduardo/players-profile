const url = 'http://localhost:4000/graphql';
let queryItens = '';


const getData = async () => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify({query: `{${queryItens}}`})
    }

    try {
        const response = await fetch(url, options);
        
        if(!response.ok) throw new Error(`Response status: ${response.status}`);
        
        const json = await response.json();
        
        document.getElementById('response-body').innerHTML = JSON.stringify(json.data);
        
    } catch (error) {
        console.error(error.message)
    }
}

document.getElementById("btn-send").addEventListener("click", (event) => {
    event.preventDefault()
    
    queryItens = '';
    
    document.getElementsByName('infoValue').forEach(e => {
        if(e.checked) queryItens += `${e.value} `
    })
    getData();
});