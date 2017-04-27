/**
 * Function takes of fund mf/ofst name and searches of all arrau to see if we have a match
 * @params  share_name  pass lower case strofg of mutual fund from search box
 * @return  true if match; otherwise false
 */
var search_match_gsk = function(share_name) {
	arr = [];
	share_name = share_name.toLowerCase()
	for (ofst of GSK_etf_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name.toLowerCase());
			}
		}
		if (ofst.hasOwnProperty("ticker")) {
			if (ofst.ticker.toLowerCase() === share_name) {
				arr.push(ofst.ticker.toLowerCase());
			}
		}
		
	}
	
	for (ofst of GSK_mfund_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name);
			}
		}
		if (ofst.hasOwnProperty("ticker")) {
			if (ofst.ticker.toLowerCase() === share_name) {
				arr.push(ofst.ticker.toLowerCase());
			}
		}

	}
	
	return arr;
}

var search_match_pfe = function(share_name) {
	arr = [];
	share_name = share_name.toLowerCase()
	
	for (ofst of PFE_etf_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name);
			}
		}
		if (ofst.hasOwnProperty("ticker")) {
			if (ofst.ticker.toLowerCase() === share_name) {
				arr.push(ofst.ticker.toLowerCase());
			}
		}

	}
	
	for (ofst of PFE_mfund_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name);
			}
		}
		if (ofst.hasOwnProperty("ticker")) {
			if (ofst.ticker.toLowerCase() === share_name) {
				arr.push(ofst.ticker.toLowerCase());
			}
		}

	}

	
	return arr;
}

var search_match_all = function(share_name) {
	arr = [];
	share_name = share_name.toLowerCase()
	for (ofst of all_funds) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name.toLowerCase());
			}
		}
		if (ofst.hasOwnProperty("ticker")) {
			if (ofst.ticker.toLowerCase() === share_name) {
				arr.push(ofst.ticker.toLowerCase());
			}
		}

	}
	for (ofst of GSK_etf_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name.toLowerCase());
			}
		}

	}
	
	for (ofst of GSK_mfund_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name);
			}
		}

	}
	for (ofst of PFE_etf_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name);
			}
		}

	}
	
	for (ofst of PFE_mfund_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name) {
				arr.push(ofst.name);
			}
		}

	}
	return arr;
}

var search_holders = function(share_name) {
	arr = [];
	share_name = share_name.toLowerCase()
	for (ofst of all_funds) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase().includes(share_name.substring(0,40))) {
				arr.push(ofst.name.toLowerCase());
			}
		}

	}
	for (ofst of GSK_etf_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase().includes(share_name.substring(0,40))) {
				arr.push(ofst.name.toLowerCase());
			}
		}

	}
	
	for (ofst of GSK_mfund_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase().includes(share_name.substring(0,40))) {
				arr.push(ofst.name);
			}
		}

	}
	for (ofst of PFE_etf_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase().includes(share_name.substring(0,40))) {
				arr.push(ofst.name);
			}
		}

	}
	
	for (ofst of PFE_mfund_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase().includes(share_name.substring(0,40))) {
				arr.push(ofst.name);
			}
		}

	}
	return arr;
}

var search_contact = function(share_name) {
	let data = {};
	for (ofst of GSK_etf_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name.toLowerCase()) {
				data.twitter = ofst.twitter;
				data.email = ofst.email;
				data.url = ofst.contact_url;
			}
		}

	}
	
	for (ofst of GSK_mfund_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name.toLowerCase()) {
				data.twitter = ofst.twitter;
				data.email = ofst.email;
				data.url = ofst.contact_url;
			}
		}

	}
	for (ofst of PFE_etf_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name.toLowerCase()) {
				data.twitter = ofst.twitter;
				data.email = ofst.email;
				data.url = ofst.contact_url;
			}
		}

	}
	
	for (ofst of PFE_mfund_holders) {
		if (ofst.hasOwnProperty("name")) {
			if (ofst.name.toLowerCase() === share_name.toLowerCase()) {
				data.twitter = ofst.twitter;
				data.email = ofst.email;
				data.url = ofst.contact_url;
			}
		}
	}
	return data;
}