// Storybook
import type { StoryObj, Meta } from "@storybook/react";

import AppSkeleton from "../AppSkeleton";

/**
 * Base skeleton loading component
 */
const meta = {
  parameters: {
    layout: "centered",
  },
  title: "Example/AppSkeleton",
  component: AppSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof AppSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: "24px",
    width: "400px",
  },
};
