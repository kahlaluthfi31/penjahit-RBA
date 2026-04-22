interface AlertProps {
    type: 'success' | 'error' | 'info';
    message: string;
    onClose?: () => void;
}

const Alert = ({ type, message, onClose }: AlertProps) => {
    const alertStyles = {
        success: 'bg-green-100 text-green-800 border-green-300',
        error: 'bg-red-100 text-red-800 border-red-300',
        info: 'bg-blue-100 text-blue-800 border-blue-300',
    };

    return (
        <div className={`border-l-4 p-4 rounded-md ${alertStyles[type]} relative`}>
            <p className="font-medium">{message}</p>
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    aria-label="Tutup"
                >
                    &times;
                </button>
            )}
        </div>
    );
};

export default Alert;