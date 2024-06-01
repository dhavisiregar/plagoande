import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import Button from "../../components/Button";
import Swal from "sweetalert2";

const StatePage = () => {
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<boolean>(false);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
    if (count < 0) {
      Swal.fire({
        title: "Out of range",
        text: "Number cannot be negative",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const changeColor = () => {
    setColor(!color);
  };

  return (
    <main className="container">
      <div className="button-group">
        <Button
          style={
            color === true ? "button-reusable-green" : "button-reusable-red"
          }
          title="+"
          onClick={incrementCount}
        />
        <div>
          <h3>Number Count: {count} </h3>
          <Button
            style={
              color === true ? "button-reusable-green" : "button-reusable-red"
            }
            onClick={changeColor}
            title="Change Color"
          />
        </div>
        <Button
          style={
            color === true ? "button-reusable-green" : "button-reusable-red"
          }
          title="-"
          onClick={decrementCount}
        />
      </div>
      <div className="w-full my-10 grid grid-cols-1 text-white gap-y-10">
        <div className="p-10 bg-blue-500 lg:bg-red-500 md:bg-orange-500 sm:bg-green-500">
          Element 1
        </div>
        <div className="p-10 bg-blue-500 lg:bg-red-500 md:bg-orange-500 sm:bg-green-500">
          Element 2
        </div>
        <div className="p-10 bg-blue-500 lg:bg-red-500 md:bg-orange-500 sm:bg-green-500">
          Element 3
        </div>
      </div>
      <div>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default StatePage;
