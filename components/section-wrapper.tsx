import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  background?: ReactNode;
}

export function SectionWrapper({ children, background }: SectionWrapperProps) {
  return (
    <div className="relative w-full overflow-visible">
      {children}
      {background}
    </div>
  );
}
