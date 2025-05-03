type DropdownProps = {
    title: string;
    options: DropdownOptions[];
}
type DropdownOptions = {
    content: string;
    action: () => void;
}

export default function DropdownMenu(props: DropdownProps){
    const { title, options } = props;
    
    return(
        <div>
            <p>{title}</p>
            <div>
                {
                    options.map((option, i) => (
                        <p key={i}
                        onClick={() => option.action}>{option.content}</p>
                    ))
                }
            </div>
        </div>
    )
}