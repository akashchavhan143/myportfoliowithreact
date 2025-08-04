export const themes = {
  light: {
    token: {
      colorBgCard: "#fff0f5",
      modeName: "light",
      colorPrimary: "#6425c7", // purple as primary
      colorBgBase: "#ffffff",
      colorTextBase: "#000000",
      colorBgContainer: "#f0f2f5",
      colorBorder: "#d9d9d9",
      colorText: "#1f1f1f",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorLink: "#800080",
      colorLinkHover: "#a64ca6",
      fontSize: 14,
      fontFamily: "Roboto, sans-serif",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      layoutHeaderBg:"#a530ffff", // Light purple header background
      layoutSiderBg: "#f3eaff",
      layoutHeaderTextColor: "#000000",
      layoutHeaderBg2:
        "radial-gradient(circle farthest-corner at .5% 97.2%, #d1c1e0 0, #e6d1ff 100.2%)",
    },
    components: {
      Menu: {
        itemSelectedBg: "#800080",
        itemSelectedColor: "#ffffff",
        itemColor: "#1f1f1f",
        itemHoverColor: "rgb(207, 220, 245)",
        itemHoverBg: "#dab6ff",
      },
      Notification: {
        colorBgContainer: "#ffffff",
        colorText: "#000000",
        colorBorder: "#d9d9d9",
        colorSuccessBg: "#f6ffed",
        colorSuccessText: "#52c41a",
        colorSuccessBorder: "#b7eb8f",
        colorWarningBg: "#fffbe6",
        colorWarningText: "#faad14",
        colorWarningBorder: "#ffe58f",
        colorErrorBg: "#fff2f0",
        colorErrorText: "#ff4d4f",
        colorErrorBorder: "#ffccc7",
        colorInfoBg: "#e6f7ff",
        colorInfoText: "#800080",
        colorInfoBorder: "#d8b0ff",
      },
    },
  },

    dark: {
    token: {
      colorBgCard: "#0e1a2b", // Deep navy background for cards
      colorPrimary: "#00f0ff", // Neon cyan primary color
      colorBgBase: "#111827", // Overall dark background
      colorTextBase: "#e6f7ff", // Light cyan text
      colorBgContainer: "#111827", // Slightly lighter container
      colorBorder: "#334155",
      colorText: "#d1d5db",
      colorSuccess: "#22c55e",
      colorWarning: "#eab308",
      colorError: "#ef4444",
      colorLink: "#00f5ff",
      colorLinkHover: "#5ef7ff",
      fontSize: 14,
      fontFamily: "Roboto, sans-serif",
      borderRadius: 8,
      boxShadow: "0 0 15px rgba(0, 245, 255, 0.25)", // Glow effect
      layoutHeaderBg: "#0f172a",
      layoutSiderBg: "#1e293b",
      layoutHeaderTextColor: "#e6f7ff",
    },
    components: {
      Menu: {
        itemSelectedBg: "#00f5ff",
        itemSelectedColor: "#0f172a",
        itemColor: "#d1d5db",
        itemHoverColor: "#ffffff",
        itemHoverBg: "#00f5ff22",
      },
      Notification: {
        colorBgContainer: "#1e293b",
        colorText: "#e6f7ff",
        colorBorder: "#334155",
        colorSuccessBg: "#14532d",
        colorSuccessText: "#bbf7d0",
        colorSuccessBorder: "#15803d",
        colorWarningBg: "#78350f",
        colorWarningText: "#fde68a",
        colorWarningBorder: "#f59e0b",
        colorErrorBg: "#7f1d1d",
        colorErrorText: "#fecaca",
        colorErrorBorder: "#ef4444",
        colorInfoBg: "#0c4a6e",
        colorInfoText: "#67e8f9",
        colorInfoBorder: "#0891b2",
      },
    },
  },
};
