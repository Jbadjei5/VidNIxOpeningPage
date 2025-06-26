
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const  SignupScreen= ()=> {
  return (
      <View style={styles.container}>
          <View style= {styles.card}>
        <Text style={styles.title}>Create a new account</Text>
        
        <TextInput style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#999"
              />

              <TextInput style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#999"
              />
                <TextInput style= {styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  secureTextEntry={true}
              />
              

                <TouchableOpacity style={styles.loginBtn}>  
                    <Text style={styles.loginText}>
                        Login
                  </Text>
              </TouchableOpacity>

              <Text style={styles.signupText}>
                  Already have an account?<Link href={'/login'}> <Text style={styles.link}>Login</Text></Link>
              </Text>

              
              </View>
    </View>
  )
}

export default SignupScreen;

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
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
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
    width: 30,
    height: 30,
  },


})