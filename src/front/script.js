const url = 'http://localhost:4000/graphql';

document.getElementById("btn-send").addEventListener("click", (event) => {
    event.preventDefault()
    getData(createQuery());   
});

const getData = async (query) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/JSON'
        },
        body: `${query}`
    }

    try {
        const response = await fetch(url, options);
        
        if(!response.ok) throw new Error(`Response status: ${response.status}`);
        
        const json = await response.json();
        const formatOptions = {
            indent: 3,
            lineNumbers: true,
            quoteKeys: true,
            trailingCommas: true 
   };
        document.getElementById('response-body').innerHTML = prettyPrintJson.toHtml(json.data, formatOptions);
        
    } catch (error) {
        console.error(error.message)
    }
}

const createQuery = () => {
    let queryItens = '';
    const idPlayer = document.getElementById('playerId').value.trim();

    document.getElementsByName('infoValue').forEach(e => {
        if(e.checked) queryItens += `${e.value} `
    });

    let fullQuerry = (
        idPlayer ?
        JSON.stringify({query: `{player(_id: "${idPlayer}"){${queryItens}}}`}) :
        JSON.stringify({query: `{players{${queryItens}}}`}));

    return fullQuerry;
}