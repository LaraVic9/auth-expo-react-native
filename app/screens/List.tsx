import { NavigationProp } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import { FIREBASE_AUTH } from '../../config/firebaseConfig'

interface RouterProps {
    navigation: NavigationProp<any, any>
}

const List = ({ navigation }: RouterProps) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={() => navigation.navigate('detalis')} title='Open Details' />
            <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout'/>
        </View>
    )
}

export default List