import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import Select from "@Components/Select";
import DatePicker from "@Components/Datepicker";
import DatePickerBest from "@Components/DatePickerBest";
import { IProforma } from "@Types/index";
import Button from "@Components/Button";
import Breadcrumb from "@Components/Breadcrumb";
//helpers
import { getDates } from "../../helpers";
import cotizacionSchema from "./cotizacionSchema";
import Layout from "@Components/Layout";
import { useParams } from "react-router";
import { useEffect, useMemo } from "react";
import { useProductStore } from "../../store/useProductStore";
import { useCotizacionStore } from "../../store/useCotizacionStore";
import { useDoctorStore } from "../../store/useDoctorStore";

function CotizacionForm() {
  const params = useParams();
  const fetchCurrencyTypes = useProductStore(
    (state) => state.fetchCurrencyTypes,
  );
  const listCurrencyTypesOption = useProductStore(
    (state) => state.listCurrencyTypesOption,
  );
  const fetchTipoDocumento = useCotizacionStore(
    (state) => state.fetchTipoDocumento,
  );

  const document_types = useCotizacionStore(
    (state) => state.document_types,
  );

  const fetchDoctores = useDoctorStore((state) => state.fetchDoctores);
  const doctorsOption = useDoctorStore((state) => state.doctorsOption);
  const titulo = useMemo(() => {
    if (params.accion === "registro") return "Nueva cotización";
    if (params.accion === "modificar") return "Modificar cotización";
  }, [params.accion]);
  const methods = useForm<IProforma>({
    resolver: zodResolver(cotizacionSchema),
    defaultValues: {
      issue_date: getDates(),
      expiration_date: getDates(10),
    },
  });
  function save(data: IProforma) {
    console.log("dataa", data);
  }

  useEffect(() => {
    fetchDoctores();
    fetchCurrencyTypes();
    fetchTipoDocumento();
  }, [fetchCurrencyTypes, fetchTipoDocumento, fetchDoctores]);

  return (
    <Layout title="Nueva cotización">
      <div className="mb-3 w-full snap-both">
        <Breadcrumb
          items={[
            { path: "/cotizacion", label: "Cotización" },
            {
              path: "/cotizacion/registro",
              label: "Nueva cotización",
            },
          ]}
        />
      </div>
      <div className="min-h-96 w-full">
        <PageTitle>{titulo}</PageTitle>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(save)}>
            <div className="flex w-full snap-y flex-col">
              <div className="mb-2 mt-8 flex flex-col">
                <PageTitle type="subtitle">
                  Datos del paciente
                </PageTitle>
                <input
                  type="hidden"
                  {...methods.register("proforma_id")}
                />
                <Select
                  label="Tipo de documento:"
                  name="document_type_id"
                  options={document_types}
                />
                <InputText
                  name="document_number"
                  type="text"
                  label="Número de documento:"
                  placeholder=""
                />
                <InputText
                  name="patient_name"
                  type="text"
                  label="Nombres del paciente:"
                  placeholder=""
                />
                <InputText
                  name="patient_lastname"
                  type="text"
                  label="Apellidos del Paciente:"
                  placeholder=""
                />
                <Select
                  label="Doctor"
                  name="doctor_id"
                  options={doctorsOption}
                />
              </div>
              <div className="mb-2flex mt-8 flex-col">
                <PageTitle type="subtitle">
                  Datos del producto
                </PageTitle>
                <Select
                  label="Producto"
                  name="idProduct"
                  options={[
                    { value: "zapato", label: "Zapato" },
                    { value: "silla", label: "Silla" },
                  ]}
                />
                <Select
                  label="Tipo de moneda:"
                  name="currency_type_id"
                  options={listCurrencyTypesOption}
                />
                <InputText
                  name="price"
                  type="text"
                  label="Precio:"
                  placeholder=""
                />
                <InputText
                  name="description"
                  type="text"
                  label="Descripción:"
                  placeholder=""
                />
                <DatePickerBest
                  name="issue_date"
                  label="Fecha de emisión:"
                />

                <DatePicker
                  name="expiration_date"
                  label="Fecha de emisión:"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit">Guardar</Button>
            </div>
          </form>
        </FormProvider>
        <div className="h-20"></div>
      </div>
    </Layout>
  );
}

export default CotizacionForm;
