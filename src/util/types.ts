export interface MedicineType {
  id: string;
  nome: string;
  dosagem: string;
  idRegister: string;
  categoria: string;
  classe_terapeutica: string;
  empresa_detentora: string;
}

export interface CommonUserAttributes {
  id?: string;
  name: string;
  email: string;
  birth_date: Date;
  phone: string;
  token: string;
}

export interface User extends CommonUserAttributes {
  cpf?: string;
  crm?: string;
  card_id: string;
}
