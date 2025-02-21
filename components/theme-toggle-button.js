import { Icon, HStack, useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

const ThemeToggleSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={colorMode}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon color={colorMode === "light" ? "yellow.400" : "gray.400"}>
            {colorMode === "light" ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
          </Icon>
        </motion.div>
      </AnimatePresence>

      <Switch
        colorScheme="blue"
        size="lg"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ThemeToggleSwitch;
