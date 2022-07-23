
# useDebouncedEffect React Hook

  

Install it with yarn:
```
yarn add use-debounced-effect
```

Or with npm:
```
npm i use-debounced-effect --save
```

## Shorthand
`useDebouncedEffect(callback, delay, dependencies)`

```javascript

import  React, { useState } from  'react';
import  useDebouncedEffect  from  'use-debounced-effect';

export  default  function  Input() {
	const [term, setTerm] = useState('');

	useDebouncedEffect(()=>{
	console.log(term); // debounced 1sec
	// call search api ...
	// return () => maybe cancel prev req
	}, 1000 ,[term]);

	return (
		<input  onChange={(e) => setTerm(e.target.value)}  />
	);
}
```

  



## Advanced
`useDebouncedEffect(callback, config, dependencies)`

### Config
  
|Name  |type| Description |Default/Fallback|
|--|--|--|--|
|timeout  |number| debounce delay |0|
|ignoreInitialCall|boolean| ignore first effect call | true

### Example
```javascript

	useDebouncedEffect(()=>{
		console.log(term); // debounced 1sec
		// call search api ...
		// return () => maybe cancel prev req
	}, 
	{ 
		timeout: 1000,
		ignoreInitialCall: false
	}
	,[term]);

}
```
  
  
