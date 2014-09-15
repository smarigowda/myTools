function* consumer() { 
	while(true) { 
		try { 
				var val = yield null; 
				console.log('inside gen. got some value...' + val);
		} 
		catch(e) {
			console.log('error caught...');
		}
	}
}

var c = consumer();

c.next();
c.next('passing value to gen...')