import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import GoogleImage from '../assets/google image.png';
import FacebookImage from '../assets/facebook icon.png';
import InstagramImage from '../assets/instagram icon.jpeg';

const  loginScreen= ()=> {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
          <View style= {styles.card}>
              <Text style={styles.title}>Login to your account</Text>

              <TextInput style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#999"
              />
                <TextInput style= {styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                  secureTextEntry={true}
              />
              <TouchableOpacity   >
                <Text  style={styles.forgot} onPress={() => navigation.navigate('ForgotVerify')}>Forgot Password?</Text>
              </TouchableOpacity>

             <TouchableOpacity
                style={styles.loginBtn}
              onPress={() => navigation.navigate('Home')}
             >
       <Text style={styles.loginText}>Login</Text>
         </TouchableOpacity>

              <Text style={styles.signupText}>
                  Dont have an account?{''}
                  <Text style={styles.link} onPress={() => navigation.navigate('SignUP')}>Create Now</Text>
              </Text>

              <View style={styles.socials}>
                  <Image style={styles.icon}
                      source={GoogleImage}
                  />
                  <Image style={styles.icon}
                      source={FacebookImage}
                  />
                  <Image style={styles.icon}
                      source={InstagramImage}
                          />
              </View>
              </View>
    </View>
  )
}

export default loginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    card: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 16,
        height: '100%',
        width: '100%',
       
        alignItems: 'center',
        justifyContent: 'center',   
        
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 14,
    },
    forgot: {
        color: 'red',
        alignSelf: 'flex-end',
        marginBottom: 20,
      
    },
    loginBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: '#6C63FF', // fallback gradient color
    marginBottom: 16,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
  },
  signupText: {
    fontSize: 14,
    marginBottom: 10,
  },
  link: {
    fontWeight: '600',
      color: '#000',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
  }
})