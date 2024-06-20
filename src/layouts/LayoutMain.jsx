import FormChangeValue from "../components/FormChangeValue";
import { useFieldChangeStore } from "../store/fieldChangeStore";

/* eslint-disable react/prop-types */
const LayoutMain = ({ children }) => {
  const fields = useFieldChangeStore((state) => state.fields);
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-80 shrink-0">{children}</div>
      <div className="flex-1 p-20">
        {fields ? <FormChangeValue /> : "No field selected"}
      </div>
    </div>
  );
};

export default LayoutMain;
