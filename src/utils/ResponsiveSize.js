// This solution is selected from this URL: https://stackoverflow.com/a/35074379/10042055
import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';
import { CustomColors } from '../theme/colors';
import { Enums } from './enums';
const { width: Window_Width, height: Window_Height } = Dimensions.get('window');
const { width: Screen_Width, height: Screen_Height } = Dimensions.get('screen');

// based on iphone 5s's scale
const scale = Window_Width / 320;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale2 = size => (Window_Width / guidelineBaseWidth) * size;

const verticalScale = size => (Window_Height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale2(size) - size) * factor;

export class GlobalStyles {
  static normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }

  static textualStyles = StyleSheet.create({
    xxmicro: {
      fontSize: GlobalStyles.normalize(6),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    xxmicroBold: {
      fontSize: GlobalStyles.normalize(6),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    xmicro: {
      fontSize: GlobalStyles.normalize(8),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    xmicroBold: {
      fontSize: GlobalStyles.normalize(8),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    micro: {
      fontSize: GlobalStyles.normalize(10),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    microBold: {
      fontSize: GlobalStyles.normalize(10),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    small: {
      fontSize: GlobalStyles.normalize(12),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    smallBold: {
      fontSize: GlobalStyles.normalize(12),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    smallBold13: {
      fontSize: GlobalStyles.normalize(13),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    medium: {
      fontSize: GlobalStyles.normalize(14),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    mediumBold: {
      fontSize: GlobalStyles.normalize(14),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    mediumLarge: {
      fontSize: GlobalStyles.normalize(14),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    mediumBold16: {
      fontSize: GlobalStyles.normalize(16),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    mediumBold18: {
      fontSize: GlobalStyles.normalize(18),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    large: {
      fontSize: GlobalStyles.normalize(18),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    largeBold: {
      fontSize: GlobalStyles.normalize(18),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    xlarge: {
      fontSize: GlobalStyles.normalize(22),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    xlargeBold: {
      fontSize: GlobalStyles.normalize(22),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    xxlarge: {
      fontSize: GlobalStyles.normalize(26),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    xxlargeBold: {
      fontSize: GlobalStyles.normalize(26),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    xxxlarge: {
      fontSize: GlobalStyles.normalize(32),
      fontFamily: Enums.CustomFonts.ProximaNovaMedium,
    },
    xxxlargeBold: {
      fontSize: GlobalStyles.normalize(32),
      // fontWeight: 'bold',
      fontFamily: Enums.CustomFonts.ProximaNovaBold,
    },
    noDataText: {
      padding: 5,
      textAlign: 'center',
      color: '#000000',
    },
  });

  static iOSStyles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: 'black',
    },
    keyboardAvoidingView: {
      flex: 1,
      backgroundColor: "white",
      padding: 0,
    },
  });

  static imageStyles = StyleSheet.create({
    logoInAuth: {
      height: 60,
      width: 60,
      alignSelf: 'center',
    },
    imageInAuth: {
      width: '100%',
      height: 150,
      marginVertical: 20,
    },
  });

  static shadowStyles = StyleSheet.create({
    dropShadow: {
      elevation: 5,
      shadowOffset: { width: 3, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      overflow: 'visible',
    },
    dropShadowAlternate: {
      borderColor: CustomColors.SHADE_ALTERNATE,
      borderWidth: 1,
    },
  });
}

export {
  Window_Width,
  Window_Height,
  Screen_Width,
  Screen_Height,
  verticalScale,
  moderateScale,
};