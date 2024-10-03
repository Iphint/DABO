import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Facebook, Search, Linkedin } from '@/assets/images';
import { useNavigation } from 'expo-router';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.desc}>Please sign in with your account</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.switchContainer}>
          <TouchableOpacity style={styles.switchButton}>
            <Text style={[styles.switchText, styles.activeText]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => navigation.navigate('sign_up')}
          >
            <Text style={styles.switchText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formInput}>
          <TextInput
            style={styles.input}
            placeholder="Email or Mobile no"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or continue with</Text>

          <View style={styles.socialIcons}>
            <Image source={Facebook} style={styles.circle} />
            <Image source={Search} style={styles.circle} />
            <Image source={Linkedin} style={styles.circle} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 160,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f1f8e9',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f9fbe7',
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  formInput: { flex: 1, justifyContent: 'center' },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1b5e20',
    textAlign: 'center',
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    color: '#388e3c',
    textAlign: 'center',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  switchButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  switchText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#66bb6a',
  },
  activeText: {
    color: '#2e7d32',
    borderBottomWidth: 2,
    borderBottomColor: '#2e7d32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#c8e6c9',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  forgotText: {
    color: '#81c784',
    textAlign: 'right',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#388e3c',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#66bb6a',
    marginBottom: 20,
    fontSize: 14,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 5,
    resizeMode: 'contain',
  },
});
