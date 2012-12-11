/*jslint bitwise: false, browser: true, windows: false, evil: false, white: false, plusplus: true, indent: 4 */
var queryStringObject = function () {
	var qs = window.location.search.substring(1),
		qarr = qs.split('&'),
		l = qarr.length,
		i,
		bits,
		ret = {};
	for (i = 0; i < l; i++) {
		bits = qarr[i].split('=');
		if (ret[bits[0]]) {
			if (!ret[bits[0]].splice) {
				ret[bits[0]] = [ret[bits[0]]];
			}
			ret[bits[0]].push(bits[1]);
		} else {
			ret[bits[0]] = bits[1];	
		}
	}
	return ret;
}