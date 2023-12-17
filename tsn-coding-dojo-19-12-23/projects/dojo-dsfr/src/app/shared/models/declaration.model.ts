export enum StatutEnum {
  EN_DSN = 'En DSN',
  EN_ATTENTE_DSN = 'En Attente DSN',
  CONTESTEE = 'Contestée'
}

export interface Declaration {
  id: string,
  siret: string,
  raisonSociale: string,
  origine: string,
  statut: StatutEnum,
  date: Date
}

export interface Data {
  month: string,
  declarationList: Declaration[]
}

export interface ChartData {
  penging: string,
  dsnApproved: string,
  pendingDSN: string,
  contestedByMe: string,
  contestedByOPCO: string
}
