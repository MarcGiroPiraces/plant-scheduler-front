import { Controller } from "react-hook-form";
import { usePlantForm } from "../../hooks/plant/usePlantForm";
import { PlantFormProps } from "../../interfaces/plant/PlantFormProps";
import "./PlantForm.css";

export function PlantForm({ actionOnSubmit }: PlantFormProps) {
  const { register, errors, control, onSubmit, spotsData } = usePlantForm({
    actionOnSubmit,
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nom</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Has d'introduir el nom de la planta.</span>}
      </div>

      <div>
        <label>Descripcio</label>
        <textarea {...register("description", { required: true })} />
        {errors.description && (
          <span>Has d'introduir la descripcio de la planta.</span>
        )}
      </div>

      <div>
        <label>Des de quan la tens a casa</label>
        <input type="date" {...register("atHomeSince", { required: true })} />
        {errors.atHomeSince && (
          <span>Has d'introduir la data desde que la tens a casa.</span>
        )}
      </div>

      <div>
        <label htmlFor="dropdown">A quin lloc la tens</label>
        <Controller
          name="spotId"
          control={control}
          defaultValue={1}
          render={({ field }) => (
            <select {...field}>
              {spotsData.map((spot) => (
                <option key={spot.id} value={spot.id}>
                  {spot.room} - {spot.place}
                </option>
              ))}
            </select>
          )}
        ></Controller>
        {errors.spotId && <span>{errors.spotId.message}</span>}
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
