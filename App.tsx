import React from "react";
import { SafeAreaView } from "react-native";
import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
import ContadorScreen from "./src/screens/ContadorScreen";
import { DimensionScreen } from "./src/screens/DimensionScreen";
import { FlexScreen } from "./src/screens/FlexScreen";
import { PositionScreen } from "./src/screens/PositionScreen";

export const App = () => {
    return (
        //<ContadorScreen></ContadorScreen>
        <SafeAreaView style={{ flex: 1 }}>
            {/**<BoxObjectModelScreen></BoxObjectModelScreen> */}
            {/*<DimensionScreen /> */}
            {/*<PositionScreen />*/}
            <FlexScreen />
        </SafeAreaView>
    )
}

export default App;