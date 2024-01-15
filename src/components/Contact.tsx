import { Toolbar, Typography } from "@mui/material";
import Hd from "./common/Hd";
import { useState } from "react";


const Contact = () => {
    const [passcode, setPasscode] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasscode(event.target.value);
    };

    const openTerminal = () => {
        window.open('https://lock3me.itch.io/lockhart-institute-terminal')
    }

    return (
        <>
            <Typography
                // style={{
                //     whiteSpace: "nowrap",
                // }}
            >
                Security Question: What is Lockhart?<Hd> ASHES ASHES ASHES ASHES ASHES</Hd><br/>
                Please enter the passcode: <input value={passcode} onChange={handleChange}/>
                {(passcode.toUpperCase() =='ASHES' ? (<button onClick={openTerminal}>ENTER</button>): (<Hd> ASHES ASHES ASHES</Hd>))}<br/>
                If you are a first-time guest, follow the instructions below.<Hd> ASHES ASHES ASHES</Hd><br/>
                <Hd> ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES</Hd><br/>
                Requires: APPENDAGETHATISYELLOW<Hd> ASHES ASHES ASHES ASHES ASHES</Hd><br/>
                <ol>
                    <li>Remove the PAGE and set it aside.<Hd> ASHES ASHES ASHES ASHES ASHES</Hd></li>
                    <li>Remove the D.<Hd> ASHES ASHES ASHES ASHES ASHES ASHES ASHES</Hd></li>
                    <li>
                        Find an object that can cover text without obscuring it and matches what<br/>
                        remains. It should be stationery.<Hd> ASHES ASHES ASHES ASHES ASHES</Hd>
                    </li>
                    <li>
                        Remove the ER from the name of the object. Place the word below in the first<br/>
                        nine slots.<Hd> ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES</Hd>
                    </li>
                    <li>
                        Place the PAGE you removed in step 1 into the last four slots below.<Hd> ASHES</Hd>
                    </li>
                    <li>
                        Use the hint to solve for the passcode.<Hd> ASHES ASHES ASHES ASHES</Hd>
                    </li>
                </ol>
                Hint: _ _ _ _ _ _ _ _ _ T<Hd>A</Hd>H<Hd>S</Hd>E<Hd>H</Hd> W<Hd>E</Hd>E<Hd>S</Hd>B _ _ _ _<Hd> ASHES ASHES ASHES ASHES</Hd><br/>
                <Hd>ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES</Hd><br/>
                <Hd>ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES</Hd><br/>
                <Hd>ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES</Hd><br/>
                <Hd>ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES ASHES</Hd><br/>
            </Typography>
        </>
    );
};

export default Contact;
