import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import imagePath from '../../assets/images/imagePath';
import CustomInput from '../../components/CustomInput';
import GradientButton from '../../components/GradientButton';
import { CustomColors } from '../../theme/colors';

const { height } = Dimensions.get('window');

const LoginScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const { handleLogin } = route.params;

  const onSignIn = () => {
    handleLogin();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagePath.MaskImg}
        style={styles.topImage}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign In</Text>
      </ImageBackground>

      <View style={styles.formContainer}>
        <Text style={styles.welcome}>Welcome!</Text>

        <Text style={styles.label}>Email</Text>
        <CustomInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          leftIcon="mail-outline"
        />

        <Text style={styles.label}>Password</Text>
        <CustomInput
          placeholder="**********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          leftIcon="lock-closed-outline"
          showTogglePassword
          inputStyle={{ backgroundColor: 'transparent' }}
        />

        <View style={styles.rowBetween}>
          <Text style={styles.link}>Remember me</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Forget password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <GradientButton title="Sign In" onPress={onSignIn} />
        </View>

        <View style={styles.orSection}>
          <Text style={styles.or}>- OR -</Text>
          <Text style={styles.socialTitle}>Sign in with</Text>
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={20} color="#fff" />
              <Text style={styles.socialText}> Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="google" size={20} color="#fff" />
              <Text style={styles.socialText}> Google</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.signupRow}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CustomColors.blackOpacity80,
  },
  topImage: {
    height: height * 0.2,
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',
    paddingTop: '16%',
  },
  backButton: {
    backgroundColor: '#373F45',
    height: 30,
    width: 30,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#373F45',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  link: {
    color: '#fff',
    fontSize: 14,
  },
  fullWidth: {
    width: '100%',
  },
  orSection: {
    alignItems: 'center',
  },
  or: {
    color: '#aaa',
    fontSize: 20,
    color: '#fff',
    marginVertical: 15,
  },
  socialTitle: {
    color: '#ccc',
    marginBottom: 10,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#1c1c1c',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialText: {
    color: '#fff',
    fontSize: 14,
  },
  signupRow: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: '#aaa',
  },
  signupLink: {
    color: '#fff',
    fontWeight: '600',
  },
});
