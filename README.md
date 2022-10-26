# \[WIP\] Next Notion
This is a Next.js template for your website, using Notion as your content editor.

## Getting Started

1. Create a notion personal integration
2. Add the integration to the page that will be used has your website homepage
3. Add an .env.production with the keys
```
NOTION_ACCESS_TOKEN=<YOUR_NOTION_TOKEN>
NOTION_PAGE_ID=<YOUR_NOTION_MAIN_PAGE_ID>
```

### How to get the Notion Access Token?

1. Go to https://www.notion.so/my-integrations
2. Create new integration with *Read Content* permission
3. Get it from **Internal Integration Token**

### How to get Page ID?

You can fetch the Page ID from the URL of that page in your Notion app. If the Page URL is https://www.notion.so/your-worksapce/XXX?v=YYY&p=ZZZ, then the ID of the Page would be ZZZ. **Make sure to remove the hyphens from the page ID.**

### How to add the tool as a connection to the notion page?

1. Go to the page you want to have as main page
2. Click on the 3 dots on top right
3. Click add connection and search for the name of the integration you created before




