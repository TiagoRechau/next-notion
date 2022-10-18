// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client';

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pageId = process.env.NOTION_PAGE_ID;
  const blocks = await client.blocks.children.list({ block_id: pageId as string});
  const page = await client.pages.retrieve({ page_id: pageId as string});
  res.status(200).json({page, blocks})
}
