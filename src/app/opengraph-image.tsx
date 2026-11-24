import { ImageResponse } from "next/og";
import { metrics, profile } from "@/content/profile";

export const alt = `${profile.name} — Frontend Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0b0c",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#ededef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#a1a1aa" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#4ade80" }} />
          {profile.availability}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: 38, marginTop: 12 }}>
            <span>{profile.role}</span>
            <span style={{ color: "#85858f", marginLeft: 14 }}>· {profile.stack.join(", ")}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 64, borderTop: "1px solid #242428", paddingTop: 32 }}>
          {metrics.map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, fontWeight: 700, color: "#bef264" }}>{m.value}</span>
              <span style={{ fontSize: 22, color: "#85858f", marginTop: 4 }}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
