import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const getCurrentLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return {
          status: false,
          errorMessage : 'Please enable the permission to mark the attendance.'
      }
    }
    
    //Accuracy.High = 4 Accurate to within ten meters of the desired target.
    let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
    return {
        status: false,
        location
    }
};

export { getCurrentLocation }