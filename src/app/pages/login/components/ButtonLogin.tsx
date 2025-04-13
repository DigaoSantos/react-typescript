

interface IButtonLoginProps {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}