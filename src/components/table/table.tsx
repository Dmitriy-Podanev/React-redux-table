import React from "react";

import {makeStyles} from '@material-ui/core/styles';

interface Props {

}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const table: React.FC<Props> = () => (
    <table className="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>E-mail</th>
            <th>Age</th>

        </tr>
        </thead>


    </table>
);