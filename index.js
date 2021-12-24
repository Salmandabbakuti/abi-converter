const log = (message) => {
  $('#log').removeClass('error').text(message);
  console.log(message);
}
const error = (message) => {
  console.log(message);
  $('#log').addClass('error').text(message)
};

const convertABI = () => {
  try {
    const abi = $('#abiInput').val();
    const parsedABI = new ethers.utils.Interface(abi);
    const fullReadableABI = parsedABI.format(ethers.utils.FormatTypes.full); // full readable abi
    console.log(fullReadableABI);
    $('#abiOutput').val(JSON.stringify(fullReadableABI));
    return log('Converted ABI');
  }catch (e) {
    error(`ABI must be non empty array: ${e.message}`);
  }
};
const copyToClipboard = () => { 
  const copyText = $('#abiOutput').val();
  if(!copyText) return error('No text to copy');
  navigator.clipboard.writeText(copyText);
  return log('Copied to clipboard');
  };