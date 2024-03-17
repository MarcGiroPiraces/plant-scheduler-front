import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { WateringFormProps } from "../../components/watering/WateringForm";
import {
  WateringFormFields,
  wateringFormFieldsSchema,
} from "../../interfaces/watering/formFields";
import { useGetPlantByIdFromPlantsList } from "../plant/useGetPlantByIdFromPlantsList";
import { useGetPlants } from "../plant/useGetPlants";

export const useWateringForm = ({ actionOnSubmit }: WateringFormProps) => {
  const { plantId } = useParams();
  const plantIdToNumber = +plantId!;
  const { plantsData } = useGetPlants();

  const navigate = useNavigate();

  const plant = useGetPlantByIdFromPlantsList(plantsData, plantIdToNumber);

  const defaultValues = useMemo(
    () => ({
      date: new Date().toISOString().split("T")[0],
      fertilizer: false,
      plantId: plant.id,
    }),
    [plant.id]
  );

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<WateringFormFields>({
    defaultValues: defaultValues,
    resolver: zodResolver(wateringFormFieldsSchema),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = handleSubmit(async (data: WateringFormFields) => {
    try {
      await actionOnSubmit(data);
      navigate(`/`);
    } catch (error) {
      setError("root", { type: "manual", message: "Something went wrong" });
    }
  });

  return { navigate, plant, register, onSubmit, setError, errors };
};
