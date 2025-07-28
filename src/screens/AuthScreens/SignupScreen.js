import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import imagePath from '../../assets/images/imagePath';
import CustomInput from '../../components/CustomInput';
import GradientButton from '../../components/GradientButton';
import { CustomColors } from '../../theme/colors';

const { height } = Dimensions.get('window');

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

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
          <Ionicons name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign Up</Text>
      </ImageBackground>

      <ScrollView>
        <View style={styles.formContainer}>
          <View style={styles.avatarWrapper}>
            <Image source={imagePath.Img3} style={styles.avatar} />
            <TouchableOpacity style={styles.avatarAdd}>
              <Ionicons name="add" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          <CustomInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            leftIcon="person-outline"
          />
          <CustomInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            leftIcon="person-outline"
          />
          <CustomInput
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            leftIcon="call-outline"
          />
          <CustomInput
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            leftIcon="mail-outline"
          />
          <CustomInput
            placeholder="**********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
            leftIcon="lock-closed-outline"
            showTogglePassword
          />

          <View style={styles.buttonContainer}>
            <GradientButton
              title="Sign Up"
              onPress={() => {}}
              containerStyle={styles.fullWidth}
            />
          </View>

          <View style={styles.orSection}>
            <Text style={styles.or}>- OR -</Text>
            <Text style={styles.socialTitle}>Sign Up with</Text>
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

          <TouchableOpacity style={styles.signupRow}>
            <Text style={styles.signupText}>
              Already have an account?{' '}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.navigate('Login')}
              >
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CustomColors.blackOpacity80,
  },
  topImage: {
    height: height * 0.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 60,
  },
  backButton: {
    backgroundColor: '#373F45',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarAdd: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    backgroundColor: '#4fc3f7',
    borderRadius: 12,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  orSection: {
    alignItems: 'center',
  },
  or: {
    fontSize: 18,
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
  },
  signupText: {
    color: '#aaa',
    textAlign: 'center',
  },
  signupLink: {
    color: '#fff',
    fontWeight: '600',
  },
});
