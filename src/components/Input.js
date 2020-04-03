import {TextInput} from "react-native";
import styled from "styled-components";
import {typografy,compose,size,color,space} from "styled-components";

const Input = styled(TextInput)(
    compose(
        typografy,
        space,
        size,
        color,

    )
);

export default Input;