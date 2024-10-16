import "../styles/components.css";

type DropdownProps = {
    hover: boolean
    title: string
    links: [{
        content: string,
        url: string
    }]
};

export default function Dropdown(props: DropdownProps){
    
    return(
        <div className="dropdown-container">
            <a className="dropdown">
                {props.title}
            </a>
            <div className="dropdown-content">
                {
                    props.links.map((link, i) => {
                        return(
                            <a key={i} className="dropdown-link">{link.content}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}