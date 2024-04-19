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
