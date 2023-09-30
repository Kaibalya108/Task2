/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: {
          "100": "#f9faff",
          "200": "#f7f8fd",
        },
        aliceblue: {
          "100": "#f3fafc",
          "200": "#edf4ff",
          "300": "#ecf1ff",
          "400": "#edf1fd",
          "500": "#e6e9ef",
          "600": "#edf2ff",
        },
        royalblue: {
          "100": "#305dc6",
          "200": "#1d5ecd",
          "300": "#1d4ed8",
          "400": "#0557e5",
        },
        white: "#fff",
        whitesmoke: {
          "100": "#f3f3f4",
          "200": "#f3f3f3",
          "300": "#ececec",
          "400": "#f8f8f8",
          "800": "rgba(246, 246, 249, 0.3)",
        },
        steelblue: "#037092",
        lavender: {
          "100": "#e3ebff",
          "200": "#e0e8fd",
          "300": "#d7e5fd",
          "400": "#d0e1ff",
          "500": "#d8dfeb",
          "600": "#d1ddff",
        },
        gray: "#0b0b0b",
        midnightblue: "#171649",
        black: "#000",
        "daybreak-blue-blue-6": "#1890ff",
        lightslategray: "#8492a7",
        gainsboro: {
          "100": "#dde2e4",
          "200": "#dadada",
        },
        darkslateblue: "#22215b",
        darkslategray: {
          "100": "#384a69",
          "200": "#444",
        },
        darkgray: "#9aa6ac",
        lightsteelblue: "#b1cdfd",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
        "21xl": "40px",
        "3xs": "10px",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      base: "16px",
      xs: "12px",
      xl: "20px",
      "3xs": "10px",
      "5xs": "8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
