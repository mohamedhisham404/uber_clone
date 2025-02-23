import {SignedIn,SignedOut, useUser} from '@clerk/clerk-expo'
import { Text } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
  const { user } = useUser()  

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

export default home

