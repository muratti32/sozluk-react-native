import React from 'react'
import { Text, View,Button } from 'react-native'
import styled from 'styled-components';
import SvgFavoriteSolid from '../components/icons/Left'
import theme from '../../styles/theme.style.js'
import Container from "./Container";
import {Search} from "./icons";
import {Keyboard} from "react-native";
import { FontAwesome,MaterialIcons} from '@expo/vector-icons';

const AramaKutusu= () => {



    const [value, onChangeText] = React.useState('');
    const [isFocus,setFocus] = React.useState(false)

    const setSearchFocus = () => {
        setFocus(true);
    }

    function vazgecClick() {
        setFocus(false)
        onChangeText('');
        Keyboard.dismiss();
    }

    function silClick() {
        onChangeText('');
    }

    return (

        <ButtonContainer>
            <InputContainer>


                <Input
                    radii={theme.radii}
                    onChangeText={(text) =>{ onChangeText(text); setFocus(true)}}
                    value={value}
                    onFocus={setSearchFocus}
                    placeholder = "Sözlükte Ara.."
                    placeholderTextColor={theme.textMedium}
                    color = {theme.textDark}
                    isFocus={isFocus}
                    borderColor={theme.red}
                 />

                {
                    value.length>0 && (
                        <IptalIcon>
                            <MaterialIcons
                                name="clear"
                                size={24}
                                onPress={()=> silClick() }
                                color={theme.textDark} />
                        </IptalIcon>
                    )
                }
            </InputContainer>
             <AramaIcon>
              <FontAwesome
                  name="search"
                  size={24}
                  onPress={()=> alert("halo")}
                  color={theme.textMedium} />


            </AramaIcon>

            {isFocus &&
                (
                    <Button
                    onPress={() =>vazgecClick()}
                    title="Vazgeç">
                    <Text> Vazgeç </Text>
                    </Button>
                 )
            }

        </ButtonContainer>
    )
}

export default AramaKutusu


const InputContainer = styled.View`
flex:1;
flex-direction: row;
 height: 52px; 
 position: relative;
justify-content: space-between;

`;

const Input = styled.TextInput`
 flex:1;
 background-color: white;
 borderWidth: 1px;
 border-color: ${props => props.isFocus ? props.borderColor : "transparent"};
 padding-left: 39px;
 border-radius: ${props => props.radii};
 box-shadow: 0px 4px 24px  #00000010;
`;

const ButtonContainer = styled.View`
flex:1;
position: relative;
flex-direction: row;
 align-items: center;
 margin: 10px;
`;

const AramaIcon = styled.View`
flex:1;
position: absolute;
padding-left: 9px;
`;

const IptalIcon = styled.View`
position: absolute;
top: 14px;
right: 3px;
`;

const VazgecText =  styled.Text`
padding-left: 3px;
`;