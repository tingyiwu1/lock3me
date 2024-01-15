import { Toolbar, Typography } from "@mui/material";

const Archives = () => {
    return (
        <>
            <Typography>
                <button onClick={()=>window.open('https://docs.google.com/document/d/1dXzfyAsG9cOJ5LhopceG0gPQeOysFY6HiJaEACXOWQ0/edit')}>V-SamfordDarksky</button><br/>
                <button onClick={()=>window.open('https://docs.google.com/document/d/1FH0OzO1wReaEfgnFAMDu2fk6mHc8SqrZgQP2Un3hRp8/edit')}>V-AmyQi</button><br/>
                <button onClick={()=>window.open('https://docs.google.com/document/d/19RUZyB0u2GxvZ3Bmv_5kJG1GFHcEvph_0q1iJuLNcLY/edit')}>VI-SilentWitness</button><br/>
                <button onClick={()=>window.open('https://docs.google.com/document/d/1QRvBTBjxJNx1mGe5S7_UOKfA8LRE1ZF0G0DrSsdHEpY/edit')}>Yub Yub</button><br/>
            </Typography>
        </>
    );
};

export default Archives;
