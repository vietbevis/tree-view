import { useFieldChangeStore } from "../store/fieldChangeStore";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
});

const FormChangeValue = () => {
  const { fields, setFields } = useFieldChangeStore((state) => state);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: "",
  });

  useEffect(() => {
    setValue("name", fields);
  }, [fields, setValue]);

  const onSubmit = (e) => {
    console.log("====================================");
    console.log("Form Submitted:", e.name);
    console.log("====================================");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="name" className="text-lg font-medium">
          Name
        </label>
        <InputText
          keyfilter="int"
          id="name"
          className="p-inputtext-sm"
          {...register("name")}
          placeholder="Integers"
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>
      <div className="flex gap-2">
        <Button
          label="Cancel"
          severity="danger"
          icon="pi pi-times"
          size="small"
          type="button"
          onClick={() => setFields({})}
        />
        <Button label="Submit" icon="pi pi-check" size="small" />
      </div>
    </form>
  );
};

export default FormChangeValue;
