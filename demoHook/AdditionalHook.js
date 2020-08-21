import React, { useCallback, useMemo, useState } from 'react';

const App = () => {
    const [callbackCount, setCallbackCount] = useState(0);
    const [memoCount, setMemoCount] = useState(0);

    const memoFunction = () => {
        console.log(memoCount, 'memo called');
    }
}