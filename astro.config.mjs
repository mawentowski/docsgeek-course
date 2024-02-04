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
        { label: "API Introduction", link: "/api-introduction" },
        {
          label: "About the REST API",
          items: [
            { label: "Overview", link: "/about" },
            {
              label: "About requests",
              items: [
                { label: "Overview", link: "/about/about-requests" },
                {
                  label: "HTTP Method",
                  link: "/about/about-requests/http-method",
                },
                {
                  label: "Base URL",
                  link: "/about/about-requests/base-url",
                },
              ],
            },
          ],
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
