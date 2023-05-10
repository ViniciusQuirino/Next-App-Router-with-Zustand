"use client";

import { IClient } from "@/stores/useClientStore";
import React from "react";

interface ICardClientProps {
  data: IClient[];
}

const CardClientes = ({ data }: ICardClientProps) => {
  // CLIENT
  return (
    <div>
      <ul>
        {data.map((elem: any) => (
          <li key={elem.id}>{elem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardClientes;
