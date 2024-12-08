type ButtonProps = {
    classes?: string;
    styleType?: "primary" | "secondary" | "tertiary";
    type: "button" | "submit" | "reset";
    fn: ((...args: any[]) => void);
    text?: string;
    tooltip?: string;
    disabled: boolean;
}

export default function Button(props: ButtonProps){
    const {classes, styleType, type, fn, text, tooltip, disabled} = props;


    return(
        <button className={`btn-${styleType} ${classes}`}
        title={tooltip}
        type={type}
        disabled={disabled}
        onClick={fn}>
            {text}
        </button>
    )
}