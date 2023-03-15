import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: proccess.env.CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Posts",
        name: "post",
        path: "content/posts",
        defaultItem: () =>
        {
          return {
            date: today,
          }
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true

          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            ui: {
              dateFormat: "YYYY-MM-DD",
              component: "date",
              timeFormat: false,
            }
          },
          {
            type: "string",
            list: true,
            name: "categories",
            label: "Categories",
            ui: {
              component: "tags"
            }
          },
          {

            type: "object",
            name: "cover",
            label: "Cover",
            fields: [
              {
                type: "image",
                name: "image",
                label: "image",
              },
              {
                type: "string",
                name: "alt",
                label: "alt",
              },
              {
                type: "string",
                name: "caption",
                label: "caption",
              },
            ],
          },
        ],
      },
      {
        label: "Pages",
        name: "pages",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      }
    ],
  },
});
