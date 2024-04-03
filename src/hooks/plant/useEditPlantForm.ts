import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { PlantFormProps } from "../../interfaces/plant/PlantFormProps";
import {
  PlantFormFields,
  plantFormFieldsSchema,
} from "../../interfaces/plant/formFields";
import { useGetSpots } from "../spot/useGetSpots";
import { useGetPlantByIdFromPlantsList } from "./useGetPlantByIdFromPlantsList";
import { useGetPlants } from "./useGetPlants";

export const useEditPlantForm = ({ actionOnSubmit }: PlantFormProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const plantsData = useGetPlants();
  console.log(plantsData);
  const plant = useGetPlantByIdFromPlantsList(
    plantsData.plantsData,
    Number(id)
  );
  const { spotsData } = useGetSpots();
  const sortedSpotsData = useMemo(() => {
    return spotsData.sort((a, b) => a.room.localeCompare(b.room));
  }, [spotsData]);

  const defaultValues = useMemo(
    () => ({
      id: plant ? plant.id : 0,
      name: plant ? plant.name : "",
      description: plant ? plant.description : "",
      atHomeSince: plant
        ? new Date(plant.atHomeSince).toISOString().split("T")[0]
        : "",
      userId: plant ? plant.user.id : 1,
      spotId: plant ? plant.spot.id.toString() : "1",
    }),
    [plant]
  );

  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<PlantFormFields>({
    defaultValues: defaultValues,
    resolver: zodResolver(plantFormFieldsSchema),
  });
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  console.log(watch("spotId"));

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
    control,
    errors,
    spotsData: sortedSpotsData,
    watch,
  };
};
