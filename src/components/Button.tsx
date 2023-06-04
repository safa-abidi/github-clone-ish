import "./Button.css";

interface ButtonProps {
  borderRadius?: string;
  onClick: () => void;
  children?: React.ReactNode;
}
const Button = (props: ButtonProps) => {
  return (
    <button
      style={{ borderRadius: props.borderRadius }}
      onClick={props.onClick}
      className="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
