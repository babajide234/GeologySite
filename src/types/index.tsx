import { ReactNode } from "react";

export type childrenProps = {
    children?: ReactNode;
};

export type HeaderType={
    level:number;
    children:ReactNode;
}

export type Equipment = {
    name: string;
    description: string;
    price?: string;
    usage?: string;
    image: string;
    category: string;
  };
  