import React, { createRef, forwardRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import ActionSheet from "react-native-actions-sheet";
import { fontStyles } from "../../constants/fontStyles";
import Ionicons from 'react-native-vector-icons/Ionicons'


export const SearchFilter = forwardRef((props, ref) => {

    return(
        <ActionSheet ref={ref}>
            <View style={[styles.container]}>
                    <View style={[styles.blockContainer, styles.rowSpaceBtw]}>
                        <Text style={fontStyles.ProximaSemiBold}>
                            Filter Your Search
                        </Text>
                        <View>
                            <Ionicons name="cross" />
                        </View>
                    </View>
                </View>
        </ActionSheet>

    )
})

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    itemContainer: {
        paddingVertical: 5,
    },
    rowSpaceBtw : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})