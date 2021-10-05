import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  cpf: Yup.string().min(11, 'CPF inválido').max(11).required('CPF inválido'),
  password: Yup.string()
    .min(6, 'Senha muito curta')
    .required('A senha é necessária'),
});

export const registerPatientSchema = Yup.object().shape({
  name: Yup.string().required('O nome é necessário!'),
  cpf: Yup.string().min(11, 'CPF inválido').max(11).required('CPF inválido'),
  email: Yup.string().email('Email inválido!').required('Email inválido'),
  password: Yup.string()
    .min(6, 'Senha muito curta')
    .required('A senha é necessária'),
  confirmed_password: Yup.string()
    .min(6, 'Senha muito curta')
    .required('A senha é necessária'),
  birth_date: Yup.date()
    .default(() => {
      return new Date();
    })
    .required(),
});

export const registerDoctorSchema = Yup.object().shape({
  name: Yup.string().required('O nome é necessário!'),
  crm: Yup.string().required('CRM necessário!'),
  email: Yup.string().email('Email inválido!').required('Email inválido'),
  password: Yup.string()
    .min(6, 'Senha muito curta')
    .required('A senha é necessária'),
  confirmed_password: Yup.string()
    .min(6, 'Senha muito curta')
    .required('A senha é necessária'),
  birth_date: Yup.date()
    .default(() => {
      return new Date();
    })
    .required(),
});
