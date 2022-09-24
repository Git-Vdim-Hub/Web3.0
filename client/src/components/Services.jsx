/*Services module performs two tasks: 
1. imports bear cave treasury wallet values from the BSC Blockchain
2. Outputs the bearcave treasury onto a webpage
*/
//import dependencies
import React from "react";
import { useState } from "react";
import { axios } from "axios";
import { GETBLOCK_ID } from '../utils/constants';
import { ethers } from "ethers";
import currencyConverter from './CurrencyConverter';

//import crypto logos
import bnbLogo from '../../images/BinanceLogo.png'
import maticLogo from '../../images/PolygonLogo.png';
import avaxLogo from '../../images/Avalanchelogo.png';
import ftmLogo from '../../images/Fantomlogo.png';
import busdLogo from '../../images/BUSDlogo.png';
import linkLogo from '../../images/linkLogo.png'
import adaLogo from '../../images/Adalogo.png';
import atomLogo from '../../images/Cosmoslogo.png';
import solLogo from '../../images/Solanalogo.png';

//create and assign treasury wallet and contract addresses
const treasuryAddress = '0x1f1b2c8FF594E7f325594232d510234573675BbC'
const maticAddress = '0xCC42724C6683B7E57334c4E856f4c9965ED682bD'
const avaxAddress = '0x1CE0c2827e2eF14D5C4f29a091d735A204794041'
const ftmAddress = '0xAD29AbB318791D579433D831ed122aFeAf29dcfe'
const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
const linkAddress = '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD'
const adaAddress = '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47' 
const atomAddress = '0x0Eb3a705fc54725037CC9e008bDede697f62F335'
const solAddress = '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF'

//instantiation of the smartchain provider used to call values from bscscan
const provider = new ethers.providers.JsonRpcProvider(`https://bsc.getblock.io/mainnet/${GETBLOCK_ID}`)

const TREASURY_ABI = [
    "function name() external view returns(string memory)",
    "function symbol() external view returns (string memory)",
    "function balanceOf(address account) external view returns (uint256)",
]

//assigning contract values to each token
const matic = new ethers.Contract(maticAddress, TREASURY_ABI, provider)
const avax = new ethers.Contract(avaxAddress, TREASURY_ABI, provider)
const ftm = new ethers.Contract(ftmAddress, TREASURY_ABI, provider)
const busd = new ethers.Contract(busdAddress, TREASURY_ABI, provider)
const link = new ethers.Contract(linkAddress, TREASURY_ABI, provider)
const ada = new ethers.Contract(adaAddress, TREASURY_ABI, provider)
const atom = new ethers.Contract(atomAddress, TREASURY_ABI, provider)
const sol = new ethers.Contract(solAddress, TREASURY_ABI, provider)


const balance = ethers.utils.formatEther(await provider.getBalance(treasuryAddress))
const balanceRounded =Math.round(balance * 100) / 100;

const maticBalance = ethers.utils.formatEther(await matic.balanceOf(treasuryAddress))
const maticBalanceRounded = Math.round(maticBalance * 100) / 100;

const avaxBalance = ethers.utils.formatEther(await avax.balanceOf(treasuryAddress))
const avaxBalanceRounded = Math.round(avaxBalance*100)/100;

const ftmBalance = ethers.utils.formatEther(await ftm.balanceOf(treasuryAddress))
const ftmBalanceRounded = Math.round(ftmBalance*100)/100;

const busdBalance = ethers.utils.formatEther(await busd.balanceOf(treasuryAddress))


const linkBalance = ethers.utils.formatEther(await link.balanceOf(treasuryAddress))
const linkBalanceRounded = Math.round(linkBalance * 100) / 100;

const adaBalance = ethers.utils.formatEther(await ada.balanceOf(treasuryAddress))
const adaBalanceRounded = Math.round(adaBalance * 100) / 100;

const atomBalance = ethers.utils.formatEther(await atom.balanceOf(treasuryAddress))
const atomBalanceRounded = Math.round(atomBalance * 100) / 100;

const solBalance = ethers.utils.formatEther(await sol.balanceOf(treasuryAddress))
const solBalanceRounded = Math.round(solBalance * 100) / 100;


//commonStyles is used to format the white table outline for The Bear Cave Treasury
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-medium text-white";

// Output of the bear cave treasury including token logo, name, balance, symbol, and dollar value
const Services = ({bnbExchangeRate, maticExchangeRate, avaxExchangeRate, ftmExchangeRate, linkExchangeRate, adaExchangeRate, atomExchangeRate, solExchangeRate}) => (
    <div className="flex w-full justify-center items-center"> 
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-60 py-12 px-4">
            <div className="flex flex-1 justify-center items-start flex-col mf:mr-10">
                <h1 className="text-4xl sm:text-8xl text-white py-1">
                    The Bear Cave
                </h1>

                <div className="grid sm:grid-cols-5 grid-cols-7 w-full mt-10">
                    
                    <div className={`rounded-tl-2xl ${commonStyles}`}><img src={maticLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>Matic</div>
                    <div className={commonStyles}>{maticBalanceRounded}</div>
                    <div className={commonStyles}>MATIC</div>
                    <div className={`rounded-tr-2xl ${commonStyles}`}> ${maticBalanceRounded*maticExchangeRate} </div>

                    <div className={commonStyles}><img src={avaxLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>Avalanche</div>
                    <div className={commonStyles}>{avaxBalanceRounded}</div>
                    <div className={commonStyles}>AVAX</div>
                    <div className={commonStyles}>${avaxBalanceRounded*avaxExchangeRate}</div>

                    <div className={commonStyles}><img src={ftmLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>Fantom</div>
                    <div className={commonStyles}>{ftmBalanceRounded}</div>
                    <div className={commonStyles}>FTM</div>
                    <div className={commonStyles}>${ftmBalanceRounded*ftmExchangeRate}</div>

                    <div className={commonStyles}><img src={busdLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>Binance-US Dollar</div>
                    <div className={commonStyles}>{busdBalance}</div>
                    <div className={commonStyles}>BUSD</div>
                    <div className={commonStyles}>${busdBalance}</div>

                    <div className={commonStyles}><img src={linkLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>Chainlink</div>
                    <div className={commonStyles}>{linkBalanceRounded}</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>${linkBalanceRounded*linkExchangeRate}</div>

                    <div className={commonStyles}><img src={adaLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>Cordano</div>
                    <div className={commonStyles}>{adaBalanceRounded}</div>
                    <div className={commonStyles}>ADA</div>
                    <div className={commonStyles}>${adaBalanceRounded*adaExchangeRate}</div>

                    <div className={commonStyles}> <img src={atomLogo} alt="logo" className="w-16" /> </div>
                    <div className={commonStyles}>Cosmos</div>
                    <div className={commonStyles}>{atomBalanceRounded}</div>
                    <div className={commonStyles}>ATOM</div>
                    <div className={commonStyles}> ${atomBalanceRounded*atomExchangeRate} </div>
                    
                    <div className={`rounded-bl-2xl ${commonStyles}`}> <img src={solLogo} alt="logo" className="w-16" /> </div>
                    <div className={commonStyles}>Solana</div>
                    <div className={commonStyles}>{solBalanceRounded}</div>
                    <div className={commonStyles}>SOL</div>
                    <div className={`rounded-br-2xl ${commonStyles}`}> ${solBalanceRounded*solExchangeRate} </div>
                </div>
                <h1 className="text-4xl sm:text-2xl text-white py-1">
                    Next Month's Investment
                </h1>
                <div className="grid sm:grid-cols-5 grid-cols-7 w-full mt-10">
                    
                    <div className={`rounded-tl-2xl ${commonStyles}`}><img src={bnbLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>Binance Smartchain</div>
                    <div className={commonStyles}>{balanceRounded}</div>
                    <div className={commonStyles}>BNB</div>
                    <div className={`rounded-tr-2xl ${commonStyles}`}> ${bnbExchangeRate*balanceRounded} </div>
                </div>    
            </div>
        </div>
    </div>
 );

export default Services;