"use client";
import { useFruitStore } from "@/stores/useFruitStore";
import React from "react";

export default function TestZustand() {
  const { fruitList, addFruit, removeFruit } = useFruitStore((store) => store);

  return (
    <div>
      <button
        className={"bg-green-500 "}
        onClick={() => addFruit({ id: 1, name: "Morango" })}
      >
        Adicionar Morango
      </button>
      <button
        className={"bg-red-500 "}
        onClick={() => addFruit({ id: 2, name: "Banana" })}
      >
        Adicionar Banana
      </button>
      {fruitList.map((elem,index) => (
        <li key={index}>
          <h3>{elem.name}</h3>
          <button
            className={"bg-red-500 rounded"}
            onClick={() => removeFruit(elem.id)}
          >
            Remover
          </button>
        </li>
      ))}
    </div>
  );
}
