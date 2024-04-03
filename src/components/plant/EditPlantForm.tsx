import { useEditPlantForm } from "../../hooks/plant/useEditPlantForm";
import { PlantFormProps } from "../../interfaces/plant/PlantFormProps";
import "./PlantForm.css";

export function EditPlantForm({ actionOnSubmit }: PlantFormProps) {
  const { register, errors, onSubmit, spotsData } = useEditPlantForm({
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
        <label htmlFor="spotId">A quin lloc la tens</label>
        <select {...register("spotId")}>
          {spotsData.map((spot) => (
            <option key={spot.id} value={spot.id}>
              {spot.room} - {spot.place}
            </option>
          ))}
        </select>
        {errors.spotId && <span>{errors.spotId.message}</span>}
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
