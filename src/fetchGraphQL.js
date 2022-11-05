async function fetchGraphQL(text, variables) {
    const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
  
    return await response.json();
  }
  
  export default fetchGraphQL;