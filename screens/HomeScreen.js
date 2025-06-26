import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, router } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import img1 from '../assets/image4.jpg';
import img2 from '../assets/image5.jpg';
import img3 from '../assets/image6.jpg';
import { StatusBar } from 'expo-status-bar';

const images = [img1, img2, img3];

const Edit = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <StatusBar style="light" backgroundColor="#000" />

      {/* Header Section */}
      <View style={styles.header}>
        <Swiper autoplay loop showsPagination={true} style={styles.swiper}>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.bannerImage} />
          ))}
        </Swiper>

        {/* 🟦 PRO Badge */}
        <View style={styles.proBadge}>
          <Text style={styles.proText}>PRO</Text>
        </View>

        {/* ⚙ Settings Button (Top-Left) */}
        <TouchableOpacity
          style={styles.settingsButton}
         onPress={() => navigation.navigate('Settings')} // Or navigation.navigate('Settings') if using stack
        >
          <AntDesign name="setting" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.headerOverlay}>
          <Text style={styles.headerText}>Professional Editor</Text>
        </View>
      </View>

      {/* Projects Row */}
      <View style={styles.projectsRow}>
        <Text style={styles.projectsTitle}>Projects</Text>
        <MaterialIcons name="sort" size={24} color="black" />
      </View>

      <View style={{ flex: 1 }} />

      {/* ➕ New Project Button */}
      <TouchableOpacity
        style={styles.newProjectWrapper}
        activeOpacity={0.8}
       onPress={() => navigation.navigate('Media')}
      >
        <LinearGradient
          colors={['#6C63FF', '#D65DB1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.newProjectButton}
        >
          <AntDesign name="plussquare" size={24} color="white" />
          <Text style={styles.newProjectText}> New Project</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 400,
    position: 'relative',
  },
  swiper: {
    height: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 15,
    left: 16,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  proBadge: {
    position: 'absolute',
    top: 50,
    right: 14,
    backgroundColor: '#00C4FF',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  proText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.8,
    fontSize: 13,
  },
  settingsButton: {
    position: 'absolute',
    top: 50,
    left: 14,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderRadius: 10,
    zIndex: 10,
  },
  projectsRow: {
    marginTop: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newProjectWrapper: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  newProjectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 14,
  },
  newProjectText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});