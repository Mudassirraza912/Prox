import React, { Component } from "react";
import { Alert, Animated, Dimensions, Platform, Text,  View,TouchableOpacity  } from "react-native";
import { Body, Header, List, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs, Title } from "native-base";
import { HorizontalCards } from "../Cards/HorizontalCards";
import { DEFAULT_THEME_COLOR } from "../../constants/colors";
import { fontStyles } from "../../constants/fontStyles";
import Button from "../Button";
import { ItemCard } from "../Cards/ItemCard";

import Ionicons from 'react-native-vector-icons/Ionicons'
import { ItemDetail } from "../ItemDetails/ItemDetail";
// import { TouchableOpacity } from 'react-native-gesture-handler'
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const IMAGE_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === "ios" ? 60 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = DEFAULT_THEME_COLOR;
const FADED_THEME_COLOR = "rgba(85,186,255, 0.8)";

export class ParallaxDemo extends Component {
 
  
  nScroll = new Animated.Value(0);
  scroll = new Animated.Value(0);
  textColor = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
    outputRange: [THEME_COLOR, FADED_THEME_COLOR, "black"],
    extrapolate: "clamp"
  });
  tabBg = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT],
    outputRange: ["white", THEME_COLOR],
    extrapolate: "clamp"
  });
  tabY = this.nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: [0, 0, 1]
  });
  headerBg = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: ["transparent", "transparent", "#fff"],
    extrapolate: "clamp"
  });
  imgScale = this.nScroll.interpolate({
    inputRange: [-25, 0],
    outputRange: [1.1, 1],
    extrapolateRight: "clamp"
  });
  imgOpacity = this.nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT],
    outputRange: [1, 0],
  });
  headerColor = this.scroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT - HEADER_HEIGHT],
    outputRange: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
  });

  trnaslateX = this.scroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT- 5],
    outputRange: [0, 40],
    extrapolate: "clamp"
  })
  tabContent = (x, i) => <View style={{ height: this.state.height }}>
    <List onLayout={({ nativeEvent: { layout: { height } } }) => {
      this.heights[i] = height;
      if (this.state.activeTab === i) this.setState({ height })
    }}>
      {new Array(x).fill(null).map((_, i) => <ItemCard onPress={() => this.itemRef.setModalVisible()} containerStyle={{ margin: 10 }} />)}
    </List></View>;
  heights = [500, 500];
  state = {
    activeTab: 0,
    height: 1000
  };

  constructor(props) {
    super(props);
    this.nScroll.addListener(Animated.event([{ value: this.scroll }], { useNativeDriver: false }));
  }

  
  render() {
    console.log('this.props', this.itemRef)
    const AnmatedScrollView = Animated.createAnimatedComponent(ScrollableTab)
    return (
      <View>
        <ItemDetail ref={e => this.itemRef = e} closeModal={()=>this.itemRef.setModalVisible(false)} goTo={(screen) => this.props.navigation.navigate(screen)} />
        <Animated.View
          style={{
            position: "absolute",
            width: "100%",
            height: HEADER_HEIGHT,
            backgroundColor: this.headerColor,
            zIndex: 1
          }}>
          <Header transparent style={{ backgroundColor: 'transparent' }} hasTabs>
            {/* <Body> */}
              {/* <Title>
                <Animated.Text style={{ color: this.textColor, fontWeight: "bold" }}>
                  Tab Parallax
              </Animated.Text>
              </Title> */}

              <TouchableOpacity onPress={() => this.props.navigation.goBack()}  style={{ backgroundColor: "rgba(0,0,0,.36)", height: 30, width: 30, borderRadius: 100, alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 10, marginTop: Platform.OS == "ios"  ? 10 : 55 }}>
                <Ionicons name="chevron-back" size={25} color={"#fff"} />
              </TouchableOpacity>
            {/* </Body> */}
          </Header>
        </Animated.View>
        <Animated.ScrollView
          scrollEventThrottle={5}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
          style={{ zIndex: 0 }}>
          <Animated.View style={{
            transform: [{ translateY: Animated.multiply(this.nScroll, 0.65) }, { scale: this.imgScale }],
            backgroundColor: 'transparent'
          }}>
            <Animated.Image
              source={require('../../assets/images/bg.png')}
              style={{ height: IMAGE_HEIGHT, width: "100%", opacity: this.imgOpacity }} />
          </Animated.View>

          <Tabs
            prerenderingSiblingsNumber={0}
            tabBarBackgroundColor="transparent"
            onChangeTab={({ i }) => {
              this.setState({ height: this.heights[i], activeTab: i })
            }}
            renderTabBar={(props) => {
              return (
                <>
                  <Animated.View
                    style={{ transform: [{ translateY: this.tabY }], zIndex: 1, width: "100%", backgroundColor: "#F1F2FA" }}>
                    <Animated.View style={{ backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 10, top: -10 }}>
                      <Animated.Text style={[fontStyles.ProximaBoldH1, { transform: [{ translateX: this.trnaslateX }] }]}>McDonald's</Animated.Text>
                      <Animated.Text style={[fontStyles.ProximaRegularP2, { fontSize: 12, color: "#6A7C92", paddingVertical: 10 }]}>102  Trouser Leg Road, Springfield</Animated.Text>

                      <Animated.View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Animated.View style={{ flexDirection: "row" }}>
                          <Animated.Text>5 miles </Animated.Text>
                          <Animated.Text> . </Animated.Text>
                          <Animated.Text> 4.8 </Animated.Text>

                        </Animated.View>
                        <Button
                          onPress={() => this.props.navigation.navigate("StoreFeedback")}
                          title={"Check Reviews"}
                          backgroundColor={"#FFBE00"}
                          containerStyle={{ width: "30%", borderRadius: 50, height: undefined, paddingVertical: 10 }}
                          textColor="#000"
                        />
                      </Animated.View>
                    </Animated.View>
                    <ScrollableTab
                      {...props}
                      renderTab={(name, page, active, onPress, onLayout) => (
                        <TouchableOpacity key={page}
                          onPress={() => onPress(page)}
                          onLayout={onLayout}
                          activeOpacity={0.4}>
                          <Animated.View
                            style={{
                              flex: 1,
                              height: 100,
                              backgroundColor: this.tabBg
                            }}>
                            <TabHeading scrollable
                              style={{
                                backgroundColor: "#F1F2FA",
                                height: "100%",
                              
                                // width: SCREEN_WIDTH / 2
                              }}
                              active={active}>
                              <Animated.Text style={[fontStyles.ProximaRegularP2,{
                                fontWeight: active ? "bold" : "normal",
                                color: active ? this.textColor : "#6A7C92",
                                fontSize: 12
                              }]}>
                                {name}
                              </Animated.Text>
                            </TabHeading>
                          </Animated.View>
                        </TouchableOpacity>
                      )}
                      underlineStyle={{ backgroundColor: this.textColor }} />
                  </Animated.View>
                </>
              )
            }}
          >
            <Tab heading="All">
              {this.tabContent(15, 0)}
            </Tab>
            <Tab heading="Burgers">
              {this.tabContent(15, 1)}
            </Tab>
            <Tab heading="Fries">
              {this.tabContent(15, 0)}
            </Tab>
            <Tab heading="Chicken">
              {this.tabContent(15, 1)}
            </Tab>
          </Tabs>
        </Animated.ScrollView>
      </View>
    )
  }
}
