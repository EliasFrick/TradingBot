import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"

export interface IProfileSettings {
    name: string,
    component: any,
    options: BottomTabNavigationOptions
}

export interface IToggleGraphButtonConfig {
    fontsize: number,
    color: string,
    title: string,
    onPress?: (param?: any) => void;
}

export interface IGraphPoint {
    date: Date;
    value: number;
}

