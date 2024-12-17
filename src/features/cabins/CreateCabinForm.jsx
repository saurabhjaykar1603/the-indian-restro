import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const queryClient = useQueryClient()
  const { register, handleSubmit, reset } = useForm()
  const { mutate, isPending: iscreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully added")
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
      reset()
    },
    onError: (err) => toast.error(err.message)
  })

  function onSubmit(data) {
    mutate({...data, image: data.image[0]})
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input disabled={iscreating} type="text" id="name" {...register("name", { required: true })} />
        <Error>Please enter a cabin name</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input disabled={iscreating} type="number" id="maxCapacity" {...register("maxCapacity", { required: true })} />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input disabled={iscreating} type="number" id="regularPrice" {...register("regularPrice", { required: true })} />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount" >Discount</Label>
        <Input disabled={iscreating} type="number" id="discount" defaultValue={0}  {...register("discount")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea disabled={iscreating} type="number" id="description" defaultValue=""  {...register("description", { required: true })} />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput disabled={iscreating} id="image" type="file" accept="image/*" {...register("image", { required: true })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={iscreating} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={iscreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
