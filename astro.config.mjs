import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docsgeek.io/course/",
  base: "/course",
  build: {
    format: "file",
  },
  integrations: [
    starlight({
      title: "Full-stack tech writing course",

      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        { label: "Landing page", link: "/landing-page" },
        { label: "Quickstart", link: "/quickstart" },
        {
          label: "Concepts",
          collapsed: true,
          items: [
            { label: "API introduction", link: "/concepts/api-introduction" },
            { label: "Key concepts", link: "/concepts/key-concepts" },
            { label: "Use cases", link: "/concepts/use-cases" },
            { label: "Resources", link: "/concepts/resources" },
            { label: "Data models", link: "/concepts/data-models" },
            { label: "Best practices", link: "/concepts/best-practices" },
          ],
        },
        {
          label: "About the REST API",
          collapsed: true,
          items: [
            { label: "HTTP method", link: "/about/http-method" },
            { label: "Base url", link: "/about/base-url" },
            { label: "Path", link: "/about/path" },
            { label: "Media types", link: "/about/media-types" },
            { label: "Authentication", link: "/about/authentication" },
            { label: "Query Parameters", link: "/about/query-parameters" },
            { label: "Path parameters", link: "/about/path-parameters" },
            { label: "Body parameters", link: "/about/body-parameters" },
            { label: "Versioning", link: "/about/versioning" },
            { label: "Rate limits", link: "/about/rate-limits" },
            { label: "Pagination", link: "/about/pagination" },
            { label: "Response codes", link: "/about/response-codes" },
            { label: "Error handling", link: "/about/error-handling" },
          ],
        },
        {
          label: "Getting started",
          collapsed: true,
          items: [
            { label: "Prerequisites", link: "/getting-started/prerequisites" },
            {
              label: "Installation and setup",
              link: "/getting-started/installation-setup",
            },
            {
              label: "Authenticating",
              link: "/getting-started/authenticating-requests",
            },
            {
              label: "Making your first API call",
              link: "/getting-started/making-first-api-call",
            },
            {
              label: "Response handling",
              link: "/getting-started/response-handling",
            },
            {
              label: "Additional resources",
              link: "/getting-started/additional-resources",
            },
          ],
        },
        {
          label: "Recipes",
          collapsed: true,
          items: [
            { label: "Recipe 1", link: "/recipes/recipe-1" },
            { label: "Recipe 2", link: "/recipes/recipe-2" },
          ],
        },
        {
          label: "Cookbooks",
          collapsed: true,
          items: [
            { label: "Cookbook 1", link: "/cookbooks/cookbook-1" },
            { label: "Cookbook 2", link: "/cookbooks/cookbook-2" },
          ],
        },
        {
          label: "Code samples",
          collapsed: true,
          items: [
            { label: "curl", link: "/code-samples/curl" },
            { label: "javascript", link: "/code-samples/javascript" },
            { label: "python", link: "/code-samples/python" },
          ],
        },
        {
          label: "Libraries",
          collapsed: true,
          items: [
            { label: "Library 1", link: "/libraries/library-1" },
            { label: "Library 2", link: "/libraries/library-2" },
          ],
        },
        {
          label: "Integrations",
          collapsed: true,
          items: [
            { label: "Integration 1", link: "/integrations/integration-1" },
            { label: "Integration 2", link: "/integrations/integration-2" },
          ],
        },
        {
          label: "Reference",
          collapsed: true,
          items: [
            {
              label: "OpenAPI Description",
              link: "/reference/openapi-description",
            },
            {
              label: "Basic terminology",
              link: "/reference/basic-terminology",
            },
            {
              label: "Best practices",
              link: "/reference/best-practices",
            },
          ],
        },
        {
          label: "Get support",
          link: "/get-support",
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
        "@fontsource-variable/open-sans",
        "@fontsource/pt-sans",
        "@fontsource-variable/quicksand",
        "@fontsource/source-sans-pro",
      ],
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
