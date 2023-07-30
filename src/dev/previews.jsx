import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {TableData} from "../components/TableData/TableData.jsx";
import {EditData} from "../components/TableData/EditData.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/TableData">
                <TableData />
            </ComponentPreview>
            <ComponentPreview path="/EditData">
                <EditData />
            </ComponentPreview>
        </Previews>
    );
}

export default ComponentPreviews