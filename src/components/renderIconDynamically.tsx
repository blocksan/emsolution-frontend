import React from 'react';
import { Icon } from "@ui-kitten/components"
import { IRenderIconProp } from "../interfaces/components/IRenderIcon"

const RenderIcon = (props: IRenderIconProp) => {
    const {name, style, onPress} = props;
    return (
        <Icon name={name} style={[style]} onPress={onPress} width={32} height={32} fill='#3366FF' />
    )
}

export {RenderIcon}