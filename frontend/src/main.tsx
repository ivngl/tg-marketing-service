import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import type { ComponentType } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./app/theme";
import "vite/modulepreload-polyfill";
import { createInertiaApp } from "@inertiajs/react";

const pages = import.meta.glob("./pages/**/*.tsx");

document.addEventListener("DOMContentLoaded", () => {
 createInertiaApp({
  resolve: (name: string) => {
   const importPage = pages[`./pages/${name}.tsx`];
   if (!importPage) {
    throw new Error(`Page ${name} not found`);
   }
   return importPage().then(
    (module) => (module as { default: ComponentType }).default,
   );
  },
  setup({ el, App, props }) {
   createRoot(el).render(
    <StrictMode>
     <MantineProvider theme={theme}>
      <App {...props} />
     </MantineProvider>
    </StrictMode>,
   );
  },
 });
});
