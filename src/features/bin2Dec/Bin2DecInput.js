export function Bin2DecInput({
  name = '',
  value = '',
  binStrErrMsg = '',
  handleInputChange = () => {},
}) {
  return (
    <label>
      {name}
      <input type="text" value={value} onChange={handleInputChange} />
      <p style={{ color: 'red' }}>{binStrErrMsg}</p>
    </label>
  );
}
