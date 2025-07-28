import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import PlaylistCard from '../../components/PlaylistCard';
import RecentlyPlayedItem from '../../components/RecentlyPlayedItem';
import WrappedCard from '../../components/WrappedCard';
import Icon from 'react-native-vector-icons/Ionicons';
import imagePath from '../../assets/images/imagePath';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { CustomColors } from '../../theme/colors';

const HomeScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={[styles.headerIcons, { paddingTop: insets.top }]}>
          <View style={{ width: '80%' }}>
            <Text style={styles.greeting}>
              GOOD MORNING <Text>Rabecca!</Text>
            </Text>
          </View>
          <View
            style={{
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <LinearGradient
              colors={[CustomColors.ORANGE, CustomColors.PURPLE]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                width: 35,
                borderRadius: 100,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="search" size={22} color="#fff" />
            </LinearGradient>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 100,
                padding: 5,
                marginLeft: 10,
              }}
              onPress={() => navigation.openDrawer()}
            >
              <Icon name="menu" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* My Playlists */}
        <Text style={styles.sectionTitle}>MY PLAYLISTS</Text>
        <View style={styles.playlistRow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.recentScroll}
          >
            <PlaylistCard
              title="DARK"
              subtitle="created Dec 2019"
              image={imagePath.Img1}
            />
            <PlaylistCard
              title="MY MIX"
              subtitle="created Jan 2020"
              image={imagePath.Img2}
            />
            <PlaylistCard
              title="LAMAR"
              subtitle="created Jul 2020"
              image={imagePath.Img3}
            />
            <PlaylistCard
              title="MY MIX"
              subtitle="created Jan 2020"
              image={imagePath.Img2}
            />
          </ScrollView>
        </View>

        {/* Explore + Search */}
        <View style={styles.searchRow}>
          <TouchableOpacity style={styles.exploreButton}>
            <LinearGradient
              colors={[CustomColors.ORANGE, CustomColors.PURPLE]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                width: 130,
                borderRadius: 100,
                height: 35,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  letterSpacing: 2,
                }}
              >
                {'EXPLORE'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.searchBox}>
            <Icon name="search" size={18} color="#bbb" />
            <TextInput
              placeholder="Search your favorite songs..."
              placeholderTextColor="#bbb"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Recently Played */}
        <Text style={styles.sectionTitle}>RECENTLY PLAYED</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recentScroll}
        >
          <RecentlyPlayedItem name="THE WEEKND" image={imagePath.Img3} />
          <RecentlyPlayedItem name="KENDRICK LAMAR" image={imagePath.Img2} />
          <RecentlyPlayedItem name="EMINƎM" image={imagePath.Img1} />
          <RecentlyPlayedItem name="KENDRICK LAMAR" image={imagePath.Img2} />
        </ScrollView>

        {/* Wrapped */}
        <Text style={styles.sectionTitle}>2021 wrapped</Text>
        <WrappedCard />

        <Text style={styles.sectionTitle}>POPPULAR</Text>
        <View style={styles.playlistRow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.recentScroll}
          >
            <PlaylistCard
              title="MY MIX"
              subtitle="created Jan 2020"
              image={imagePath.Img2}
            />
            <PlaylistCard
              title="LAMAR"
              subtitle="created Jul 2020"
              image={imagePath.Img3}
            />
            <PlaylistCard
              title="MY MIX"
              subtitle="created Jan 2020"
              image={imagePath.Img2}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A24',
  },
  scroll: {
    padding: 16,
    paddingBottom: 100,
  },
  greeting: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
  },
  bold: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 12,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 3.6,
  },
  playlistRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 12,
  },
  exploreButton: {},
  exploreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1E2A38',
    paddingHorizontal: 12,
    paddingVertical: Platform.OS == 'android' ? 0 : 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  recentScroll: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
  },
  headerIcons: {
    width: '100%',
    flexDirection: 'row',
  },
});
