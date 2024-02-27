import { useTransplantingForm } from "../../hooks/useTansplantingForm";
import { TransplantingFormFields } from "../interfaces/formFields";

export interface TransplantingFormProps {
  actionOnSubmit: (transplanting: TransplantingFormFields) => Promise<void>;
}

export function TransplantingForm({ actionOnSubmit }: TransplantingFormProps) {
  const { plant, register, errors, onSubmit } = useTransplantingForm({
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
        <p>Data del transplantament</p>
        <input type="date" {...register("date", { required: true })} />
        {errors.date && (
          <span>Has d'introduir la data del transplantament.</span>
        )}
      </div>

      <div>
        <p>
          Has canviat a un test mes gran?
          <input
            type="checkbox"
            {...register("potUpsize", { required: false })}
          />
        </p>

        <p>
          Has canviat la terra?
          <input
            type="checkbox"
            {...register("soilChange", { required: false })}
          />
        </p>

        <p>Tipus de terra</p>
        <textarea {...register("soilMix", { required: true })} />
        {errors.soilMix && (
          <span>Has d'introduir el tipus de terra utilitzat.</span>
        )}
      </div>

      <input type="submit" />
    </form>
  );
}
