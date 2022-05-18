import { Toolbar, Typography } from "@mui/material";
import Hd from "./common/Hd";

const About = () => {
    return (
        <>
            <Toolbar />
            <Typography>
                The Lockhart Institute was founded by Dr. Alexandria Lockhart in
                1932, and its adjoining Research branch was added in 1935. Since
                then, it has undergone considerable changes due to its rapid
                expansion. Its most dramatic development occurred in 1961, when
                the prison was reconstructed into a public school for funding
                purposes. Experimentation has continued in the Research branch,
                which was refurbished into the school’s newest building in 2016.
                All operations continue as normal.
            </Typography>
            <br />
            <Typography sx={{ fontStyle: "italic" }}>
                <p>
                    <Hd>Ring around the rosie,</Hd>
                </p>
                <p>A pocket full of posies</p>
                <p>
                    <Hd>Ashes, ashes</Hd>
                </p>
                <p>They all burn down</p>
            </Typography>
        </>
    );
};

export default About;
