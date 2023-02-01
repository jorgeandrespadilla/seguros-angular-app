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
  createdDate: Date;
}

export interface ApplicationDetail extends AddApplication, Application {
  createdAt: Date;
}

export interface Company {
  id: number;
  name: string;
  application: Application[];
}

export interface GetCompaniesRequest {
  fechaInicio?: Date;
  fechaFin?: Date;
}
