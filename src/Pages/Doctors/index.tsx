import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IDoctor, OperationAction } from "@Types/index";
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";
import PageTitle from "@Components/PageTitle";
import ModalConfirmation from "@Components/ModalConfirmation";
import Columns from "./datatableColumns";
import { useDoctorStore } from "../../store";
import { URLS } from "@Constants/url";
import { TOAST_TYPE } from "@Constants/action";

interface IModalConfirm {
  title: string;
  message?: string;
  showModal: boolean;
  doctor: IDoctor;
}
function DoctorPage() {
  const Navigate = useNavigate();
  const clearToast = useDoctorStore((state) => state.clearToast);
  const fetchDoctors = useDoctorStore((state) => state.fetchDoctores);
  const fetchDeleteDoctor = useDoctorStore(
    (state) => state.fetchDeleteDoctor,
  );

  const doctors = useDoctorStore((state) => state.doctors);
  const doctorToast = useDoctorStore((state) => state.doctorToast);

  // states
  const [modalDeleteDoctor, setModalDeleteDoctor] =
    useState<IModalConfirm>({
      title: "",
      showModal: false,
      message: "",
      doctor: {} as IDoctor,
    });
  function handleClickAdd(): void {
    const path: string = `${URLS.URL_DOCTORS}/registro`;
    Navigate(path);
  }

  // delete doctor
  function handleDeleteDoctor() {
    fetchDeleteDoctor(modalDeleteDoctor.doctor);
    handleCloseModalDelete();
  }
  function handleCloseModalDelete() {
    setModalDeleteDoctor({
      title: "",
      showModal: false,
      message: "",
      doctor: {} as IDoctor,
    });
  }
  function handleClickActionRow(
    accion: OperationAction,
    item: IDoctor,
  ) {
    if (accion === "delete") {
      setModalDeleteDoctor({
        title: "Eliminar doctor",
        showModal: true,
        message: `¿Desea eliminar el doctor "${item.doctor_name}"?`,
        doctor: item,
      });
    }
    if (accion === "edit") {
      const path: string = `${URLS.URL_DOCTORS}/modificar/${item.doctor_id}`;
      Navigate(path);
    }
  }
  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  // manejo de toasts
  useEffect(() => {
    if (doctorToast.type === TOAST_TYPE.SUCCESS) {
      fetchDoctors();
      toast.success(doctorToast.message);
      clearToast();
    }
    if (doctorToast.type === TOAST_TYPE.ERROR) {
      toast.error(doctorToast.message);
      clearToast();
    }
  }, [clearToast, doctorToast, fetchDoctors]);

  return (
    <>
      <Layout title="Doctores">
        <PageTitle>Doctores</PageTitle>
        <div className="overscroll-auto md:w-7/12">
          <Datatable
            title="Doctores"
            columns={Columns({ onClick: handleClickActionRow })}
            data={doctors}
            addActionText="Nuevo Doctor"
            onClick={handleClickAdd}
          />
        </div>
        <Toaster />
      </Layout>
      <ModalConfirmation
        title={modalDeleteDoctor.title}
        showModal={modalDeleteDoctor.showModal}
        message={modalDeleteDoctor.message}
        onCloseModal={handleCloseModalDelete}
        onAccept={handleDeleteDoctor}
        onDeny={handleCloseModalDelete}
      />
    </>
  );
}

export default DoctorPage;
