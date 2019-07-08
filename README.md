# useDebouncedEffect react hook

Install it with yarn:

```
yarn add use-debounced-effect --save
```

Or with npm:

```
npm i use-debounced-effect --save
```

#Example

```javascript
import React, { useState } from 'react';
import useDebouncedEffect  from 'use-debounced-effect';

export default function Input() {
  const [term, setTerm] = useState('');

  useDebouncedEffect(()=>{
    console.log(term); // debounced 1sec
    // call search api ...
  }, 1000 ,[term]);
  
  return (
    <input onChange={(e)=>setTerm(e.target.value)} />
  );
}
```
