import { Toolbar, Typography } from "@mui/material";
import Hd from "./common/Hd"

const Mission = () => {
    return (
        <>
            <Toolbar />
            <Typography>
                The Lockhart Institute’s Research branch is dedicated to
                improving the lives of humankind through relentless
                experimentation and innovation. All our researchers subscribe to
                a firm belief in utilitarianism, and we strive to produce
                results that maximize the benefits for the greatest number of
                people. Currently, our team’s focus is on designing the perfect
                human to serve as a model for society.
            </Typography>
            <Typography >
                <Hd>YOU BETTER WATCH OUT YOU BETTER WATCH OUT YOU BETTER WATCH OUT</Hd>
            </Typography>
            <br/>
            <Typography sx={{ fontStyle: "italic" }}>
                <p>Ring around the rosie,</p>
                <p><Hd>You better watch out</Hd></p>
                <p>Ashes, ashes</p>
                <p><Hd>If you succeed</Hd></p>
            </Typography>
        </>
    );
};

export default Mission;
