import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Bin2DecInput } from './Bin2DecInput';
import { selectBinStr } from './Bin2DecSlice';

export function Bin2DecPage() {
  const binStr = useSelector(selectBinStr);
  const [localBinString, setLocalBinString] = useState(binStr);
  const [binStrErrMsg, setBinStrErrMsg] = useState('');

  const judgeBinStr = (binStr) => {
    if (binStr.match(/[^0|1]/g)) {
      setBinStrErrMsg(`二进制数只能包含0或1`);
      return;
    }
    setBinStrErrMsg('');
  };

  const handleInputChange = useCallback((e) => {
    setLocalBinString(e.target.value);
    judgeBinStr(e.target.value);
  }, []);

  const decimalNumber = useMemo(() => {
    if (binStrErrMsg) {
      return '';
    }
    return parseInt(localBinString, 2) || '';
  }, [localBinString]);

  return (
    <>
      <Bin2DecInput
        name="Binary"
        value={localBinString}
        binStrErrMsg={binStrErrMsg}
        handleInputChange={handleInputChange}
      />
      <Bin2DecInput name="Decimal" value={decimalNumber} />
    </>
  );
}
