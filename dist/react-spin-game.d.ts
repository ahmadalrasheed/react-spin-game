import React from 'react';
interface SpinGameData {
    data: Array<Array<string>>;
    hideButton?: boolean;
    result?: string;
    time?: number;
    minTime?: number;
    maxTime?: number;
    removeButtonEffect?: boolean;
    fontSize?: number;
    fontFamily?: string;
    horizantalText?: boolean;
}
declare const SpinAndWin: React.ForwardRefExoticComponent<SpinGameData & React.RefAttributes<unknown>>;
export default SpinAndWin;
