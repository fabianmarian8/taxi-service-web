"use client";

import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-background">
          <div className="flex flex-col items-center w-full max-w-2xl p-8 text-center">
            <AlertTriangle
              size={48}
              className="text-yellow-500 mb-6 flex-shrink-0"
            />

            <h2 className="text-2xl font-bold mb-2">Niečo sa pokazilo</h2>
            <p className="text-muted-foreground mb-6">
              Ospravedlňujeme sa za nepríjemnosti. Skúste obnoviť stránku.
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="p-4 w-full rounded bg-muted overflow-auto mb-6 text-left">
                <pre className="text-sm text-muted-foreground whitespace-break-spaces">
                  {this.state.error?.stack}
                </pre>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => window.location.reload()}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 cursor-pointer"
                )}
              >
                <RotateCcw size={16} />
                Obnoviť stránku
              </button>
              <a
                href="/"
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "border border-border",
                  "hover:bg-muted cursor-pointer"
                )}
              >
                <Home size={16} />
                Domov
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
