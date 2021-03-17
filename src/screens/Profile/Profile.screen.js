import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native'
import homeStyles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/Header'
import { useState } from 'react'
import { fontStyles } from '../../constants/fontStyles'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ImageCropPicker from 'react-native-image-crop-picker'

const Profile = ({ navigation }) => {

  const [image, setImage] = useState("RD")

  const openImageLibrary = async () => {
    try {
      let image = await ImageCropPicker.openPicker({
        multiple: false
      })
      console.log(image)
      setImage({
        name: image.filename,
        uri: image.path,
        type: image.mime
      })
    } catch (error) {

    }

  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />

      <Header
        centerText="Profile"
        leftIconName="arrow-back"
        leftButtonPress={navigation.goBack}
      />
      <SafeAreaView style={homeStyles.SafeAreaView2}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              {typeof image == "string" ? <View style={styles.avatarTitleContainer}>
                <Text style={[fontStyles.ProximaBoldH1, styles.avatarText]}>{image}</Text>
              </View> : <View style={{ width: 84, height: 84, borderRadius: 100, overflow: "hidden" }}>
                  <Image source={image} ro style={{ height: 84, width: 84 }} />
                </View>
              }

              <TouchableOpacity onPress={openImageLibrary} activeOpacity={0.7} style={{ marginTop: 10 }}>
                <Text style={[fontStyles.ProximaRegularP1, styles.imageChangText]}>Tap to change</Text>
              </TouchableOpacity>
            </View>

            <View>
              <View style={styles.blockContainer}>
                <Input
                  label="Full Name"
                  keyboardType="default"
                  value={"Robert Davidson"}
                />
              </View>
              <View style={styles.blockContainer}>
                <Input
                  label="Mobile Number"
                  keyboardType="default"
                  type="phoneInput"
                  value={"2025550110"}
                  changeNumberButton
                />
              </View>
              <View style={styles.blockContainer}>
                <Input
                  label="Email Address"
                  keyboardType="default"
                  value={"robertdavidson23@gmail.com"}
                />
              </View>

            </View>
          </View>
        </ScrollView>
        <View style={[styles.blockContainer, { position: 'absolute', bottom: 20, width: '100%' }]}>
          <Button
            // onPress={() => setShow(true)}
            title="Save"
            titleStyle={fontStyles.ProximaSemiBoldSmall}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    backgroundColor: "#F1F2FA",
    paddingVertical: 20,
    alignItems: 'center'
  },
  avatarTitleContainer: {
    backgroundColor: "#FFBE00",
    height: 84,
    width: 84,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: {
    color: "#fff"
  },
  imageChangText: {
    color: DEFAULT_THEME_COLOR
  },
  blockContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10
  }
})

