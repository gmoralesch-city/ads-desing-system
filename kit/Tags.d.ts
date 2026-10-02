import * as React from 'react';
export interface TagsProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "inicializada" | "pendiente" | "enviada" | "aprobada" | "declinada" | "omitida";
}
export declare const Tags: React.FC<TagsProps>;
export default Tags;
