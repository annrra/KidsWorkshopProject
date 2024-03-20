require('dotenv').config();

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAccentContent() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
        posts(where: {status: PUBLISH, categoryName: "accent"}) {
          nodes {
            title
            excerpt
            uri
            databaseId
            content
            accent {
              accentHeading1
              accentHeading2
              accentDate
              accentButton
              accentVideo {
                node {
                  sourceUrl
                  uri
                }
              }
            }
            featuredImage {
              node {
                sourceUrl
                srcSet
                uri
              }
            }
          }
        }
      }`
    }),
  });
   
  // Handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();
  return json.data;
}

export async function getPartyCards() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
				posts(
					where: {status: PUBLISH, categoryName: "party", orderby: {field: DATE, order: ASC}}
				) {
					nodes {
						title
						excerpt
						uri
						party {
							partycardIcon {
								node {
									sourceUrl
									uri
								}
							}
							partycardImage {
								node {
									sourceUrl
									uri
								}
							}
						}
					}
				}
			}`
    }),
  });
   
  // Handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();
  return json.data;
}

export async function getReviewsNotes() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
				posts(where: {status: PUBLISH, categoryName: "salute"}) {
					nodes {
						title
						content
						excerpt
						featuredImage {
							node {
								sourceUrl
								uri
							}
						}
					}
				}
			}`
    }),
  });
   
  // Handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();
  return json.data;
}

export async function getReviewsCategory() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
				categories(where: {name: "salute"}) {
					nodes {
						description
						uri
						slug
					}
				}
			}`
    }),
  });
   
  // Handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();
  return json.data;
}

export async function getNewsletterContent() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
				pageBy(uri: "newsletter") {
					title
					uri
					slug
					content
				}
			}`
    }),
  });
   
  // Handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();
  return json.data;
}

export async function getPrimaryMenu() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
				menuItems(where: {location: PRIMARY}) {
					nodes {
						label
						description
						databaseId
						url
						uri
					}
				}
			}`
    }),
  });
   
  // Handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();
  return json.data;
}

export async function getAboutContent() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
        pageBy(uri: "about") {
          content
          featuredImage {
            node {
              sourceUrl
              srcSet
              uri
            }
          }
          gallery {
            image1 {
              node {
                sourceUrl
              }
            }
            image2 {
              node {
                sourceUrl
              }
            }
            image3 {
              node {
                sourceUrl
              }
            }
            image4 {
              node {
                sourceUrl
              }
            }
            image5 {
              node {
                sourceUrl
              }
            }
            image6 {
              node {
                sourceUrl
              }
            }
          }
        }
      }`
    }),
  });
   
  // Handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();
  return json.data;
}
