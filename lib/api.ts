require('dotenv').config();

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/** Timeout in ms for WordPress API calls. Prevents hanging and "Connection closed" when hosting is slow. */
const FETCH_TIMEOUT_MS = 20_000;

async function fetchWithTimeout(
  url: string,
  options: RequestInit & { timeout?: number } = {}
): Promise<Response | null> {
  const { timeout = FETCH_TIMEOUT_MS, ...fetchOptions } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    return res;
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      console.error('[api] Request timeout:', url);
    } else {
      console.error('[api] Request failed:', err);
    }
    return null;
  } finally {
    clearTimeout(id);
  }
}

export async function getAccentContent() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return { posts: { nodes: [] } };
  }

  const res = await fetchWithTimeout(API_URL, {
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
   
  if (!res || !res.ok) {
    return { posts: { nodes: [] } };
  }

  const json = await res.json();
  return json.data ?? { posts: { nodes: [] } };
}

export async function getPartyCards() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return { posts: { nodes: [] } };
  }

  const res = await fetchWithTimeout(API_URL, {
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
   
  if (!res || !res.ok) {
    return { posts: { nodes: [] } };
  }

  const json = await res.json();
  return json.data ?? { posts: { nodes: [] } };
}

export async function getReviewsNotes() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return { posts: { nodes: [] } };
  }

  const res = await fetchWithTimeout(API_URL, {
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
   
  if (!res || !res.ok) {
    return { posts: { nodes: [] } };
  }

  const json = await res.json();
  return json.data ?? { posts: { nodes: [] } };
}

export async function getReviewsCategory() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return { categories: { nodes: [] } };
  }

  const res = await fetchWithTimeout(API_URL, {
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
   
  if (!res || !res.ok) {
    return { categories: { nodes: [] } };
  }

  const json = await res.json();
  return json.data ?? { categories: { nodes: [] } };
}

export async function getNewsletterContent() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return null;
  }

  const res = await fetchWithTimeout(API_URL, {
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
   
  if (!res || !res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data ?? null;
}

export async function getPrimaryMenu() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return { menuItems: { nodes: [] } };
  }

  const res = await fetchWithTimeout(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
        menuItems(where: {location: PRIMARY}) {
          nodes {
            title
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
   
  if (!res || !res.ok) {
    return { menuItems: { nodes: [] } };
  }

  const json = await res.json();
  return json.data ?? { menuItems: { nodes: [] } };
}

export async function getAboutContent() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return null;
  }

  const res = await fetchWithTimeout(API_URL, {
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
   
  if (!res || !res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data ?? null;
}

export async function getPostBySlug(slug: string) {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return null;
  }

  const res = await fetchWithTimeout(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
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
   
  if (!res || !res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data ?? null;
}

export async function getMetaBySlug(slug: string) {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return null;
  }

  const res = await fetchWithTimeout(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
        post(id: "${slug}", idType: URI) {
          title
          excerpt
          uri
          slug
          status
          categories(where: {name: "events"}) {
            nodes {
              name
              slug
            }
          }
          meta {
            metaTitle
            metaDescription
            metaOpengraphimage {
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
   
  if (!res || !res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data ?? null;
}

export async function getWorkshopBySlug(slug: string) {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return null;
  }

  const res = await fetchWithTimeout(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
        post(id: "${slug}", idType: URI) {
          title
          excerpt
          content
          uri
          slug
          status
          categories(where: {name: "blog"}) {
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
   
  if (!res || !res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data ?? null;
}

export async function getContactContent() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return null;
  }

  const res = await fetchWithTimeout(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
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
   
  if (!res || !res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data ?? null;
}

export async function getPartyBySlug(slug: string) {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return null;
  }

  const res = await fetchWithTimeout(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
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
   
  if (!res || !res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data ?? null;
}

export async function getEvents() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return { posts: { nodes: [] } };
  }

  const res = await fetchWithTimeout(API_URL, {
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
   
  if (!res || !res.ok) {
    return { posts: { nodes: [] } };
  }

  const json = await res.json();
  return json.data ?? { posts: { nodes: [] } };
}

export async function getWorkshops() {
	if (!API_URL) {
    console.error('API_URL is not defined.');
    return { posts: { nodes: [] } };
  }

  const res = await fetchWithTimeout(API_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`{
        posts(where: {status: PUBLISH, categoryName: "blog"}) {
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
          }
        }
      }`
    }),
  });
   
  if (!res || !res.ok) {
    return { posts: { nodes: [] } };
  }

  const json = await res.json();
  return json.data ?? { posts: { nodes: [] } };
}
