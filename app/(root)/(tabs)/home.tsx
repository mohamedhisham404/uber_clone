import {SignedIn,SignedOut, useUser} from '@clerk/clerk-expo'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'

const home = () => {
  const { user } = useUser()  

  return (
    <View>
      <SignedIn>
        <Text>Welcome back, {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>

      <SignedOut>
        <Link href={'/sign-in'}>
          <Text>Sign in</Text>
        </Link>
        <Link href={'/sign-up'}>
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}

export default home

