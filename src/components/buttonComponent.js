import { Button } from "@mui/material";

const ButtonComponent = ({
    label,
    variant="contained",
    onClick,
    textColor="white",
    sx,
    ...other
}) => {
    return(
        <>
            <Button
                variant={variant}
                onClick={onClick}
                sx={{
                    color: textColor,
                    ...sx
                }}
                {...other}
                className="onMouseOver"
            >
                {label}
            </Button>
        </>
    );
}

export default ButtonComponent;