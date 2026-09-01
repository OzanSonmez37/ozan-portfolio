import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: 19,
            fontWeight: 700,
            fontFamily: "Arial, Helvetica, sans-serif",
            letterSpacing: -1,
            color: "#f3f2ee",
          }}
        >
          OS
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: 9999,
              background: "#d6ff3f",
              marginLeft: 2,
              marginBottom: 3,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
