import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: <></>,
  },
  render: function Render() {
    return (
      <RadioGroup>
        <Radio value="default">Example Label</Radio>
      </RadioGroup>
    );
  },
};

export const Variants: Story = {
  args: {
    children: <></>,
  },
  render: function Render() {
    return (
      <RadioGroup value="checked">
        <table
          style={{ borderCollapse: "separate", borderSpacing: "20px 0px" }}
        >
          <thead>
            <tr>
              <th>Variant</th>
              <th>xs</th>
              <th>sm</th>
              <th>md</th>
              <th>lg</th>
              <th>xl</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>enabled, selected</td>
              <td>
                <Radio size="xs" value="checked">
                  xs
                </Radio>
              </td>
              <td>
                <Radio size="sm" value="checked">
                  sm
                </Radio>
              </td>
              <td>
                <Radio size="md" value="checked">
                  md
                </Radio>
              </td>
              <td>
                <Radio size="lg" value="checked">
                  lg
                </Radio>
              </td>
              <td>
                <Radio size="xl" value="checked">
                  xl
                </Radio>
              </td>
            </tr>
            <tr>
              <td>enabled, unselected</td>
              <td>
                <Radio size="xs" value="unchecked">
                  xs
                </Radio>
              </td>
              <td>
                <Radio size="sm" value="unchecked">
                  sm
                </Radio>
              </td>
              <td>
                <Radio size="md" value="unchecked">
                  md
                </Radio>
              </td>
              <td>
                <Radio size="lg" value="unchecked">
                  lg
                </Radio>
              </td>
              <td>
                <Radio size="xl" value="unchecked">
                  xl
                </Radio>
              </td>
            </tr>
            <tr>
              <td>disabled, selected</td>
              <td>
                <Radio size="xs" value="checked" isDisabled>
                  xs
                </Radio>
              </td>
              <td>
                <Radio size="sm" value="checked" isDisabled>
                  sm
                </Radio>
              </td>
              <td>
                <Radio size="md" value="checked" isDisabled>
                  md
                </Radio>
              </td>
              <td>
                <Radio size="lg" value="checked" isDisabled>
                  lg
                </Radio>
              </td>
              <td>
                <Radio size="xl" value="checked" isDisabled>
                  xl
                </Radio>
              </td>
            </tr>
            <tr>
              <td>disabled, unselected</td>
              <td>
                <Radio size="xs" value="unchecked" isDisabled>
                  xs
                </Radio>
              </td>
              <td>
                <Radio size="sm" value="unchecked" isDisabled>
                  sm
                </Radio>
              </td>
              <td>
                <Radio size="md" value="unchecked" isDisabled>
                  md
                </Radio>
              </td>
              <td>
                <Radio size="lg" value="unchecked" isDisabled>
                  lg
                </Radio>
              </td>
              <td>
                <Radio size="xl" value="unchecked" isDisabled>
                  xl
                </Radio>
              </td>
            </tr>
          </tbody>
        </table>
      </RadioGroup>
    );
  },
};
