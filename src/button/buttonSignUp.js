import { StyleSheet, Text, View, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonSignUp(){
    return (
        <TouchableOpacity style={styles.container} >
            <LinearGradient
                // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                start={{x: 0, y: 0}}
                end={{x:1, y: 1}}
                style={styles.button}
               >
                <Text style={styles.text}>CREATE ACCOUNT</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        alignItems: 'center',
        width: 500,
        marginTop: 20,
    },
    textButton: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
      },
    button: {
       width: '40%',
       height: 50,
       borderRadius: 25,
       padding: 10,
       alignItems: 'center',
       justifyContent: 'center',
    }
})