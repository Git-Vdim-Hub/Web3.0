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
import maticLogo from '../../images/PolygonLogo.png';
import busdLogo from '../../images/BUSDlogo.png';
import avaxLogo from '../../images/Avalanchelogo.png';
import ftmLogo from '../../images/Fantomlogo.png';
import adaLogo from '../../images/Adalogo.png';
import atomLogo from '../../images/Cosmoslogo.png';
import solLogo from '../../images/Solanalogo.png';

//create and assign wallet and contract addresses
const treasuryAddress = '0x1f1b2c8FF594E7f325594232d510234573675BbC'
const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
const maticAddress = '0xCC42724C6683B7E57334c4E856f4c9965ED682bD'
const avaxAddress = '0x1CE0c2827e2eF14D5C4f29a091d735A204794041'
const ftmAddress = '0xAD29AbB318791D579433D831ed122aFeAf29dcfe'
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
const busd = new ethers.Contract(busdAddress, TREASURY_ABI, provider)
const matic = new ethers.Contract(maticAddress, TREASURY_ABI, provider)
const avax = new ethers.Contract(avaxAddress, TREASURY_ABI, provider)
const ftm = new ethers.Contract(ftmAddress, TREASURY_ABI, provider)
const ada = new ethers.Contract(adaAddress, TREASURY_ABI, provider)
const atom = new ethers.Contract(atomAddress, TREASURY_ABI, provider)
const sol = new ethers.Contract(solAddress, TREASURY_ABI, provider)


//const balance = ethers.utils.formatEther(await provider.getBalance(treasuryAddress))

const busdBalance = ethers.utils.formatEther(await busd.balanceOf(treasuryAddress))
const busdName = await busd.name()
const busdSymbol = await busd.symbol()

const maticBalance = ethers.utils.formatEther(await matic.balanceOf(treasuryAddress))
const maticBalanceRounded = Math.round(maticBalance * 100) / 100;
const maticName = await matic.name()
//const maticSymbol = await matic.symbol()
const maticValue = maticBalance

const avaxBalance = ethers.utils.formatEther(await avax.balanceOf(treasuryAddress))
const avaxBalanceRounded = Math.round(avaxBalance*100)/100;
const avaxName = await avax.name()
//const avaxSymbol = await avax.symbol()

const ftmBalance = ethers.utils.formatEther(await ftm.balanceOf(treasuryAddress))
const ftmBalanceRounded = Math.round(ftmBalance*100)/100;
const ftmName = await ftm.name()
const ftmSymbol = await ftm.symbol()

const adaBalance = ethers.utils.formatEther(await ada.balanceOf(treasuryAddress))
const adaBalanceRounded = Math.round(adaBalance*100)/100;
const adaName = await ada.name()
const adaSymbol = await ada.symbol()

const atomBalance = ethers.utils.formatEther(await atom.balanceOf(treasuryAddress))
const atomName = await atom.name()
const atomSymbol = await atom.symbol()

//const solBalance = ethers.utils.formatEther(await sol.balanceOf(treasuryAddress))
//const solName = await sol.name()
//const solSymbol = await sol.symbol()

//commonStyles is used to format the white table outline for The Bear Cave Treasury
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-medium text-white";

// Output of the bear cave treasury including token logo, name, balance, symbol, and dollar value
const Services = ({maticExchangeRate, avaxExchangeRate, ftmExchangeRate, adaExchangeRate, atomExchangeRate}) => (
    <div className="flex w-full justify-center items-center"> 
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-60 py-12 px-4">
            <div className="flex flex-1 justify-center items-start flex-col mf:mr-10">
                <h1 className="text-4xl sm:text-8xl text-white py-1">
                    The Bear Cave
                </h1>

                <div className="grid sm:grid-cols-5 grid-cols-7 w-full mt-10">
                    
                    <div className={`rounded-tl-2xl ${commonStyles}`}><img src={busdLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>{busdName}</div>
                    <div className={commonStyles}>{busdBalance}</div>
                    <div className={commonStyles}>{busdSymbol}</div>
                    <div className={`rounded-tr-2xl ${commonStyles}`}> {busdBalance} </div>

                    <div className={commonStyles}><img src={maticLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>{maticName}</div>
                    <div className={commonStyles}>{maticBalanceRounded}</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>{maticValue*maticExchangeRate}</div>

                    <div className={commonStyles}><img src={avaxLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>{avaxName}</div>
                    <div className={commonStyles}>{avaxBalanceRounded}</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>{avaxBalance*avaxExchangeRate}</div>

                    <div className={commonStyles}><img src={ftmLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>{ftmName}</div>
                    <div className={commonStyles}>{ftmBalanceRounded}</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>{ftmBalance*ftmExchangeRate}</div>

                    <div className={commonStyles}><img src={adaLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>{adaName}</div>
                    <div className={commonStyles}>{adaBalanceRounded}</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>{adaBalance*adaExchangeRate}</div>

                    <div className={commonStyles}><img src={atomLogo} alt="logo" className="w-16" /></div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>Security</div>

                    <div className={`rounded-bl-2xl ${commonStyles}`}> <img src={solLogo} alt="logo" className="w-16" /> </div>
                    <div className={commonStyles}>Low Fees</div>
                    <div className={commonStyles}>Security</div>
                    <div className={commonStyles}>Security</div>
                    <div className={`rounded-br-2xl ${commonStyles}`}> Dollar Value </div>
                </div>
            </div>
        </div>
    </div>
 );

export default Services;