import {IProfileSettings} from "./interfaces";
import OverlaySettings from "../modalScreens/OverlaySettings";
import TwoFactorAuthentication from "../modalScreens/TwoFactorAuthentication";
import UserInformations from "../modalScreens/UserInformations";

export const OverlaySettingsNavigation: IProfileSettings[] = [
    { name: 'OverlaySettings', component: OverlaySettings, options: {title: 'OverlaySettings', headerShown: false} },
    { name: 'TwoFactorAuthentication', component: TwoFactorAuthentication, options: {title: 'TwoFactorAuthentication', headerShown: true} },
]

export const DataAndSecuritySettingsNavigation: IProfileSettings[] = [
    { name: 'TwoFactorAuthentication', component: TwoFactorAuthentication, options: {title: 'TwoFactorAuthentication', headerShown: true} },
]

export const UserSettingsNavigation: IProfileSettings[] = [
    { name: 'UserInformations', component: UserInformations, options: {title: 'UserInformations', headerShown: true} }
]
