import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React, { useRef, useState } from 'react'
import { AnimatedProp, Canvas, Group, Image, Mask, Patch, Path, Rect, Skia, SkImage } from '@shopify/react-native-skia';


type Props = {
    style: StyleProp<ViewStyle>;
    image: AnimatedProp<SkImage | null>;
    children?: React.ReactNode;
}


const ScratchCard: React.FC<Props> = ({ style, image, children }) => {
    const [[width, height], setSize] = useState([385, 230]);
    const path = useRef(Skia.Path.Make());


    return (
        <View
            onLayout={e => {
                setSize([e.nativeEvent.layout.width, e.nativeEvent.layout.height]);
            }}
            style={[styles.constainer, style]}
        >
            {Boolean(image && width && height) && (
                <>
                    <View>{children}</View>
                    <Canvas
                        style={styles.canvas}
                        onTouchStart={({ nativeEvent }) => {
                            path.current.moveTo(nativeEvent.locationX, nativeEvent.locationY)
                        }}
                        onTouchMove={({ nativeEvent }) => {
                            path.current.lineTo(nativeEvent.locationX, nativeEvent.locationY)
                        }}
                    >
                        <Mask
                            mode='luminance'
                            mask={
                                <Group>
                                    <Rect x={0} y={0} width={1000} height={1000} color="white" />
                                    <Path
                                        path={path.current}
                                        color="black"
                                        style="stroke"
                                        strokeJoin="round"
                                        strokeCap="round"
                                        strokeWidth={50}
                                    />
                                </Group>
                            }
                        >
                            <Image
                                image={image}
                                fit="cover"
                                x={0}
                                y={1}
                                width={width}
                                height={height}
                            />
                        </Mask>
                    </Canvas>
                </>
            )}

        </View>
    )
}

export default ScratchCard

const styles = StyleSheet.create({
    constainer: {
        position: 'relative'
    },
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
})