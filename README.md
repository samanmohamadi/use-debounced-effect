# useDebouncedEffect react hook

Install it with yarn:

```
yarn add use-throttled-effect --save
```

Or with npm:

```
npm i use-throttled-effect --save
```

#Example
```javascript
import React, { useState } from 'react';
import useThrottledEffect  from 'use-throttled-effect';

export default function Input() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => setCount(count=>count+1) ,100);
    return ()=>clearInterval(interval);
  },[])
  
  useThrottledEffect(()=>{
    console.log(count);     
  }, 1000 ,[count]);
  
  return (
    {count}
  );
}
```
