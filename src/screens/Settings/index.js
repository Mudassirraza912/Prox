import React from 'react'
import { useState } from 'react'
import { FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import List from '../../components/List'
import { fontStyles } from '../../constants/fontStyles'

const Settings = () => {

    const [list] = useState([
        {
            title: "Robert Davidson",
            subtitle: "+123 456 7890",
            avatarText: "RD",
            avatar: true
        },
        {
            title: "Payment Card",
            titleStyle:  { color: "#000", ...fontStyles.ProximaRegularP1, marginStart: 10 },
            leftIcon: true,
            leftIconName: "card-outline",
            lefIconSize: 25,
            containerStyle: {
                paddingVertical: 20
            }
        },
        {
            title: "Change Password",
            titleStyle:  { color: "#000", ...fontStyles.ProximaRegularP1, marginStart: 10 },
            leftIcon: true,
            leftIconName: "lock-closed",
            lefIconSize: 25,
            containerStyle: {
                paddingVertical: 20
            }
        },
        {
            title: "Notifications Settings",
            titleStyle:  { color: "#000", ...fontStyles.ProximaRegularP1, marginStart: 10 },
            leftIcon: true,
            leftIconName: "notifications",
            lefIconSize: 25,
             containerStyle: {
                paddingVertical: 20
            }
        },
        {
            title: "Contact Us",
            titleStyle:  { color: "#000", ...fontStyles.ProximaRegularP1, marginStart: 10 },
            leftIcon: true,
            leftIconName: "call",
            lefIconSize: 25,
             containerStyle: {
                paddingVertical: 20
            }
        },
        {
            title: "Privacy Policy",
            titleStyle:  { color: "#000", ...fontStyles.ProximaRegularP1, marginStart: 10 },
            leftIcon: true,
            leftIconName: "shield",
            lefIconSize: 25,
             containerStyle: {
                paddingVertical: 20
            }
        },
        {
            title: "Terms & Conditions",
            titleStyle:  { color: "#000", ...fontStyles.ProximaRegularP1, marginStart: 10 },
            leftIcon: true,
            leftIconName: "document",
            lefIconSize: 25,
             containerStyle: {
                paddingVertical: 20
            }
        },
        {
            title: "Log out",
            titleStyle:  { color: "#000", ...fontStyles.ProximaRegularP1, marginStart: 10 },
            leftIcon: true,
            leftIconName: "log-out-outline",
            lefIconSize: 25,
             containerStyle: {
                paddingVertical: 20
            }
        },
    ])

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.blockContainer}>
                    <Text style={fontStyles.ProximaBoldH1}>
                        Settings
                    </Text>
                </View>
                <View style= {{ marginTop: 10 }}>
                    {/* <List
                        subtitle={"+123 456 7890"}
                        avatarText={"RD"}
                        title="Robert Davidson"
                        avatar
                    />
                    <List
                        title="Payment Card"
                        titleStyle={{ color: "#000", ...fontStyles.ProximaRegularP1 }}
                        leftIcon
                        leftIconName="card"
                        lefIconSize={25}
                    /> */}

                    <FlatList 
                      data={list}
                      renderItem={({ item }) => {
                          return <List {...item} />
                      }}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS == "ios" ? 40 : 0
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginTop: 10
    },
})
