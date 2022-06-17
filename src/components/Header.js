import React from 'react';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

function Header(props) {
    return (
        <header>
            <h1><StickyNote2Icon /> Note Keeper</h1>
            <h5>
                Number of notes: {20 === props.currenteNotesSize ? <font color="red">{props.currenteNotesSize} / 20</font> : <font>{props.currenteNotesSize} / 20</font>}
            </h5>
        </header>
    );
}

export default Header;