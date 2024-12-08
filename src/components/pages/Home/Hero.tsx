import {
    Button
} from "../../common/";

export default function Hero(){
    return(
        <section className="hero">
            <div className="content">
                <h2>Hero Header</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat
                </p>
                <div>
                    <Button 
                        styleType="primary"
                        text="Button 1"
                        tooltip="Button 1"
                        type="button"
                        disabled={false}
                        fn={() => {}}
                    />

                    <Button 
                        styleType="secondary"
                        text="Button 2"
                        tooltip="Button 2"
                        type="button"
                        disabled={false}
                        fn={() => {}}
                    />
                </div>
            </div>
            <div className="media">
                <img 
                    src="https://www.travelandleisure.com/thmb/Y7hV-3YzRm6f46T0P8pb0Tbs7pA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/james-webb-hole-WEBB0722-a7b14258290d4da9be4c7d50ee732d9b.jpg" 
                    alt="hero media"
                />
            </div>
        </section>
    )
}