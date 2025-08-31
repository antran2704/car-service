"use client";

import { Button, createTheme } from "@mantine/core";

const configThemeMantine = createTheme({
  components: {
    Button: Button.extend({}),
  },
});

export default configThemeMantine;
