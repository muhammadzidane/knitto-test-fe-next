// Storybook
import type { Meta, StoryObj } from "@storybook/react";

// Components
import AppSkeleton from "../AppSkeleton";

/**
 * Base skeleton loading component
 */
const meta = {
  title: "Example/AppSkeleton",
  component: AppSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "400px",
    height: "24px",
  },
};
