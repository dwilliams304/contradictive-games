import { Dropdown } from "../../types/types";


export default function DropdownMenu(props: Dropdown){
    const { title, options } = props;
    
    return(
        <div>
            <p>{title}</p>
            <div>
                {
                    options.map((option, i) => (
                        <p 
                        key={i}
                        onClick={() => option.action}>
                            {option.content}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}