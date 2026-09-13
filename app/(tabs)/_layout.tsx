import { Tabs } from "expo-router"


const TabLayout = () => (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name="index" options={{title:"Home"}}/>
        <Tabs.Screen name="subscription" options={{title:"subscription"}}/>
        <Tabs.Screen name="insights" options={{title:"insights"}}/>
        <Tabs.Screen name="settings" options={{title:"settings"}}/>
    </Tabs>
)

export default TabLayout