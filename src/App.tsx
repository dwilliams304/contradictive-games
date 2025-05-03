import { 
    NavigationBar,
    Footer
} from "./components/layout";

import { 
    HomePage 
} from "./components/pages";

export default function App(){
    return(
        <div>
            <NavigationBar />
            <HomePage />
            <Footer />
        </div>
    )
}