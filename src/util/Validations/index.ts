import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  cpf: Yup.string()
    .min(11, 'CPF inválido')
    .max(11, 'assahfjah')
    .required('CPF inválido'),
  password: Yup.string()
    .min(6, 'Senha muito curta')
    .required('A senha é necessária'),
  // crm: Yup.string().required(),
});
