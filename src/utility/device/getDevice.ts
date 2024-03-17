/**
 * @returns The type of device the user is using
 *
 * @remarks
 * This function returns the type of device the user is using. It is used for functionalities that differate between mobile, tablet, and desktop.
 *
 * @example
 * const deviceType = getDeviceType();
 * // returns 'mobile' or 'tablet' or 'desktop'
 */

export const getDeviceType = () => {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return 'tablet';
	}
	if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
		return 'mobile';
	}
	return 'desktop';
};
