import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



const SelectVideosScreen = () => {
  const router = useRouter()
  // const [selectedMedia, setSelectedMedia] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);
  const [videos, setVideos] = useState([]);
  const [photos, setPhotos] = useState([]);
  // const [selectedIds, setSelectedIds] = useState([]);
  const [activeTab, setActiveTab] = useState('Videos');
  const [loading, setLoading] = useState(true);
  const selectedCount = activeTab === 'Videos' ? selectedVideos.length : selectedPhotos.length;


  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      if (status === 'granted') {
        setLoading(true);

        const [videoAssets, photoAssets] = await Promise.all([
          MediaLibrary.getAssetsAsync({
            mediaType: 'video',
            first: 100,
            sortBy: ['creationTime'],
          }),
          MediaLibrary.getAssetsAsync({
            mediaType: 'photo',
            first: 100,
            sortBy: ['creationTime'],
          }),
        ]);

        setVideos(videoAssets.assets);
        setPhotos(photoAssets.assets);
        setLoading(false);
      }
    })();
  }, []);

  const toggleSelect = (id) => {
    if (activeTab === 'Videos') {
      setSelectedVideos((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setSelectedPhotos((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    }
  };

  const renderItem = ({ item }) => {
    const currentSelectedIds = activeTab === 'Videos' ? selectedVideos : selectedPhotos;
    const isSelected = currentSelectedIds.includes(item.id);
    const selectionIndex = currentSelectedIds.indexOf(item.id) + 1

    return (
      <TouchableOpacity
        style={[styles.thumbnailWrapper, isSelected && styles.selectedBorder]}
        onPress={() => toggleSelect(item.id)}
      >
        <Image source={{ uri: item.uri }} style={styles.thumbnail} />

        {isSelected && (
          <View style={styles.selectionNumber}>
            <Text style={styles.selectionNumberText}>{selectionIndex}</Text>
          </View>
        )}

        {activeTab === 'Videos' && item.duration != null && (
          <Text style={styles.duration}>{formatDuration(item.duration)}</Text>
        )}
      </TouchableOpacity>
    );
  };

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (hasPermission === null) {
    return <View style={styles.center}><Text>Requesting permission...</Text></View>;
  }

  if (hasPermission === false) {
    return <View style={styles.center}><Text>No access to media library</Text></View>;
  }



  return (

    <View style={styles.container}>
      {/* 
      <View style={[styles.header,{paddingTop:insets.top, paddingBottom:insets.bottom}]}>
        <Ionicons name="close" size={28} color="#fff" />
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Recents</Text>
          <Feather name="chevron-down" size={16} color="#00e5ff" />
        </View>
        <Text style={styles.libraryBtn}>Library</Text>
      </View> */}

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab('Videos')}>
          <Text style={[styles.tab, activeTab === 'Videos' && styles.activeTab]}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Photos')}>
          <Text style={[styles.tab, activeTab === 'Photos' && styles.activeTab]}>Photos</Text>
        </TouchableOpacity>
      </View>

      {/* Media Grid */}
      {loading ? (
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={activeTab === 'Videos' ? videos : photos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.grid}
        />
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Select at least 1 {activeTab === 'Videos' ? 'Clip' : 'Photo'}
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/(edit)/MainEditScreen')}
          style={[
            styles.addButton,
            { opacity: selectedCount === 0 ? 0.5 : 1 },
          ]}
          disabled={selectedCount === 0}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SelectVideosScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',

  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    // paddingVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingTop: 60,
  },
  tab: {
    color: '#888',
    fontSize: 16,
  },
  activeTab: {
    color: '#00e5ff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  grid: {
    paddingHorizontal: 5,
    paddingBottom: 80,
  },
  thumbnailWrapper: {
    width: '32%',
    margin: '1%',
    aspectRatio: 0.7,
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: '#00e5ff',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  duration: {
    position: 'absolute',
    bottom: 4,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: '#111',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10
  },
  addButton: {
    backgroundColor: '#9b00f0',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 5
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  selectionNumber: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  selectionNumberText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },

});