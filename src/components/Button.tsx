import "./Button.css";

interface ButtonProps {
  borderRadius?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

/**
 * Button component represents a custom button element.
 * It can be customized with optional borderRadius prop.
 */
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
