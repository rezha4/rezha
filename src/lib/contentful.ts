import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const fetchEntries = async () => {
  console.log(process.env.CONTENTFUL_SPACE_ID)
  console.log(process.env.CONTENTFUL_ACCESS_TOKEN)
  const entries = await client.getEntries();
  return entries.items;
};
