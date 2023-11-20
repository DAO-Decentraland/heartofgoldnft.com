import {format} from "number-currency-format"

export default function numberFormat(num: string | number | undefined, thousandSeparator = " ", decimalSeparator = ",", decimalsDigits = "2"){
	return num ? format(num, {thousandSeparator, decimalSeparator, decimalsDigits, showDecimals: "IF_NEEDED"}) : ""
}
