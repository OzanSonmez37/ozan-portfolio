import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c0e",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: 92,
            fontWeight: 700,
            fontFamily: "Arial, Helvetica, sans-serif",
            letterSpacing: -4,
            color: "#f3f2ee",
          }}
        >
          OS
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              background: "#d6ff3f",
              marginLeft: 8,
              marginBottom: 14,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
