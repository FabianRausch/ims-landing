export function BackgroundWorld({
  maxHeight,
  maxWidth,
  top,
  left,
  right,
  bottom,
  side,
}: {
  maxHeight?: string;
  maxWidth?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  side?: "left" | "right";
}) {
  return (
    <div
      className="absolute pointer-events-none z-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/world.png')",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        maxHeight,
        maxWidth,
        top,
        left: left || "auto",
        right: right || "auto",
        bottom,
        transform: side === "left" ? "scaleX(-1)" : "scaleX(1)",
        opacity: 0.4,
        position: "absolute",
      }}
    ></div>
  );
}
