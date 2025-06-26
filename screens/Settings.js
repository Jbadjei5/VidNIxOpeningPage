import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


import { StatusBar } from 'expo-status-bar';



const Settings = () => {
  const navigation = useNavigation();

  const Row = ({ icon, label, onPress }) => (
    <>
      <TouchableOpacity style={styles.row} onPress={onPress}> 
        {icon}
        <Text style={styles.rowLabel}>{label}</Text>
        <Feather name='chevron-right' size={20} color="#9b9b9b" />
      </TouchableOpacity>
      <View style={styles.divider} />
    </>

  );

  return (
    <View style={[styles.container]}>
      <StatusBar style="light" backgroundColor='#000' />

      {/* Header  */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Options */}
      <View style={styles.body}>
        <Row
          icon={<Feather name="user" size={20} color='#000' />}
          label="Account"
        />

        <Row
          icon={<Ionicons name="notifications-outline" size={20} color='#000' />}
          label="Notifications"
        />

        <Row
          icon={<Feather name="lock" size={20} color='#000' />}
          label="Privacy"
        />

        <Row
          icon={<Feather name="info" size={20} color='#000' />}
          label="About"
        />
      <Row
     icon={<MaterialIcons name="logout" size={20} color='#000' />}
     label="Logout"
     onPress={() => navigation.navigate('Login')}
    />

      </View>

    </View>
  )
}

export default Settings

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',




  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingTop: 70,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000',
  },

  body: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 10,
    marginTop: 10
  },
  rowLabel: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    color: '#000',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 15,
  },

})