export interface TopicItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  badgeText: string;
  features: string[];
}

export interface OperatorCardData {
  studentName: string;
  cpfOrId: string;
  registrationNumber: string;
  issueDate: string;
  machineSpecialty: string;
  validationHash: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type PaymentMethod = 'pix' | 'credit_card';

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  paymentMethod: PaymentMethod;
}
