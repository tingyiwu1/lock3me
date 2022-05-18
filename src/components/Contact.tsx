import { Toolbar, Typography } from "@mui/material";
import Hd from "./common/Hd";

const Contact = () => {
    return (
        <>
            <Toolbar />
            <Typography>Security Question: What is Lockhart?</Typography>
            <Typography>
                Please enter the passcode: <input></input>
            </Typography>
            <Typography>
                If you are a first-time guest, follow the instructions below.
            </Typography>
            <br />
            <Typography>Requires: APPENDAGETHATISYELLOW</Typography>
            <Typography>
                <ol>
                    <li>Remove the PAGE and set it aside.</li>
                    <li>Remove the D.</li>
                    <li>
                        Find an object that can cover text without obscuring it
                        and matches what remains. It should be stationery.
                    </li>
                    <li>
                        Remove the ER from the name of the object. Place the
                        word below in the first nine slots.{" "}
                    </li>
                    <li>
                        Place the PAGE you removed in step 1 into the last four
                        slots below.
                    </li>
                    <li>Use the hint to solve for the passcode.</li>
                </ol>
            </Typography>
            <Typography>
                Hint: _ _ _ _ _ _ _ _ _ T<Hd>A</Hd>H<Hd>S</Hd>E<Hd>H</Hd> W
                <Hd>E</Hd>E<Hd>S</Hd>B _ _ _ _
            </Typography>
        </>
    );
};

export default Contact;
