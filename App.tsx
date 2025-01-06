// import React, { useState, useRef } from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import Video from 'react-native-video'; // This is the runtime value, not a type

// export default function VideoPlayer() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const playerRef = useRef<Video | any>(null); // Correct usage of the type

//     const handleClick = () => {
//         setIsPlaying((prev) => !prev);
//     };

//     return (
//         <View style={styles.container}>
//             <Video
//                 ref={(ref) => (playerRef.current = ref)} // Assigning the ref properly
//                 source={{
//                     uri: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
//                 }}
//                 style={styles.video}
//                 resizeMode="contain"
//                 paused={!isPlaying} // Controlled playback
//                 onEnd={() => setIsPlaying(false)}
//             />
//             <Button
//                 title={isPlaying ? 'Pause' : 'Play'}
//                 onPress={handleClick}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     video: {
//         width: 250,
//         height: 150,
//     },
// });



import React from 'react';
import { View } from 'react-native';
import SwitchCase from './practice/javaScript/conditionStatement/SwitchCase';
import EarlyReturn from './practice/javaScript/conditionStatement/EarlyReturn';
import TernaryOperator from './practice/javaScript/conditionStatement/LogicalOperator';
import LogicalOperator from './practice/javaScript/conditionStatement/LogicalOperator';
import Plymorphism from './practice/javaScript/conditionStatement/Polymorphism';
import ArrayOfConditions from './practice/javaScript/conditionStatement/ArrayOfConditions';

const App = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          {/* <UseReducer/> */}
          {/* <SwitchCase role={'aditor'}/> */}
          {/* <EarlyReturn/> */}
          {/* <TernaryOperator role={'viewer'}/> */}
          {/* <LogicalOperator role={'admin'}/> */}
          {/* <Plymorphism role={'editor'}/> */}
          <ArrayOfConditions role={'viewer'}/>
        </View>
    )
}
export default App;