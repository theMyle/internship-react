type LoadingProps = {
    message?: string;
    fullScreen?: boolean;
};

export default function Loading({ message = 'Loading...', fullScreen = true }: LoadingProps) {
    return (
        <div
            role="status"
            aria-live="polite"
            className={
                fullScreen
                    ? 'fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm'
                    : 'flex items-center justify-center'
            }
        >
            <div className="flex flex-col items-center gap-4">
                <svg
                    className="h-16 w-16 animate-spin text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                </svg>

                <span className="text-gray-700 font-medium">{message}</span>
            </div>
        </div>
    );
}
