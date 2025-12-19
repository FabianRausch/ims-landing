export function BackgroundLines({
  side = "left",
  maxHeight = "700px",
  maxWidth = "700px",
  top = "0",
  left = "0",
  right = "0",
  bottom = "0",
}: {
  side?: "left" | "right";
  maxHeight?: string;
  maxWidth?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}) {
  return (
    <div
      className="absolute pointer-events-none z-0"
      style={{
        backgroundImage: "url('/lines.PNG')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        maxHeight,
        maxWidth,
        top,
        left: left || "auto",
        right: right || "auto",
        transform: side === "left" ? "scaleX(1)" : "scaleX(-1)",
        bottom,
        position: "absolute",
        opacity: 0.3,
      }}
    ></div>
  );
}
