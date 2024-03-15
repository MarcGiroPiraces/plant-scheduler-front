import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PlantFormProps } from "../../interfaces/plant/PlantFormProps";
import {
  PlantFormFields,
  plantFormFieldsSchema,
} from "../../interfaces/plant/formFields";

export const usePlantForm = ({ actionOnSubmit }: PlantFormProps) => {
  const navigate = useNavigate();

  const defaultValues = useMemo(
    () => ({
      name: "Tradescantia Zebrina",
      description:
        "Regar en mig sec i fertilitzar cada mes i mig en estiu i primavera",
      atHomeSince: new Date().toISOString().split("T")[0],
      userId: 1,
      spotId: 1,
    }),
    []
  );

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<PlantFormFields>({
    defaultValues: defaultValues,
    resolver: zodResolver(plantFormFieldsSchema),
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
