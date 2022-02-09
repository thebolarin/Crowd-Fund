import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),

  //the address the contract was deployed to
  '0xA038de71509F514Ef6804DbbCaA89BDcD9ac1E09'
);

export default instance;
