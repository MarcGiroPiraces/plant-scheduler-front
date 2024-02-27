import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  onClick?: () => Promise<void>;
}

export function ButtonComponent({ text, onClick }: ButtonProps) {
  const handleClick = async () => {
    if (onClick) {
      try {
        await onClick();
      } catch (error) {
        console.error("Error during API call:", error);
      }
    }
  };

  //return a button with the text and the onClick function and some border radius
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      style={{ borderRadius: "20px" }}
    >
      {text}
    </Button>
  );
}
