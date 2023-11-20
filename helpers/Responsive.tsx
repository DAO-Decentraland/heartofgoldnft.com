import { useMediaQuery } from 'react-responsive'
import React, {useEffect, useState} from "react";

/**
 * Адаптивные блоки убирающие дубли
 * @param children - десктоп версия
 * @param mobile - мобильная версия
 * @param width - ширина триггера в моб
 * @returns {*}
 * @constructor
 */

interface ResponsiveProps {
	children?: React.ReactNode;
	mobile?: React.ReactNode;
	width?: number
}
export default function Responsive({children, mobile, width = 600}: ResponsiveProps){
	const [loading, setLoading] = useState(false)
	const isBigScreen = useMediaQuery({ query: `(min-width: ${width + 1}px)` })
	useEffect(() => {setLoading(true)}, [])
	return loading ? (isBigScreen ? children ? children : null : mobile ? mobile : null) : null
}
