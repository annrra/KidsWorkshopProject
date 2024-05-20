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
              accentUrl {
                nodes {
                  uri
                  link
                  slug
                }
              }
              accentPromoLink {
                nodes {
                  uri
                  link
                  slug
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
    cache: 'no-store',
    body: JSON.stringify({
      query:`{
        posts(
          where: {status: PUBLISH, categoryName: "party", orderby: {field: DATE, order: ASC}}
        ) {
          nodes {
            title
            excerpt
            uri
            featuredImage {
              node {
                sourceUrl
                srcSet
                uri
              }
            }
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
            reviews {
              subheading
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

export async function getPostBySlug(slug: string) {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    cache: 'no-store',
    body: JSON.stringify({
      query:`{
        post(id: "${slug}", idType: URI) {
          title
          excerpt
          content
          uri
          slug
          status
          categories(where: {name: "events"}) {
            nodes {
              name
              slug
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

export async function getContactContent() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    cache: 'no-store',
    body: JSON.stringify({
      query:`{
        pageBy(uri: "contact") {
          title
          content
          slug
          uri
          featuredImage {
            node {
              sourceUrl
              srcSet
              uri
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

export async function getPartyBySlug(slug: string) {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    cache: 'no-store',
    body: JSON.stringify({
      query:`{
        post(id: "${slug}", idType: URI) {
          title
          excerpt
          content
          slug
          status
          categories(where: {name: "party"}) {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              srcSet
              uri
            }
          }
          partycontent {
            partyContentMainTitle
            partyContentMainInfo
            partyContentPrimaryImage {
              node {
                sourceUrl
              }
            }
            partyContentPrimaryIcon {
              node {
                sourceUrl
              }
            }
            partyContentPrimaryActionText
            partyContentPrimaryActionUrl
            partyContentSectionSubtitle
            partyContentSectionInfo
            partyContentSectionImage {
              node {
                sourceUrl
              }
            }
            partyContentSectionIcon {
              node {
                sourceUrl
              }
            }
            partyContentOutroSubtitle
            partyContentOutroInfo
            partyContentOutroImage {
              node {
                sourceUrl
              }
            }
            partyContentOutroIcon {
              node {
                sourceUrl
              }
            }
            partyContentClosure
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

export async function getEvents() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
        posts(where: {status: PUBLISH, categoryName: "events"}) {
          nodes {
            title
            slug
            excerpt
            content
            uri
            featuredImage {
              node {
                sourceUrl
                srcSet
                uri
              }
            }
            events {
              eventStatus
              eventWhen
              eventWhere
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
