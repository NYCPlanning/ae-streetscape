import { Button, Link, Text } from "@chakra-ui/react";
import { useToast } from "./Toast";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Meta, StoryObj } from "@storybook/react";
import { theme } from "../../theme";

const meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  argTypes: {
    ...getThemingArgTypes(theme, "Toast"),
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: function Render() {
    const toast = useToast();
    return (
      <Button
        onClick={() =>
          toast({
            title: "This is the default toast title.",
            description: "This is the default toast description.",
          })
        }
      >
        Show Base Toast
      </Button>
    );
  },
};

export const Success: Story = {
  render: function Render() {
    const toast = useToast();
    return (
      <Button
        backgroundColor={"state.success"}
        onClick={() =>
          toast({
            position: "bottom-right",
            isClosable: true,
            status: "success",
            title: "Success!",
            description: "Marshmallow successfully toasted.",
            duration: 10000,
          })
        }
      >
        Show Success Toast
      </Button>
    );
  },
};

export const Error: Story = {
  render: function Render() {
    const toast = useToast();
    return (
      <Button
        backgroundColor={"state.error"}
        onClick={() =>
          toast({
            position: "bottom-right",
            isClosable: true,
            status: "error",
            title: "Error.",
            description: "Your marshmallow has burned.",
            duration: null,
          })
        }
      >
        Show Error Toast
      </Button>
    );
  },
};

export const Loading: Story = {
  render: function Render() {
    const toast = useToast();
    return (
      <Button
        backgroundColor={"state.warning"}
        onClick={() =>
          toast({
            position: "bottom-right",
            isClosable: true,
            status: "loading",
            title: "Loading...",
            description: "Toasting your marshmallow.",
            duration: null,
          })
        }
      >
        Show Loading Toast
      </Button>
    );
  },
};

export const ToastWithPromiseThatSucceeds: Story = {
  render: function Render() {
    const toast = useToast();
    return (
      <Button
        backgroundColor={"state.success"}
        onClick={() => {
          // Create an example promise that resolves in 5s
          const examplePromise = new Promise((resolve) => {
            setTimeout(() => resolve(200), 5000);
          });

          // Will display the loading toast until the promise is either resolved
          // or rejected.
          toast.promise(examplePromise, {
            success: {
              position: "bottom-right",
              isClosable: true,
              title: "Success!",
              description: "Export saved to your downloads folder.",
              duration: 10000,
            },
            error: {
              position: "bottom-right",
              isClosable: true,
              title: "Error. Please try again.",
              description: (
                <Text>
                  Need help?{" "}
                  <Link
                    href="mailto:help@example.com"
                    textDecoration={"underline"}
                    color={"primary.600"}
                  >
                    E-mail us
                  </Link>
                  .
                </Text>
              ),
              duration: null,
            },
            loading: {
              position: "bottom-right",
              isClosable: true,
              title: "Export in progress...",
              description: "This may take a moment.",
              duration: null,
            },
          });
        }}
      >
        Show Toast with a Promise that Succeeds
      </Button>
    );
  },
};

export const ToastWithPromiseThatFails: Story = {
  render: function Render() {
    const toast = useToast();
    return (
      <Button
        backgroundColor={"state.error"}
        onClick={() => {
          // Create an example promise that resolves in 5s
          const examplePromise = new Promise((_resolve, reject) => {
            setTimeout(() => reject(500), 5000);
          });

          // Will display the loading toast until the promise is either resolved
          // or rejected.
          toast.promise(examplePromise, {
            success: {
              position: "bottom-right",
              isClosable: true,
              title: "Success!",
              description: "Export saved to your downloads folder.",
              duration: 10000,
            },
            error: {
              position: "bottom-right",
              isClosable: true,
              title: "Error. Please try again.",
              description: (
                <Text>
                  Need help?{" "}
                  <Link
                    href="mailto:help@example.com"
                    textDecoration={"underline"}
                    color={"primary.600"}
                  >
                    E-mail us
                  </Link>
                  .
                </Text>
              ),
              duration: null,
            },
            loading: {
              position: "bottom-right",
              isClosable: true,
              title: "Export in progress...",
              description: "This may take a moment.",
              duration: null,
            },
          });
        }}
      >
        Show Toast with a Promise that Fails
      </Button>
    );
  },
};
