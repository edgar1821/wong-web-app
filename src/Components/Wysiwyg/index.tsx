import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Estilos del editor
import { useFormContext, Controller } from "react-hook-form";

interface WysiwygEditorProps {
  name: string;
  disable: boolean;
  label: string;
}

const WysiwygEditor: React.FC<WysiwygEditorProps> = ({
  name,
  disable,
  label,
}) => {
  const { control } = useFormContext();

  return (
    <div className="mb-3 flex flex-col">
      <span
        className="mb-2 
          flex 
          flex-col 
          text-sm 
          font-bold 
          text-brand-green-100
          dark:text-white
          md:text-lg"
      >
        {label}
      </span>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <ReactQuill
            theme="snow" // Tema del editor
            readOnly={disable}
            value={field.value}
            onChange={field.onChange}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                //["link"], // Solo mantener el botón de enlace
                //["clean"],
              ],
            }}
          />
        )}
      />
    </div>
  );
};

export default WysiwygEditor;
