import * as React from 'react';
export interface InternationalProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bank" | "mobile payment";
  property2?: "Alipay" | "Amazon" | "American Express" | "ApplePay" | "Bancontact" | "Bitcoin" | "Bitpay" | "DinersClub" | "Discover" | "Etherium" | "GooglePay" | "Ideal" | "JCB" | "Klarna" | "Maestro" | "Masterrcard" | "PayPal" | "Payoneer" | "Paypal" | "Qiwi" | "SEPA" | "Skrill" | "Stripe" | "UnionPay" | "Visa" | "WeChat" | "Western Union" | "Yandex" | "giropay";
}
export declare const International: React.FC<InternationalProps>;
export default International;
