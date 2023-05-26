import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Bookmark = {
  args: {
    primary: true,
  },
};
