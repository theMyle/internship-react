import { type ReactNode } from 'react';

type ErrorProps = {
    message?: string | ReactNode;
    onRetry?: () => void;
    showHome?: boolean;
};

export default function Error({
    message = 'Your PC ran into a problem and needs to restart. We\'re just collecting some error info, and then we\'ll restart for you.',
    onRetry,
    showHome = true,
}: ErrorProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#012169] text-white">
            <div className="max-w-3xl p-8 text-center">
                <h1 className="text-6xl font-bold mb-6">:(</h1>

                <h2 className="text-2xl font-semibold mb-4">A problem has been detected</h2>

                <p className="text-sm mb-6 leading-relaxed text-blue-100">
                    {message}
                </p>

                <div className="flex items-center justify-center gap-4">
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="rounded bg-white/10 px-4 py-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            Restart
                        </button>
                    )}

                    {showHome && (
                        <a
                            href="/"
                            className="rounded bg-white/10 px-4 py-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            Go to Home
                        </a>
                    )}
                </div>

                <footer className="mt-8 text-xs text-blue-200/80">
                    Stop code: REACT_APP_ERROR
                </footer>
            </div>
        </div>
    );
}
