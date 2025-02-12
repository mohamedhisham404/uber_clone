import { Image, ScrollView, Text, View } from "react-native";
import { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const sign_up = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onSignUpPress = async () => {
        console.log("Sign Up Pressed");
    };

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />

                    <Text className="text-2xl text-black font-JakartaBold absolute bottom-5 left-5">
                        Create Your Account
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="Name"
                        placeholder="Enter Your Name"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(text) =>
                            setForm({ ...form, name: text })
                        }
                    />
                    <InputField
                        label="Email"
                        placeholder="Enter Your Email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(text) =>
                            setForm({ ...form, email: text })
                        }
                    />
                    <InputField
                        label="Password"
                        placeholder="Enter Your Password"
                        icon={icons.lock}
                        value={form.password}
                        onChangeText={(text) =>
                            setForm({ ...form, password: text })
                        }
                    />

                    <CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-6"/>
               
                    {/* {OAUTH}     */}

                    <Link href={"/sign-in"} className="text-lg text-center text-general-200 mt-10">
                        <Text>Already have an account? </Text>
                        <Text className="text-primary-500"> Sign In</Text>
                    </Link>
                </View>

                {/* {verf modal} */}
            </View>
        </ScrollView>
    );
};

export default sign_up;
