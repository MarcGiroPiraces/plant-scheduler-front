import { useSpotForm } from "../../hooks/transplanting/useSpotForm";
import { SpotFormProps } from "../../interfaces/spot/SpotFormProps";
import "./SpotForm.css";

export function SpotForm({ actionOnSubmit }: SpotFormProps) {
  const { register, errors, onSubmit } = useSpotForm({
    actionOnSubmit,
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Habitacio</label>
        <input type="text" {...register("room", { required: true })} />
        {errors.room && <span>Has d'introduir l'habitacio.</span>}
      </div>

      <div>
        <label>Lloc</label>
        <input type="text" {...register("place", { required: true })} />
        {errors.place && <span>Has d'introduir el lloc.</span>}
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
