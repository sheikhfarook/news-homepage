// import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import letter from "../assets/W..svg";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div
      className="flex font-inter my-20 justify-between w-auto m-auto xl:w-[70rem] xl:mx-auto lg:w-[62rem] lg:mx-auto md:ml-3
        max-sm:ml-2 max-sm:my-10 ">
      <div>
        <img
          className="w-[4.00575rem] h-[2.49375rem] shrink-0"
          src={letter}
          alt=""
        />
      </div>
      <div className="lg:hidden ml-[14rem] md:mr-[-48rem]">
        <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
          <div className="flex-col space-y-[-13px]  text-black ">
            <div>___</div>
            <div>___</div>
            <div>___</div>
          </div>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              fontSize="2rem"
              marginTop={"1rem"}
              marginRight={"1rem"}
            />
            <DrawerBody>
              <div
                className="text-black text-[1.125rem] 
                font-[400] leading-[1.625rem] max-sm:flex-col gap-8 cursor-pointer mt-40 space-y-5  ">
                <div className="hover:text-[#F15D51]">Home</div>
                <div className="hover:text-[#F15D51]">New</div>
                <div className="hover:text-[#F15D51]">Popular</div>
                <div className="hover:text-[#F15D51]">Trending</div>
                <div className="hover:text-[#F15D51]">Categories</div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="visibility">
        <div
          className="text-[#5E607A] text-[0.9375rem] 
        font-[400] leading-[1.625rem] flex gap-8 cursor-pointer max-sm:hidden ">
          <div className="hover:text-[#F15D51]">Home</div>
          <div className="hover:text-[#F15D51]">New</div>
          <div className="hover:text-[#F15D51]">Popular</div>
          <div className="hover:text-[#F15D51]">Trending</div>
          <div className="hover:text-[#F15D51]">Categories</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
