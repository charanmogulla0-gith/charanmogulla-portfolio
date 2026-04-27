"use client";

import { Toaster } from "react-hot-toast";

export function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "rgb(14 17 30)",
          color: "rgb(237 240 247)",
          border: "1px solid rgb(30 35 55)",
          fontSize: "14px",
        },
        success: {
          iconTheme: { primary: "rgb(52 211 153)", secondary: "rgb(6 8 18)" },
        },
        error: {
          iconTheme: { primary: "rgb(248 113 113)", secondary: "rgb(6 8 18)" },
        },
      }}
    />
  );
}
