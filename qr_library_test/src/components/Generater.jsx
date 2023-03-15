import { useState } from "react";

import {QRCodeSVG} from "qrcode.react";

export const Generater = () => {

    const [text, setText] = useState("");
    const [generateText, setGenerateText] = useState("");

    const generateQR = () => {
        setGenerateText(text);
    }

    return(
        <div>
            <h1>QR生成</h1>
            <p>内容を入力</p>
            <input value={text} onChange={(event) => setText(event.target.value)} />
            <button onClick={generateQR}>生成！</button><br></br>
            <QRCodeSVG value={generateText} />
        </div>
    );
};