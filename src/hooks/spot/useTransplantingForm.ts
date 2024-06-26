import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getLatestTransplantingFromPlant } from "../../helperFunctions/transplanting/getLatestTransplantingFromPlant";
import { TransplantingFormProps } from "../../interfaces/transplanting/TransplantingFormProps";
import {
  TransplantingFormFields,
  transplantingFormFieldsSchema,
} from "../../interfaces/transplanting/formFields";
import { useGetPlantByIdFromPlantsList } from "../plant/useGetPlantByIdFromPlantsList";
import { useGetPlants } from "../plant/useGetPlants";

export const useTransplantingForm = ({
  actionOnSubmit,
}: TransplantingFormProps) => {
  const { plantId } = useParams();
  const plantIdToNumber = +plantId!;
  const { plantsData } = useGetPlants();

  const navigate = useNavigate();

  const plant = useGetPlantByIdFromPlantsList(plantsData, plantIdToNumber);

  const soilMixDefault = useMemo(
    () => getLatestTransplantingFromPlant(plant)?.soilMix || "",
    [plant]
  );

  const defaultValues = useMemo(
    () => ({
      date: new Date().toISOString().split("T")[0],
      potUpsize: false,
      soilChange: false,
      soilMix: soilMixDefault || "",
      plantId: +plantId! || 0,
    }),
    [plantId, soilMixDefault]
  );

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<TransplantingFormFields>({
    defaultValues: defaultValues,
    resolver: zodResolver(transplantingFormFieldsSchema),
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
    plant,
    register,
    onSubmit,
    setError,
    errors,
  };
};
