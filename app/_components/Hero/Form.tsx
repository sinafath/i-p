import { Button, Input, InputWrapper, HstackForm } from "./styles";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import dataHeader from "./data";
import { FormControl, FormHelperText, useDisclosure } from "@chakra-ui/react";
import Model from "./Model";
const {
  button,
  form: { phone },
} = dataHeader;

type ValidationSchema = {
  phone: number;
};

const validationSchema = z.object({
  phone: z
    .string({ required_error: phone.errors[0] })
    .min(11, { message: phone.errors[1] })
    .startsWith("09", { message: phone.errors[2] }),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const disclosureProps = useDisclosure()

  const {onOpen} = disclosureProps
  const onSubmit: SubmitHandler<ValidationSchema> = ()=> onOpen();
  return (
    <HstackForm onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={Boolean(errors.phone)}
        w={{ base: "101%", sm: 365 }}
        display="flex"
        flex={1}
    height={{ base: 38, md: 100 }}
        flexDirection="column"
        gap={10}
      >
        <InputWrapper >
          <Input
            type="number"
            placeholder={phone.name}
            {...register("phone")}
          />
        </InputWrapper>
          <FormHelperText fontSize={14} color="red.500"> {errors.phone?.message}</FormHelperText>
      </FormControl>
      <Button type="submit">{button}</Button>
      <Model {...disclosureProps}/>
    </HstackForm>
  );
}

export default Form;
