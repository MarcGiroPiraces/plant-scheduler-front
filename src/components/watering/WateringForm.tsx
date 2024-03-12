import { useWateringForm } from "../../hooks/useWateringForm";
import { WateringFormFields } from "../../interfaces/watering/formFields";

export interface WateringFormProps {
  actionOnSubmit: (watering: WateringFormFields) => Promise<void>;
}

export function WateringForm({ actionOnSubmit }: WateringFormProps) {
  const { plant, register, errors, onSubmit } = useWateringForm({
    actionOnSubmit,
  });

  return (
    <form onSubmit={onSubmit}>
      <h2>{plant.name}</h2>
      <p>{plant.description}</p>
      <p>
        {plant.spot
          ? `${plant.spot.room} - ${plant.spot.place}`
          : "Lloc per determinar"}
      </p>

      <div>
        <p>Data del reg</p>
        <input type="date" {...register("date", { required: true })} />
        {errors.date && <span>Has d'introduir la data del reg.</span>}
      </div>

      <div>
        <p>
          Has fertilitzat?
          <input
            type="checkbox"
            {...register("fertilizer", { required: false })}
          />
        </p>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
}
