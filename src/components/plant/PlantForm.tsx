import { usePlantForm } from "../../hooks/plant/usePlantForm";
import { PlantFormFields } from "../../interfaces/plant/formFields";

export interface PlantFormProps {
  actionOnSubmit: (plant: PlantFormFields) => Promise<void>;
}

export function PlantForm({ actionOnSubmit }: PlantFormProps) {
  const { register, errors, onSubmit } = usePlantForm({
    actionOnSubmit,
  });

  return (
    <form onSubmit={onSubmit}>
      <p>Nom</p>
      <input {...register("name", { required: true })} />
      {errors.name && <span>Has d'introduir el nom de la planta.</span>}

      <p>Descripcio</p>
      <text {...register("description", { required: true })} />
      {errors.description && (
        <span>Has d'introduir la descripcio de la planta.</span>
      )}

      <div>
        <p>Des de quan la tens a casa</p>
        <input type="date" {...register("atHomeSince", { required: true })} />
        {errors.atHomeSince && (
          <span>Has d'introduir la data desde que la tens a casa.</span>
        )}
      </div>

      <p>A quin lloc la tens</p>
      <input {...register("spotId", { required: true })} />
      {errors.spotId && <span>Has d'introduir el lloc de la planta.</span>}

      <input type="submit" />
    </form>
  );
}
