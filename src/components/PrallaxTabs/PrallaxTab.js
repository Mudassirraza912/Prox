// import React, { Component } from "react";
// import { Animated, Dimensions, ImageBackground, Platform, Text, TouchableOpacity, View } from "react-native";
// import { Body, Header, List, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs, Title } from "native-base";
// import LinearGradient from "react-native-linear-gradient";
// import Chips from "../Chips";
import { HorizontalCards } from "../Cards/HorizontalCards";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const IMAGE_HEIGHT = 250;
// const HEADER_HEIGHT = Platform.OS === "ios" ? 100 : 50;
// const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
// const THEME_COLOR = "rgba(85,186,255, 1)";
// const FADED_THEME_COLOR = "rgba(85,186,255, 0.8)";

// export class ParallaxDemo extends Component {
//   nScroll = new Animated.Value(0);
//   scroll = new Animated.Value(0);
//   textColor = this.scroll.interpolate({
//     inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
//     outputRange: [THEME_COLOR, FADED_THEME_COLOR, "white"],
//     extrapolate: "clamp"
//   });
//   tabBg = this.scroll.interpolate({
//     inputRange: [0, SCROLL_HEIGHT],
//     outputRange: ["white", THEME_COLOR],
//     extrapolate: "clamp"
//   });
//   tabY = this.nScroll.interpolate({
//     inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
//     outputRange: [0, 0, 1]
//   });
//   headerBg = this.scroll.interpolate({
//     inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
//     outputRange: ["transparent", "transparent", THEME_COLOR],
//     extrapolate: "clamp"
//   });
//   imgScale = this.nScroll.interpolate({
//     inputRange: [-25, 0],
//     outputRange: [1.1, 1],
//     extrapolateRight: "clamp"
//   });
//   imgOpacity = this.nScroll.interpolate({
//     inputRange: [0, SCROLL_HEIGHT],
//     outputRange: [1, 0],
//   });
//   headerColor = this.scroll.interpolate({
//     inputRange: [0, IMAGE_HEIGHT - HEADER_HEIGHT],
//     outputRange: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]
//   });
//   tabContent = (x, i) => {

//     return (
//       <View style={{ height: this.state.height }}>
//         <List onLayout={({ nativeEvent: { layout: { height } } }) => {
//           this.heights[i] = height;
//           if (this.state.activeTab === i) this.setState({ height })
//         }}>
//           {
//             [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((val) => {
//               return <HorizontalCards containerStyle={{ margin: 10 }} />
//             })
//           }
//         </List>

//       </View>
//     )
//   };
//   heights = [500, 500];
//   state = {
//     activeTab: 0,
//     height: 500
//   };

//   constructor(props) {
//     super(props);
//     this.nScroll.addListener(Animated.event([{ value: this.scroll }], { useNativeDriver: false }));
//   }

//   render() {
//     return (
//       <View>
//         <Animated.View style={{
//           position: "absolute",
//           width: "100%",
//           height: HEADER_HEIGHT,
//           backgroundColor: this.headerColor,
//           zIndex: 1
//         }}>
//           <Header style={{ backgroundColor: "transparent" }} hasTabs>
//             <Body>
//               <Title>
//                 <Animated.Text style={{ color: this.textColor, fontWeight: "bold" }}>
//                   Tab Parallax
//               </Animated.Text>
//               </Title>
//             </Body>
//           </Header>
//         </Animated.View>
//         <Animated.ScrollView
//           scrollEventThrottle={5}
//           showsVerticalScrollIndicator={false}
//           onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
//           style={{ zIndex: 0 }}>
//           <Animated.View style={{
//             transform: [{ translateY: Animated.multiply(this.nScroll, 0.65) }, { scale: this.imgScale }],
//             backgroundColor: THEME_COLOR
//           }}>
//             <Animated.Image
//               source={require('../../assets/images/bg.png')}
//               style={{ height: IMAGE_HEIGHT, width: "100%", opacity: this.imgOpacity }} />
//           </Animated.View>
//           <Animated.View style={{ transform: [{ translateY: this.tabY }], zIndex: 1, width: "100%", backgroundColor: "white" }}>
//             <Tabs
//               prerenderingSiblingsNumber={3}
//               onChangeTab={({ i }) => {
//                 this.setState({ height: this.heights[i], activeTab: i })
//               }}
//               renderTabBar={(props) => <Animated.View
//                 style={{ transform: [{ translateY: Animated.multiply(this.nScroll, 0.65)}], zIndex: 1, width: "100%", backgroundColor: "white" }}>
//                 <ScrollableTab {...props}
//                   renderTab={(name, page, active, onPress, onLayout) => (
//                     <TouchableOpacity key={page}
//                       onPress={() => onPress(page)}
//                       onLayout={onLayout}
//                       activeOpacity={0.4}>
//                       <Animated.View
//                         style={{
//                           flex: 1,
//                           height: 100,
//                           backgroundColor: this.tabBg
//                         }}>
//                         <TabHeading scrollable
//                           style={{
//                             backgroundColor: "transparent",
//                             width: SCREEN_WIDTH / 2
//                           }}
//                           active={active}>
//                           <Animated.Text style={{
//                             fontWeight: active ? "bold" : "normal",
//                             color: this.textColor,
//                             fontSize: 14
//                           }}>
//                             {name}
//                           </Animated.Text>
//                         </TabHeading>
//                       </Animated.View>
//                     </TouchableOpacity>
//                   )}
//                   underlineStyle={{ backgroundColor: this.textColor }} />
//               </Animated.View>
//               }
//             >
//               <Tab heading="Tab 1">
//               {this.tabContent()}
//             </Tab>
//             <Tab heading="Tab 2">
//               {this.tabContent()}
//             </Tab>
//             </Tabs>
//           </Animated.View>
//         </Animated.ScrollView>
//       </View >
//     )
//   }
// }


// Haris

import React, { Component } from "react";
import { Animated, Dimensions, Platform, Text, TouchableOpacity, View } from "react-native";
import { Body, Header, List, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs, Title } from "native-base";
import LinearGradient from "react-native-linear-gradient";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const IMAGE_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === "ios" ? 100 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = "rgba(85,186,255, 1)";
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
  tabContent = (x, i) => <View style={{ height: this.state.height }}>
    <List onLayout={({ nativeEvent: { layout: { height } } }) => {
      this.heights[i] = height;
      if (this.state.activeTab === i) this.setState({ height })
    }}>
      {new Array(x).fill(null).map((_, i) => <HorizontalCards containerStyle={{ margin: 10 }} />)}
    </List></View>;
  heights = [500, 500];
  state = {
    activeTab: 0,
    height: 600
  };

  constructor(props) {
    super(props);
    this.nScroll.addListener(Animated.event([{ value: this.scroll }], { useNativeDriver: false }));
  }

  render() {
    const AnmatedScrollView = Animated.createAnimatedComponent(ScrollableTab)
    return (
      <View>
        <Animated.View
          style={{
            position: "absolute",
            width: "100%",
            height: HEADER_HEIGHT,
            backgroundColor: this.headerColor,
            zIndex: 1
          }}>
          <Header transparent style={{ backgroundColor: "transparent" }} hasTabs>
            <Body>
              <Title>
                <Animated.Text style={{ color: this.textColor, fontWeight: "bold" }}>
                  Tab Parallax
              </Animated.Text>
              </Title>
            </Body>
          </Header>
        </Animated.View>
        <Animated.ScrollView
          scrollEventThrottle={5}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
          style={{ zIndex: 0 }}>
          <Animated.View style={{
            transform: [{ translateY: Animated.multiply(this.nScroll, 0.65) }, { scale: this.imgScale }],
            backgroundColor: THEME_COLOR
          }}>
            <Animated.Image
              source={require('../../assets/images/bg.png')}
              style={{ height: IMAGE_HEIGHT, width: "100%", opacity: this.imgOpacity }} />
            {/*gradient*/}
            {/* <LinearGradient
                colors={["rgba(255,255,255,0.9)", "rgba(255,255,255,0.35)", "rgba(255,255,255,0)"]}
                locations={[0, 0.25, 1]}
                style={{ position: "absolute", height: "100%", width: "100%" }} /> */}
            {/* </Animated.Image> */}
          </Animated.View>
          <Tabs
            prerenderingSiblingsNumber={3}
            onChangeTab={({ i }) => {
              this.setState({ height: this.heights[i], activeTab: i })
            }}
            // renderTabBar={(props) => <Animated.View
            //   style={{ transform: [{ translateY: this.tabY }], zIndex: 1, width: "100%", backgroundColor: "white" }}>
            //   <ScrollableTab {...props} />
            // </Animated.View>}
            renderTabBar={(props) => {
             return (
              <Animated.View
                style={{ transform: [{ translateY: this.tabY }], zIndex: 1, width: "100%", backgroundColor: "white" }}>
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
                            backgroundColor: "transparent",
                            width: SCREEN_WIDTH / 2
                          }}
                          active={active}>
                          <Animated.Text style={{
                            fontWeight: active ? "bold" : "normal",
                            color: this.textColor,
                            fontSize: 14
                          }}>
                            {name}
                          </Animated.Text>
                        </TabHeading>
                      </Animated.View>
                    </TouchableOpacity>
                  )}
                  underlineStyle={{ backgroundColor: this.textColor }} />
              </Animated.View>
              )
            }}
          >
            <Tab heading="Tab 1">
              {this.tabContent(30, 0)}
            </Tab>
            <Tab heading="Tab 2">
              {this.tabContent(15, 1)}
            </Tab>
          </Tabs>
        </Animated.ScrollView>
      </View>
    )
  }
}