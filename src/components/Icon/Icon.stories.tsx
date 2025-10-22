import { Meta, StoryObj } from "@storybook/react";
import {
  AddIcon,
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  AtSignIcon,
  AttachmentIcon,
  BellIcon,
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  DragHandleIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  InfoIcon,
  InfoOutlineIcon,
  LinkIcon,
  LockIcon,
  MinusIcon,
  MoonIcon,
  NotAllowedIcon,
  PhoneIcon,
  PlusSquareIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  RepeatIcon,
  RepeatClockIcon,
  SearchIcon,
  Search2Icon,
  SettingsIcon,
  SmallAddIcon,
  SmallCloseIcon,
  SpinnerIcon,
  StarIcon,
  SunIcon,
  TimeIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  UnlockIcon,
  UpDownIcon,
  ViewIcon,
  ViewOffIcon,
  WarningIcon,
  WarningTwoIcon,
  Icon,
} from "./Icon";
import { CompassIcon } from "./CompassIcon";
import { EducationIcon } from "./EducationIcon";
import { HealthIcon } from "./HealthIcon";
import { HousingIcon } from "./HousingIcon";
import { InfrastructureIcon } from "./InfrastructureIcon";
import { ParksIcon } from "./ParksIcon";
import { PeopleIcon } from "./PeopleIcon";
import { SafetyIcon } from "./SafetyIcon";
import { TransportationIcon } from "./TransportationIcon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    boxSize: 6,
  },
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>Default: </p>
        <Icon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>AddIcon: </p>
        <AddIcon {...args}></AddIcon>
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ArrowBackIcon: </p>
        <ArrowBackIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ArrowDownIcon: </p>
        <ArrowDownIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ArrowForwardIcon: </p>
        <ArrowForwardIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ArrowLeftIcon: </p>
        <ArrowLeftIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ArrowRightIcon: </p>
        <ArrowRightIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ArrowUpIcon: </p>
        <ArrowUpIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ArrowUpDownIcon: </p>
        <ArrowUpDownIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>AtSignIcon: </p>
        <AtSignIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>AttachmentIcon: </p>
        <AttachmentIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>BellIcon: </p>
        <BellIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>CalendarIcon: </p>
        <CalendarIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ChatIcon: </p>
        <ChatIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>CheckIcon: </p>
        <CheckIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>CheckCircleIcon: </p>
        <CheckCircleIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ChevronDownIcon: </p>
        <ChevronDownIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ChevronLeftIcon: </p>
        <ChevronLeftIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ChevronRightIcon: </p>
        <ChevronRightIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ChevronUpIcon: </p>
        <ChevronUpIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>CloseIcon: </p>
        <CloseIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>CompassIcon: </p>
        <CompassIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>CopyIcon: </p>
        <CopyIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>DeleteIcon: </p>
        <DeleteIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>DownloadIcon: </p>
        <DownloadIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>DragHandleIcon: </p>
        <DragHandleIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>EditIcon: </p>
        <EditIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>EmailIcon: </p>
        <EmailIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ExternalLinkIcon: </p>
        <ExternalLinkIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>HamburgerIcon: </p>
        <HamburgerIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>InfoIcon: </p>
        <InfoIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>InfoOutlineIcon: </p>
        <InfoOutlineIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>LinkIcon: </p>
        <LinkIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>LockIcon: </p>
        <LockIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>MinusIcon: </p>
        <MinusIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>MoonIcon: </p>
        <MoonIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>NotAllowedIcon: </p>
        <NotAllowedIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>PhoneIcon: </p>
        <PhoneIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>PlusSquareIcon: </p>
        <PlusSquareIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>QuestionIcon: </p>
        <QuestionIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>QuestionOutlineIcon: </p>
        <QuestionOutlineIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>RepeatIcon: </p>
        <RepeatIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>RepeatClockIcon: </p>
        <RepeatClockIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>SearchIcon: </p>
        <SearchIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>Search2Icon: </p>
        <Search2Icon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>SettingsIcon: </p>
        <SettingsIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>SmallAddIcon: </p>
        <SmallAddIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>SmallCloseIcon: </p>
        <SmallCloseIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>SpinnerIcon: </p>
        <SpinnerIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>StarIcon: </p>
        <StarIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>SunIcon: </p>
        <SunIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>TimeIcon: </p>
        <TimeIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>TriangleDownIcon: </p>
        <TriangleDownIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>TriangleUpIcon: </p>
        <TriangleUpIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>UnlockIcon: </p>
        <UnlockIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>UpDownIcon: </p>
        <UpDownIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ViewIcon: </p>
        <ViewIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ViewOffIcon: </p>
        <ViewOffIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>WarningIcon: </p>
        <WarningIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>WarningTwoIcon: </p>
        <WarningTwoIcon {...args} />
      </div>
    </div>
  ),
};

export const Darkable: Story = {
  args: {
    boxSize: 6,
    dark: false,
  },
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>EducationIcon : </p>
        <EducationIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>HealthIcon: </p>
        <HealthIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>HousingIcon: </p>
        <HousingIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>InfrastructureIcon: </p>
        <InfrastructureIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>ParksIcon: </p>
        <ParksIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>PeopleIcon: </p>
        <PeopleIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>SafetyIcon: </p>
        <SafetyIcon {...args} />
      </div>
      <div
        style={{
          display: "flex",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.25rem",
          borderWidth: "0.1rem",
        }}
      >
        <p style={{ padding: "1rem" }}>TransportationIcon: </p>
        <TransportationIcon {...args} />
      </div>
    </div>
  ),
};
