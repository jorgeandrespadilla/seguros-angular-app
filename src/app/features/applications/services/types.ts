export interface AddApplication {
  description: string
  desde: string
  hasta: string
  tipoTransporte: string
  perteneciente: string,
  fechaEmbarque: Date,
  fechaLlegada: Date,
  embarcadoPor: string,
  notaDePedido: string,
  ordenDeCompra: number,
  marca: string,
  descripcionContenido: string,
  pesoBruto: number,
  observaciones: string,
  montoTotalCompra: number,
  porcentajeGastosJustificados: number,
  sumaAseguradas: number,
  tasa: number,
  valorPrima: number,
  cobertura: string,
  deducible: number,
  objetoSeguro: string
}

export interface Application {
  id: number;
  policyNumber: number;
  description: string;
  fechaCreacion: Date;
}

export interface ApplicationDetail extends AddApplication, Application { }

export interface Company {
  id: number;
  name: string;
  application: Application[];
}

export interface GetCompanies {
  fechaInicio?: Date;
  fechaFin?: Date;
}
