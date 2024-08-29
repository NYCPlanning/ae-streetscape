import { Meta, StoryObj } from "@storybook/react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "./Modal";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { theme } from "../../theme";
import { useArgs } from "@storybook/preview-api";
import { useRef } from "react";
import { Button } from "../Button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Modal"),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isOpen: false,
    children: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    isCentered: true,
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();
    function toggleOpen() {
      updateArgs({ isOpen: !isOpen });
    }
    const btnRef = useRef(null);

    return (
      <>
        <Button ref={btnRef} onClick={toggleOpen}>
          Open
        </Button>
        <Modal {...args} onClose={toggleOpen} finalFocusRef={btnRef}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{args.children}</ModalBody>
            <ModalFooter>
              <Button variant="primary" onClick={toggleOpen}>
                Close
              </Button>
              <Button variant="secondary">Secondary action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};
