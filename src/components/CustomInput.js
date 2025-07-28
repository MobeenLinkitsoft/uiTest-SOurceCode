import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  leftIcon = null,
  rightIcon = null,
  showTogglePassword = false,
  iconColor = '#fff',
  inputStyle = {},
  containerStyle = {},
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const renderLeftIcon = () => {
    if (!leftIcon) return null;
    return (
      <Ionicons
        name={leftIcon}
        size={20}
        color={iconColor}
        style={styles.iconLeft}
      />
    );
  };

  const renderRightIcon = () => {
    if (showTogglePassword) {
      return (
        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color={iconColor}
            style={styles.iconRight}
          />
        </TouchableOpacity>
      );
    }

    if (rightIcon) {
      return (
        <MaterialIcons
          name={rightIcon}
          size={20}
          color={iconColor}
          style={styles.iconRight}
        />
      );
    }

    return null;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {renderLeftIcon()}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        keyboardType={keyboardType}
        style={[styles.input, inputStyle]}
        placeholderTextColor="#999"
      />
      {renderRightIcon()}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 3,
    marginVertical: 8,
    backgroundColor: '#50575C',
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
});
