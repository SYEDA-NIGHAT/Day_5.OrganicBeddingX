// import { defineConfig } from "sanity";
// import { deskTool } from "sanity/desk";
// import {product} from "../schemaTypes/product"; // Adjust the path based on your folder structure

// export default defineConfig({
//   projectId: "your_project_id", // Replace with your actual project ID
//   dataset: "production",
//   title: "Organic Bedding Store",
//   apiVersion: "2023-01-01",
//   plugins: [deskTool()],
//   schema: {
//     types: [product], // Use the imported schema here
//   },
// });


import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { product } from "../schemaTypes/product";

export default defineConfig({
  projectId: "your_project_id", // Replace with your actual project ID
  dataset: "production",
  title: "Organic Bedding Store",
  apiVersion: "2023-01-01",
  plugins: [deskTool()],
  schema: {
    types: [product], // Add the imported schema here
  },
});
