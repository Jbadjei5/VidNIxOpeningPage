import { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';



const VerifyScreen = () => {
     const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

const handleChange = (text, index) => {
    if (/^\d$/.test(text) || text === '') {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Auto move to next input
        if (text && index < 5) {
            inputs.current[index + 1].focus();
        }
    }
}
  return (
      <View style={styles.container}>
          <View style= {styles.card}>
        <Text style={styles.title}>An OTP has been sent to your email</Text>
        

        <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')} >  
                    <Text style={styles.loginText}>
                        Verify
                  </Text>
              </TouchableOpacity>

             
              
              </View>
    </View>
  )
}

export default VerifyScreen;

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
        alignItems:'flex-start',
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
    otpContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        marginBottom: 30,
    },
    otpInput: {
        width: 50,
        height: 55,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#fff',
    }


})