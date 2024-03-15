import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SpotFormProps } from "../../interfaces/spot/SpotFormProps";
import {
  SpotFormFields,
  spotFormFieldsSchema,
} from "../../interfaces/spot/formFields";

export const useSpotForm = ({ actionOnSubmit }: SpotFormProps) => {
  const navigate = useNavigate();

  const defaultValues = useMemo(
    () => ({
      room: "Dormitori",
      place: "Finestra gran",
    }),
    []
  );

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<SpotFormFields>({
    defaultValues: defaultValues,
    resolver: zodResolver(spotFormFieldsSchema),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await actionOnSubmit(data);
      navigate(`/`);
    } catch (error) {
      setError("root", { type: "manual", message: "Something went wrong" });
    }
  });

  return {
    navigate,
    register,
    onSubmit,
    setError,
    errors,
  };
};
