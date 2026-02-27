import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "green",
      maxWidth: "5xl",
      mx: "auto",
    },
  },
});

export const system = createSystem(defaultConfig, config);
