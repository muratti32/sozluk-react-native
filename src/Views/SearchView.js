import React from 'react'
import { View, Text,Button } from 'react-native'
import Container from "../components/Container";
import AramaKutusu from "../components/AramaKutusu";

function HomeScreen({navigation}) {
  return (


        <Container>
            <AramaKutusu />
            <Text>Home Screen</Text>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('detail')}
            />
        </Container>
  );
}



export default HomeScreen;
