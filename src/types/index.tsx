import { ReactNode } from "react";

export type childrenProps = {
    children?: ReactNode;
};

export type HeaderType={
    level:number;
    children:ReactNode;
}