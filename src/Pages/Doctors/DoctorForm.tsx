import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { IDoctor } from "@Types/index";
import { FormProvider, useForm } from "react-hook-form";

// components
import Layout from "@Components/Layout";
import PageTitle from "@Components/PageTitle";
import Breadcrumb from "@Components/Breadcrumb";
import { zodResolver } from "@hookform/resolvers/zod";

import { useDoctorStore } from "../../store";

import InputText from "@Components/InputText";
import Button from "@Components/Button";

//logica
import DoctorSchema from "./doctorSchema";
import { TOAST_TYPE } from "@Constants/action";

function DoctorForm() {
  const params = useParams();
  const titulo = useMemo(() => {
    if (params.accion === "registro") return "Nuevo doctor";
    if (params.accion === "modificar") return "Modificar doctor";
  }, [params.accion]);
  // store

  const clearToast = useDoctorStore((state) => state.clearToast);

  const fetchRegistroDoctor = useDoctorStore(
    (state) => state.fetchRegistroDoctor,
  );
  const fetchInfoDoctor = useDoctorStore(
    (state) => state.fetchInfoDoctor,
  );
  const fetchEditDoctor = useDoctorStore(
    (state) => state.fetchEditDoctor,
  );
  const doctorToast = useDoctorStore((state) => state.doctorToast);
  const doctor = useDoctorStore((state) => state.doctor);
  //methods
  const methods = useForm<IDoctor>({
    resolver: zodResolver(DoctorSchema),
  });
  function save(data: IDoctor) {
    if (params.accion === "modificar") {
      data.doctor_id = doctor.doctor_id;
      fetchEditDoctor(data);
    }
    if (params.accion === "registro") {
      fetchRegistroDoctor(data);
    }
  }

  // manejo de toast
  useEffect(() => {
    if (doctorToast.type === TOAST_TYPE.SUCCESS) {
      toast.success(doctorToast.message);
      if (params.accion === "registro") {
        methods.reset();
      }
    }
    if (doctorToast.type === TOAST_TYPE.ERROR) {
      toast.error(doctorToast.message);
    }
    clearToast();
  }, [
    clearToast,
    doctorToast.message,
    doctorToast.type,
    methods,
    params.accion,
  ]);

  //manejo llamada de datos al editar
  useEffect(() => {
    if (
      params.accion === "modificar" &&
      params.id &&
      params.id !== ""
    ) {
      fetchInfoDoctor(params.id);
    }
  }, [fetchInfoDoctor, params.accion, params.id]);

  useEffect(() => {
    if (doctor.doctor_id && doctor.doctor_id !== "") {
      methods.reset(doctor);
    }
  }, [doctor, methods]);
  return (
    <Layout title="Nuevo doctor">
      <div className="mb-3">
        <Breadcrumb
          items={[
            { path: "/doctores", label: "Doctor" },
            { path: "/doctores/registro", label: "Nuevo doctor" },
          ]}
        />
      </div>

      <PageTitle>{titulo}</PageTitle>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(save)}
          className="flex flex-col"
        >
          {/* <input type="hidden" name="idDoctor" /> */}
          <InputText
            name="doctor_name"
            type="text"
            label="Nombre del doctor"
          />
          <InputText
            name="institution"
            type="text"
            label="Nombre de la intitutión:"
            // placeholder="Clinica Javier Prado"
          />
          <InputText
            name="spaciallity"
            type="text"
            label="Especialidad:"
          />

          <InputText
            name="phone_number"
            type="text"
            label="Telefono:"
          />
          <InputText name="email" type="text" label="Email:" />
          <Button type="submit">Guardar</Button>
        </form>
      </FormProvider>
      <Toaster />
    </Layout>
  );
}

export default DoctorForm;
