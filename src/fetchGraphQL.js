async function fetchGraphQL(text, variables) {
  const REACT_APP_GITHUB_AUTH_TOKEN =
    '584a59441edc7c88ac00f6eee65253b6a3c757c0';

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://graphqlzero.almansi.me/api', {
    method: 'POST',
    headers: {
      //Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
