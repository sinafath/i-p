import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  UseDisclosureReturn,
  useToast,
  Box,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ValidationSchema = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
};

function Model({ isOpen, onOpen, onClose, onToggle }: UseDisclosureReturn) {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);
  const refs = [one, two, three, four, five];
  const pattern = ["1", "2", "3", "4", "5"];

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ValidationSchema>();
  const toast = useToast();
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    if (
      Object.keys(data).find(
        (key) =>
          data[key as unknown as keyof ValidationSchema] !==
          pattern[Number(key) - 1]
      )
    ) {
      setError("root", {
        message: "رمز اشتباه است",
      });
      return;
    }
    toast({
      render: () => (
        <Box fontSize={35} bg={"pink"} textAlign="center">
          تموم شد
        </Box>
      ),
    });
    onClose();
  };
  return (
    <Modal isCentered initialFocusRef={one} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={500} p={20}>
        <ModalHeader fontSize={20}>کد را وارد کنید</ModalHeader>
        <ModalCloseButton fontSize={20} bg="white" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody pb={48}>
            <FormControl
              w={"100%"}
              justifyContent="center"
              display="flex"
              pt={20}
              gap={10}
            >
              {pattern.map((number) => (
                <Input
                  type="number"
                  fontSize={24}
                  height={80}
                  w={80}
                  {...register(number.toString())}
                  ref={(ref) => {
                    refs[number - 1].current = ref;
                    register(number.toString())?.ref(ref);
                  }}
                  onKeyDown={(event) => {
                    const { key } = event;
                    if (
                      (key === "Backspace" || key === "Delete") &&
                      event.target?.value === ""
                    ) {
                      refs[number - 2]?.current?.focus();
                    }
                  }}
                  onKeyUp={(event) => {
                    event.target.value = event.target.value[0];
                    if (event.target?.value !== "") {
                      refs[number]?.current?.focus();
                    }
                  }}
                  px={30}
                  key={number}
                />
              ))}
              {errors.root && <Text>{errors.root.message}</Text>}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              h={40}
              borderRadius={20}
              px={25}
              fontSize={20}
              mr={24}
              type="submit"
            >
              ثبت
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
export default Model;
