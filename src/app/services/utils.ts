import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Utils {
    public constructor() { }

    public buildQuery(obj: any, num_prefix?: any, temp_key?: any) {
        let output_string: any = [];

        obj = !obj ? {} : obj;

        Object.keys(obj).forEach((val) => {
            let key = val;

            if (num_prefix && !isNaN(<any>key)) {
                key = num_prefix + key;
            }

            key = encodeURIComponent(key.replace(/[!'()*]/g, escape));

            if (temp_key) {
                key = temp_key + '[' + key + ']';
            }

            if (typeof obj[val] === 'object') {
                let query = this.buildQuery(obj[val], null, key);

                if (query) {
                    output_string.push(query);
                }
            } else {
                let value = encodeURIComponent(obj[val] + ''.replace(/[!'()*]/g, escape));

                if (key) {
                    output_string.push(key + '=' + value);
                }
            }
        });

        return output_string.join('&');
    }

    public pad(numInt: number, size: number) {
        let num: string = String(numInt).trim();

        num = num.toString();

        while (num.length < size) {
            num = "0" + num;
        }

        return num;
    }

    public convertDateToBrazilian(date: string) {
        try {
            return (date != '' && date != undefined ? date.split("-")[2] + "/" + date.split("-")[1] + "/" + date.split("-")[0] : '');
        } catch (error) {
            return '';
        }
    }

    public convertDateToAmerican(date: string) {
        try {
            return (date != '' && date != undefined ? date.split("/")[2] + "-" + date.split("/")[1] + "-" + date.split("/")[0] : '');
        } catch (error) {
            return '';
        }
    }

    public convertMatDateFormControlToAmerican(date: any) {
        try {
            if (typeof date == "object") {
                return (date.year + '-' + date.month + '-' + date.date);
            } else if (typeof date == "string" && date != '' && date != undefined) {
                if (Number(date) > 0) {
                    return date.substr(4, 4) + "-" + date.substr(2, 2) + "-" + date.substr(0, 2);
                } else if (date.indexOf('/') >= 0) {
                    let dt = date.split("/");

                    return String(this.pad(Number(dt[2]), 2)) + '-' + String(this.pad(Number(dt[1]), 2)) + '-' + dt[0];
                }

                return '';
            } else {
                return '';
            }
        } catch (error) {
            return '';
        }
    }

    public convertMatDateFormControl(date: any) {
        try {
            if (typeof date == "object") {
                return (String(this.pad(Number(date.date), 2)) + '/' + String(this.pad(Number(date.month), 2)) + '/' + date.year);
            } else if (typeof date == "string") {
                if (date.indexOf('/') >= 0) {
                    return date;
                } else {
                    return (date != '' && date != undefined ? date.substr(0, 2) + '/' + date.substr(2, 2) + '/' + date.substr(4, 4) : '');
                }
            } else {
                return '';
            }
        } catch (error) {
            return '';
        }
    }

    public getDifferenceInDays(date1: Date, date2: Date) {
        const diffInMs = Math.abs(date2.getTime() - date1.getTime());

        return diffInMs / (1000 * 60 * 60 * 24);
    }

    public getIntervalMonthDate(date: Date, months: number): Date {
        let dateCustom = date.setMonth(new Date().getMonth() + months);

        return new Date(dateCustom);
    }

    public getTypeFile(file: string) {
        let extension: string = '';

        if (file.split('.').length > 1) {
            extension = file.split('.')[file.split('.').length - 1];
            extension = extension.toLocaleLowerCase();
        } else {
            extension = '';
        }

        return extension;
    }

    public getCalcTime(sec_num: number) {
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        return {
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    public removeCaracters(str: string) {
        return String(str).replace(/[().-\/\\ ]/ig, '');
    }
}
