import { View, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {

    return (
        <MapView
            provider={PROVIDER_DEFAULT}
            className="flex-1 rounded-lg"
            style={{ flex: 1 }}
            tintColor="black"
            showsPointsOfInterest={false}
            showsUserLocation={true}
            userInterfaceStyle="light"
        >
            <Text>map</Text>
        </MapView>
    );
};

export default Map;
