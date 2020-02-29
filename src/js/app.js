import '.././styles/main.scss'
import {Plugins} from '@capacitor/core'
const { Toast } = Plugins;
const { SplashScreen } = Plugins;

// Hide the splash (you should do this on app launch)
SplashScreen.hide();

Toast.show({
  text: 'App successfully loaded!'
});
