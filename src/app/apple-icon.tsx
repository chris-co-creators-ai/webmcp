import { ImageResponse } from "next/og";

// Clean white "W" on solid black for the iOS home-screen / apple-touch icon.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const svg =
  "<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>" +
  "<rect width='180' height='180' fill='#000000'/>" +
  "<path d='M38 56 L68 128 L90 86 L112 128 L142 56' fill='none' stroke='#ffffff' " +
  "stroke-width='13' stroke-linecap='round' stroke-linejoin='round'/></svg>";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#000" }}>
        <img width={180} height={180} src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} alt="W" />
      </div>
    ),
    size,
  );
}
