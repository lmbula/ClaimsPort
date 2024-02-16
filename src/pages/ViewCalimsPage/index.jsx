import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const membershipmenuOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const preauthorizationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const memberOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const toOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const captureClaimOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ViewCalimsPagePage = () => {
  const [group111value, setGroup111value] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 border border-black-900_7f border-solid font-roboto h-[1024px] mx-auto relative w-full">
        <div className="h-[1024px] md:h-[1621px] m-auto md:px-5 w-full">
          <div className="h-[1024px] md:h-[1621px] m-auto w-full">
            <div className="h-[1024px] md:h-[1621px] m-auto w-full">
              <div className="absolute h-[1024px] inset-[0] justify-center m-auto w-full">
                <Sidebar className="!sticky !w-40 bg-white-A700 border-black-900_3f border-r border-solid flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
                  <div className="flex flex-col gap-2.5 justify-start mt-[66px] w-full">
                    <div className="h-11 relative w-full">
                      <div className="flex flex-row gap-3.5 h-full items-start justify-center ml-[18px] mt-1.5 w-[46%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_home.svg"
                          alt="home"
                        />
                        <Text
                          className="mt-0.5 text-base text-light_blue-900"
                          size="txtRobotoRomanBold16"
                        >
                          Home
                        </Text>
                      </div>
                      <div className="absolute border-b border-black-900_3f border-solid h-11 inset-[0] justify-center m-auto w-full"></div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[18px] w-[54%] md:w-full">
                      <Img
                        className="h-4 mt-[3px] w-4"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="text-base text-light_blue-900"
                        size="txtRobotoRomanBold16"
                      >
                        Actions
                      </Text>
                    </div>
                  </div>
                  <div className="border-b border-black-900_3f border-solid h-11 mb-[871px] w-full"></div>
                </Sidebar>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <Img
                    className="h-[55px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle10.png"
                    alt="rectangleTen"
                  />
                </div>
                <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-2 right-[0] top-[5%] w-[90%]">
                  <SelectBox
                    className="font-medium leading-[normal] sm:ml-[0] ml-[22px] sm:mt-0 mt-[11px] text-base text-black-900 text-left w-[12%] sm:w-full"
                    placeholderClassName="text-black-900"
                    indicator={
                      <Img
                        className="h-7 mr-[0] w-[37px]"
                        src="images/img_arrowdown_black_900_28x37.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="membershipmenu"
                    options={membershipmenuOptionsList}
                    isSearchable={false}
                    placeholder="Membership"
                  />
                  <SelectBox
                    className="font-medium leading-[normal] sm:ml-[0] ml-[84px] sm:mt-0 mt-[11px] text-base text-black-900 text-left w-[15%] sm:w-full"
                    placeholderClassName="text-black-900"
                    indicator={
                      <Img
                        className="h-7 mr-[0] w-[37px]"
                        src="images/img_arrowdown_black_900_28x37.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group119"
                    options={preauthorizationOptionsList}
                    isSearchable={false}
                    placeholder="Preauthorization"
                  />
                  <Text
                    className="sm:ml-[0] ml-[33px] sm:mt-0 mt-[11px] text-base text-black-900"
                    size="txtRobotoRomanMedium16"
                  >
                    Claims
                  </Text>
                </div>
                <Line className="absolute bg-light_blue-900_19 h-px left-[0] top-[34%] w-[11%]" />
                <div className="absolute bg-white-A700 border border-light_blue-900_33 border-solid flex flex-col h-max inset-y-[0] items-start justify-start my-auto p-[126px] md:px-10 sm:px-5 right-[2%] rounded-[1px] w-[86%]">
                  <Img
                    className="h-1 mb-[342px] md:ml-[0] ml-[285px]"
                    src="images/img_arrowdown_light_blue_900.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-1/4 w-[72%]">
                <Text
                  className="ml-0.5 md:ml-[0] text-black-900 text-xl"
                  size="txtRobotoRomanMedium20"
                >
                  Claim Records
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[39px] w-[77%] md:w-full">
                  <Input
                    name="group111"
                    placeholder="Search"
                    value={group111value}
                    onChange={(e) => setGroup111value(e)}
                    className="!placeholder:text-black-900_4c !text-black-900_4c leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="border border-light_blue-900_33 border-solid flex w-[22%] md:w-full"
                    prefix={
                      <div className="h-3.5 mt-[3px] mb-px mr-2.5 w-3.5 bg-black-900_4c">
                        <Img
                          className="cursor-pointer h-3.5 my-auto"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      </div>
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#0000004c"
                        className="cursor-pointer h-3.5 my-auto"
                        onClick={() => setGroup111value("")}
                        style={{
                          visibility:
                            group111value?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={14}
                        width={14}
                        viewBox="0 0 14 14"
                      />
                    }
                  ></Input>
                  <Button
                    className="border border-light_blue-900_33 border-solid cursor-pointer flex items-center justify-center min-w-[104px] ml-3 md:ml-[0]"
                    rightIcon={
                      <Img
                        className="mt-[3px] ml-[7px]"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                  >
                    <div className="leading-[normal] text-base text-left">
                      Provider
                    </div>
                  </Button>
                  <Button
                    className="border border-light_blue-900_33 border-solid cursor-pointer flex items-center justify-center min-w-[80px] ml-3 md:ml-[0]"
                    rightIcon={
                      <Img
                        className="mt-[3px] ml-[3px]"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                  >
                    <div className="leading-[normal] text-base text-left">
                      Client
                    </div>
                  </Button>
                  <SelectBox
                    className="border border-light_blue-900_33 border-solid leading-[normal] ml-3 md:ml-[0] text-base text-left w-[12%] md:w-full"
                    placeholderClassName="text-black-900_99"
                    indicator={
                      <Img
                        className="h-4 mr-[0] w-5"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group108"
                    options={memberOptionsList}
                    isSearchable={false}
                    placeholder="Member"
                  />
                  <Button
                    className="border border-light_blue-900_33 border-solid cursor-pointer flex items-center justify-center min-w-[92px] ml-3 md:ml-[0]"
                    rightIcon={
                      <Img
                        className="mt-0.5 mb-px ml-px"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                  >
                    <div className="leading-[normal] text-base text-left">
                      Status
                    </div>
                  </Button>
                  <Button
                    className="border border-light_blue-900_33 border-solid cursor-pointer flex items-center justify-center min-w-[83px] ml-3 md:ml-[0]"
                    rightIcon={
                      <Img
                        className="mt-[3px] ml-0.5"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                  >
                    <div className="leading-[normal] text-base text-left">
                      From
                    </div>
                  </Button>
                  <SelectBox
                    className="border border-light_blue-900_33 border-solid leading-[normal] ml-3 md:ml-[0] text-base text-left w-[10%] md:w-full"
                    placeholderClassName="text-black-900_99"
                    indicator={
                      <Img
                        className="h-4 mr-[0] w-5"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group105"
                    options={toOptionsList}
                    isSearchable={false}
                    placeholder="To"
                  />
                  <Button
                    className="border border-light_blue-900_19 border-solid flex h-8 items-center justify-center md:ml-[0] ml-[18px] w-8"
                    color="light_blue_900_19"
                    size="sm"
                  >
                    <Img src="images/img_filter.svg" alt="filter" />
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-[38px] items-center mt-[52px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="mb-1 text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Claim ID{" "}
                    </Text>
                    <Text
                      className="mb-1 sm:ml-[0] ml-[30px] text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Member Name
                    </Text>
                    <Text
                      className="mb-1 sm:ml-[0] ml-[47px] text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Member No
                    </Text>
                    <Text
                      className="mb-1 sm:ml-[0] ml-[41px] text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Ailment Date
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[42px] sm:mt-0 my-0.5 text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Capture Date
                    </Text>
                    <Text
                      className="mb-1 ml-10 sm:ml-[0] text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Amount
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[63px] sm:mt-0 mt-1 text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Claim Type
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[75px] sm:mt-0 mt-1 text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Capturer
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[66px] sm:mt-0 my-0.5 text-base text-black-900_99"
                      size="txtRobotoRomanMedium16Black90099"
                    >
                      Status
                    </Text>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full">
                    <Text
                      className="mb-[7px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      000001
                    </Text>
                    <Text
                      className="mb-1.5 md:ml-[0] ml-[38px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Emily
                    </Text>
                    <Text
                      className="mb-[7px] md:ml-[0] ml-[115px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      M00001
                    </Text>
                    <Text
                      className="mb-[7px] md:ml-[0] ml-[68px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      05 Oct 2023
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[47px] md:mt-0 mt-[5px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      05 Oct 2023
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[46px] md:mt-0 mt-[5px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Kshs 5,000
                    </Text>
                    <Text
                      className="ml-10 md:ml-[0] md:mt-0 mt-[7px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Credit
                    </Text>
                    <Text
                      className="ml-28 md:ml-[0] md:mt-0 mt-[7px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Mathew
                    </Text>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[88%] md:w-full">
                    <Text
                      className="mb-[11px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      000002
                    </Text>
                    <Text
                      className="mb-[9px] ml-9 md:ml-[0] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Benjamin
                    </Text>
                    <Text
                      className="mb-[11px] md:ml-[0] ml-[86px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      M00002
                    </Text>
                    <Text
                      className="mb-[11px] md:ml-[0] ml-[66px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      12 Oct 2023
                    </Text>
                    <Text
                      className="mb-1 md:ml-[0] ml-[47px] md:mt-0 mt-[7px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      12 Oct 2023
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[46px] md:mt-0 mt-[7px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Kshs 5,000
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[41px] md:mt-0 mt-[9px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Reimbursment
                    </Text>
                    <Text
                      className="ml-12 md:ml-[0] md:mt-0 mt-[11px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Angie
                    </Text>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                    <Text
                      className="mb-[5px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      000003
                    </Text>
                    <Text
                      className="mb-1 ml-9 md:ml-[0] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Sophia
                    </Text>
                    <Text
                      className="mb-[5px] md:ml-[0] ml-[104px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      M00003
                    </Text>
                    <Text
                      className="mb-[5px] md:ml-[0] ml-[66px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      17 Oct 2023
                    </Text>
                    <Text
                      className="mb-1 md:ml-[0] ml-[47px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      17 Oct 2023
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[46px] md:mt-0 my-0.5 text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Kshs 5,000
                    </Text>
                    <Text
                      className="ml-10 md:ml-[0] md:mt-0 my-0.5 text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Credit
                    </Text>
                    <Text
                      className="ml-28 md:ml-[0] md:mt-0 mt-[5px] text-base text-black-900"
                      size="txtRobotoRomanMedium16"
                    >
                      Jeremy
                    </Text>
                  </div>
                </List>
              </div>
              <div className="absolute bottom-[32%] flex md:flex-col flex-row md:gap-5 items-start justify-start left-[13%] w-[63%]">
                <Text
                  className="mb-[5px] md:mt-0 mt-0.5 text-base text-black-900"
                  size="txtRobotoRomanMedium16"
                >
                  000004
                </Text>
                <Text
                  className="mb-[5px] ml-9 md:ml-[0] text-base text-black-900"
                  size="txtRobotoRomanMedium16"
                >
                  Jackson
                </Text>
                <Text
                  className="md:ml-[0] ml-[93px] md:mt-0 mt-[7px] text-base text-black-900"
                  size="txtRobotoRomanMedium16"
                >
                  M00004
                </Text>
                <Text
                  className="mb-[5px] md:ml-[0] ml-[66px] md:mt-0 mt-0.5 text-base text-black-900"
                  size="txtRobotoRomanMedium16"
                >
                  21 Oct 2023
                </Text>
                <Text
                  className="mb-[7px] md:ml-[0] ml-[47px] text-base text-black-900"
                  size="txtRobotoRomanMedium16"
                >
                  21 Oct 2023
                </Text>
                <Text
                  className="mb-1.5 md:ml-[0] ml-[46px] text-base text-black-900"
                  size="txtRobotoRomanMedium16"
                >
                  Kshs 5,000
                </Text>
                <Text
                  className="ml-10 md:ml-[0] md:mt-0 my-[3px] text-base text-black-900"
                  size="txtRobotoRomanMedium16"
                >
                  Reimbursment
                </Text>
                <Text
                  className="md:ml-[0] ml-[49px] md:mt-0 my-[3px] text-base text-black-900"
                  size="txtRobotoRomanMedium16"
                >
                  Debbie
                </Text>
              </div>
              <div className="absolute bottom-[22%] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto w-[31%]">
                <Text
                  className="text-black-900 text-sm"
                  size="txtRobotoRomanRegular14"
                >
                  1- 10 of 100
                </Text>
                <Img
                  className="h-[7px] sm:ml-[0] ml-[68px]"
                  src="images/img_refresh.svg"
                  alt="refresh"
                />
                <div className="bg-blue-50_cc border-2 border-indigo-A100 border-solid md:h-[19px] h-[35px] ml-3.5 sm:ml-[0] p-[7px] relative rounded-[17px] w-[35px]">
                  <Text
                    className="absolute h-max inset-y-[0] left-[34%] my-auto text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    1
                  </Text>
                  <Img
                    className="absolute h-2 inset-y-[0] left-[29%] my-auto"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[11px] text-black-900 text-sm"
                  size="txtRobotoRomanRegular14"
                >
                  2
                </Text>
                <Text
                  className="sm:ml-[0] ml-[25px] text-black-900 text-sm"
                  size="txtRobotoRomanRegular14"
                >
                  3
                </Text>
                <Text
                  className="sm:ml-[0] ml-[25px] text-black-900 text-sm"
                  size="txtRobotoRomanRegular14"
                >
                  4
                </Text>
                <Text
                  className="sm:ml-[0] ml-[25px] text-black-900 text-sm"
                  size="txtRobotoRomanRegular14"
                >
                  5
                </Text>
                <Img
                  className="h-2 sm:ml-[0] ml-[107px]"
                  src="images/img_vector_black_900.svg"
                  alt="vector_One"
                />
                <Img
                  className="h-[7px] sm:ml-[0] ml-[22px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
              <div className="absolute border-b border-light_blue-900_33 border-solid border-x bottom-[31%] flex flex-col items-end justify-end p-[19px] right-[2%] w-[86%]">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[212px] mr-5 mt-0.5 text-center text-xs"
                  color="deep_orange_A100"
                  size="sm"
                >
                  Awaiting payment processing
                </Button>
              </div>
            </div>
            <div className="absolute border-b border-light_blue-900_33 border-solid border-x bottom-[37%] flex flex-col items-end justify-start p-5 right-[2%] w-[86%]">
              <Button
                className="cursor-pointer leading-[normal] min-w-[212px] mr-[23px] text-center text-xs"
                color="red_700"
                size="sm"
              >
                Repudiated
              </Button>
            </div>
          </div>
          <div className="absolute border-b border-light_blue-900_33 border-solid border-x bottom-[43%] flex flex-col items-end justify-start p-[7px] right-[2%] w-[86%]">
            <Button
              className="cursor-pointer leading-[normal] mb-[26px] min-w-[212px] mr-[37px] text-center text-xs"
              color="amber_800"
              size="sm"
            >
              With Insurer
            </Button>
          </div>
        </div>
        <div className="absolute flex flex-col gap-9 justify-start md:px-5 right-[2%] top-[14%] w-[86%]">
          <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[1050px] w-[14%] md:w-full">
            <SelectBox
              className="border border-light_blue-900_33 border-solid leading-[normal] text-base text-left w-full"
              placeholderClassName="text-white-A700"
              indicator={
                <Img
                  className="h-4 mr-[0] w-5"
                  src="images/img_arrowdown_white_a700.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="groupNinetyEight"
              options={captureClaimOptionsList}
              isSearchable={false}
              placeholder="Capture Claim"
              color="light_blue_900"
            />
            <div className="bg-white-A700 border border-light_blue-900_33 border-solid flex flex-col items-start justify-center p-2.5 rounded-[5px] w-full">
              <Text
                className="text-light_blue-900 text-xs"
                size="txtRobotoRomanMedium12"
              >
                Select Scheme Name
              </Text>
              <Input
                name="group116"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-light_blue-900_33 border-solid flex mt-[3px] w-full"
                suffix={
                  <div className="ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-black-900_99">
                    <Img
                      className="my-auto"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrow_down"
                    />
                  </div>
                }
              ></Input>
              <Text
                className="mt-3 text-light_blue-900 text-xs"
                size="txtRobotoRomanMedium12"
              >
                Select Member Name
              </Text>
              <Input
                name="group115"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-light_blue-900_33 border-solid flex mt-[3px] w-full"
                suffix={
                  <div className="ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-black-900_99">
                    <Img
                      className="my-auto"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrow_down"
                    />
                  </div>
                }
              ></Input>
              <Text
                className="bg-light_blue-900 h-[18px] justify-center mb-1.5 md:ml-[0] ml-[97px] mt-[17px] px-3 rounded-[5px] text-white-A700 text-xs w-[62px]"
                size="txtRobotoRomanMedium12WhiteA700"
              >
                Search
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="border border-light_blue-900_33 border-solid h-[68px] w-full"></div>
            <div className="border-b border-light_blue-900_33 border-solid border-x flex flex-col items-end justify-start mt-[5px] p-5 w-full">
              <Text
                className="bg-blue-200 h-7 justify-center mr-[19px] px-1 py-1.5 rounded-[5px] text-black-900 text-xs w-[212px]"
                size="txtRobotoRegular12"
              >
                Awaiting request for more information
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCalimsPagePage;
