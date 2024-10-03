import React from "react";
import { cn } from "@/lib/utils";

interface ContianerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = React.forwardRef<HTMLDivElement, ContianerProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export default Container;
