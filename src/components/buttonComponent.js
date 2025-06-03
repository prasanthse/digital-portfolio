import { Button } from "@mui/material";

const ButtonComponent = ({
    label,
    variant="contained",
    onClick,
    sx,
    ...other
}) => {
    return(
        <>
            <Button
                variant={variant}
                onClick={onClick}
                sx={{
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