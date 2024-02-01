import { ArrowDownFill } from '@fruits-chain/icons-react-native'
import { Toast } from '@fruits-chain/react-native-xiaoshu'
import { Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { navigate } from '@/router/root-navigation'

const Home: React.FC = () => {
  const insets = useSafeAreaInsets()

  return (
    <>
      <View style={{ height: insets.top }} />
      <Text>Home</Text>
      <ArrowDownFill
        color="#098"
        onPress={() => {
          Toast('你点击了我')
        }}
      />
      <Button
        title="跳转登录页面"
        onPress={() => {
          navigate('LOGIN')
        }}
      />
      <Button
        title="跳转设置页面"
        onPress={() => {
          navigate('SETTING')
        }}
      />
    </>
  )
}

export default Home
