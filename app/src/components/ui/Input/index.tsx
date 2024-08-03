"use client";
import { useState } from "react";
import stylesHelper from "@/helpers/StylesHelper";
import { IInput } from "@/types";

export default function Input({ style = "", name, type = "text" }: IInput) {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      className={`input ${style}`}
      type={type}
      name={name}
      autoComplete="off"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
