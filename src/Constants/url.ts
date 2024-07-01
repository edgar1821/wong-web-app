export enum URLS {
  URL_LOGIN = "/",
  URL_HOME = "/inicio",
  // mantenimiento
  URL_PRODUCTS = "/productos",
  URL_PRODUCTS_FORM = "/productos/:accion/:id?",
  URL_DOCTORS = "/doctores",
  URL_DOCTORS_FORM = "/doctores/:accion/:id?",
  // cotizacion
  URL_COTIZACION = "/cotizacion",
  URL_COTIZACION_FORM = "/cotizacion/:accion/:id?",

  // core
  URL_PROFORMA = "/proforma",
  URL_WORK_ORDER = "/orden-trabajo",

  // users
  URL_USERS = "/usuarios",

  //profile
  URL_MY_PROFILE = "/mi-perfil",
  URL_CHANGE_PASSWORD = "/mi-perfil/cambio-password",
}
export enum URLS_API {
  URL_LOGIN = "/api/v1/login",
  URL_USERS = "/api/v1/users",

  // roles
  URL_ROLES = "/api/v1/roles",
  // PRODUCTS
  URL_PRODUCTS = "/api/v1/product",
  URL_CURRENCY_TYPES = "/api/v1/currency_type",
  // DOCTORS
  URL_DOCTORS = "/api/v1/doctor",

  // COTIZACION
  URL_COTIZACION = "/api/v1/proforma",
  URL_DOCUMENT_TYPE = "/api/v1/document_type",
}
