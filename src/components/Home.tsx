import { Toolbar, Typography } from "@mui/material";
import irv_prison from "../irv_prison.jpg";
import Hd from "./common/Hd";

const Home = () => {
    return (
        <>
            <Toolbar />
            <img src={irv_prison} height={300}/>
            <Typography>
                Welcome to the homepage of the Lockhart Institute. This historic
                prison, along with its adjoining Research branch, houses roughly
                2,000 prisoners behind maximum security defenses. Key features
                include the time warp and the Research building in the back of
                the prison.
            </Typography>
            <Typography>Coordinates: 37°31′23.16″N 121°58′2.79″W</Typography>
            <Typography>Institution Hours: 4PM-7:30AM</Typography>
            <Typography>Open on holidays and weekends</Typography>
            <br />
            <Typography>
                ONCE YO<Hd>U</Hd> ENTE<Hd>R</Hd>, THERE IS <Hd>N</Hd>O OTH
                <Hd>E</Hd>R WAY TO E<Hd>X</Hd>I<Hd>T</Hd>
            </Typography>
            <br />
            <Typography sx={{ fontStyle: "italic" }}>
                <p>Ring around the rosie,</p>
                <p>A pocket full of posies</p>
                <p>Ashes, ashes</p>
                <p>We all fall down</p>
            </Typography>
        </>
    );
};

export default Home;
