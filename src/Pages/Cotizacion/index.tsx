import { IProforma, OperationAction } from "@Types/index";
// components
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";

import PageTitle from "@Components/PageTitle";

import Columns from "./dtaCotizacioncolumns";
import { useNavigate } from "react-router";
import { URLS } from "@Constants/url";
import { useCotizacionStore } from "../../store";
import { useEffect } from "react";

function PageCotizacion() {
  const Navigate = useNavigate();
  const fetchCotizaciones = useCotizacionStore(
    (state) => state.fetchCotizaciones,
  );
  const cotizaciones = useCotizacionStore(
    (state) => state.cotizaciones,
  );
  function handleClickAdd(): void {
    const path: string = `${URLS.URL_COTIZACION}/registro`;
    Navigate(path);
  }
  function handleClickActionRow(
    accion: OperationAction,
    item: IProforma,
  ) {
    console.log(item);
    if (accion === "edit") {
      console.log(accion);
    }
  }

  useEffect(() => {
    fetchCotizaciones();
  }, [fetchCotizaciones]);
  return (
    <Layout title="Cotización">
      <PageTitle>Cortizacion</PageTitle>
      <div className="overscroll-auto md:w-7/12">
        <Datatable
          title="Produtos"
          columns={Columns({ onClick: handleClickActionRow })}
          data={cotizaciones}
          addActionText="Nueva Cotización"
          onClick={handleClickAdd}
        />
      </div>
    </Layout>
  );
}

export default PageCotizacion;
