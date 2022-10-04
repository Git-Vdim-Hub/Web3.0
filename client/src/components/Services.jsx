/*Services module performs two tasks: 
1. imports bear cave treasury wallet values from the BSC Blockchain
2. Outputs the bearcave treasury onto a webpage
*/
//import dependencies
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { axios } from "axios";
import { GETBLOCK_ID } from '../utils/constants';
import { CHAIN_STACK } from '../utils/constants';
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
import logo from '../../images/95WEOeJ(1).png';

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

const wbnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
const bearLPAddress = '0x60783c1b91795adfd3add1a9492e37aec8a6e810'
const bearAddress = '0xd1421f138Fd1bCa936C1c4b2cCc80Fc133372e77'
const bearUnicryptAddress = '0xeaed594b5926a7d5fbbc61985390baaf936a6b8d'
const bearStakingAddress = '0xfbec91253b539de082e2da751c784228c2384842'
const deadBearAddress = '0x000000000000000000000000000000000000dead'
const deployerBearAddress = '0xd1421f138fd1bca936c1c4b2ccc80fc133372e77'
const marketingBearAddress ='0xd7b3398F528975CB1b966254ad16DA5E52217e7d'
const devBearAddress = '0xc414f2d604eb7B6c5C1dA41f80Ca0d7C6fA03B6a'

//instantiation of the smartchain provider used to call values from bscscan
const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc')

const TREASURY_ABI = [
    "function name() external view returns(string memory)",
    "function symbol() external view returns (string memory)",
    "function balanceOf(address account) external view returns (uint256)",
]
const BEAR_ABI = [
    "function name() external view returns(string memory)",
    "function symbol() external view returns (string memory)",
    "function balanceOf(address account) external view returns (uint256)",
    "function totalSupply() external view returns (uint256)",
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
const bear = new ethers.Contract(bearAddress, BEAR_ABI, provider)
const wbnb = new ethers.Contract(wbnbAddress, TREASURY_ABI, provider)

const balance = ethers.utils.formatEther(await provider.getBalance(treasuryAddress))
const balanceRounded =Math.round(balance * 100) / 100;

const findValues =(a,b,c,d,e,f,g,h,i,j)=>{
    return (a+b+c+d+e+f+g+h+i+j).toFixed(2)
} 

const bearLP = async()=>{
    const TREASURY_ABI = [
        "function name() external view returns(string memory)",
        "function symbol() external view returns (string memory)",
        "function balanceOf(address account) external view returns (uint256)",
    ]
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/bsc')
    const wbnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    const bearLPAddress = '0x60783c1b91795adfd3add1a9492e37aec8a6e810'
    const wbnb = new ethers.Contract(wbnbAddress, TREASURY_ABI, provider)
    const bearLPWBNB = ethers.utils.formatEther(await wbnb.balanceOf(bearLPAddress))
    console.log(bearLPWBNB)
    return bearLPWBNB
}
const bearLPWBNB = ethers.utils.formatEther(await wbnb.balanceOf(bearLPAddress))
const bearLPRounded = Math.round(bearLPWBNB * 100) / 100;
const bearLPToken = await bear.balanceOf(bearLPAddress) / 1000000000
//console.log(bearLPToken)
const bearValue = bearLPWBNB / bearLPToken
const bearTotalSupply = await bear.totalSupply() /1000000000
const unicryptBear = await bear.balanceOf(bearUnicryptAddress) / 1000000000
const stakingBear = await bear.balanceOf(bearStakingAddress) / 1000000000
const deadBear = await bear.balanceOf(deadBearAddress) / 1000000000
const deployerBear = await bear.balanceOf(deployerBearAddress) / 1000000000
//console.log(deployerBear)
const devBear = await bear.balanceOf(devBearAddress) / 1000000000
const marketingBear = await bear.balanceOf(marketingBearAddress) / 1000000000
const bearHeldByInvestors = bearTotalSupply-bearLPToken-unicryptBear-stakingBear-deadBear-deployerBear-devBear-marketingBear

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
//const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-medium text-white";

// Output of the bear cave treasury including token logo, name, balance, symbol, and dollar value
const Services = ({bnbExchangeRate, maticExchangeRate, avaxExchangeRate, ftmExchangeRate, linkExchangeRate, adaExchangeRate, atomExchangeRate, solExchangeRate}) => (
    //const totalBalance = (maticBalanceRounded*maticExchangeRate)+
    <div className="flex w-full justify-center items-center"> 
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-60 py-12 px-4">
            <div className="flex flex-1 justify-center items-start flex-col mf:mr-10">
                <h1 className="text-4xl text-center text-white py-3  w-full ">
                    The Bear Cave  
                </h1>
                <h1 className="text-3xl w-full text-center">
                Total: ${findValues(bnbExchangeRate*balance, maticExchangeRate*maticBalance, avaxExchangeRate*avaxBalance, ftmExchangeRate*ftmBalance,
                         linkExchangeRate*linkBalance, adaExchangeRate*adaBalance, atomExchangeRate*atomBalance, solExchangeRate*solBalance, parseFloat(busdBalance), bnbExchangeRate*parseFloat(bearLP()))}
                </h1>

                <div className="grid grid-cols-4 items-center lg:grid-cols-5 w-full mt-10 border-2 p-5 rounded-xl gap-4 text-black backdrop-blur-lg text-center divide-x">
                    
                    <div><img src={maticLogo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Polygon</div>
                    <div>{maticBalanceRounded}</div>
                    <div className="hidden lg:block">MATIC</div>
                    <div> ${(maticBalanceRounded*maticExchangeRate).toFixed(2)} </div>

                    <div><img src={avaxLogo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Avalanche</div>
                    <div>{avaxBalanceRounded}</div>
                    <div className="hidden lg:block">AVAX</div>
                    <div>${(avaxBalanceRounded*avaxExchangeRate).toFixed(2)}</div>

                    <div><img src={ftmLogo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Fantom</div>
                    <div>{ftmBalanceRounded}</div>
                    <div className="hidden lg:block">FTM</div>
                    <div>${(ftmBalanceRounded*ftmExchangeRate).toFixed(2)}</div>

                    <div><img src={busdLogo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Binance-US Dollar</div>
                    <div >{busdBalance}</div>
                    <div className="hidden lg:block">BUSD</div>
                    <div>${busdBalance}</div>

                    <div><img src={linkLogo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Chainlink</div>
                    <div>{linkBalanceRounded}</div>
                    <div className="hidden lg:block">LINK</div>
                    <div>${(linkBalanceRounded*linkExchangeRate).toFixed(2)}</div>

                    <div><img src={adaLogo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Cordano</div>
                    <div>{adaBalanceRounded}</div>
                    <div className="hidden lg:block">ADA</div>
                    <div>${(adaBalanceRounded*adaExchangeRate).toFixed(2)}</div>

                    <div> <img src={atomLogo} alt="logo" className="w-12 lg:w-16 border-2" /> </div>
                    <div>Cosmos</div>
                    <div>{atomBalanceRounded}</div>
                    <div className="hidden lg:block">ATOM</div>
                    <div> ${(atomBalanceRounded*atomExchangeRate).toFixed(2)} </div>
                    
                    <div> <img src={solLogo} alt="logo" className="w-12 lg:w-16 border-2" /> </div>
                    <div>Solana</div>
                    <div>{solBalanceRounded}</div>
                    <div className="hidden lg:block">SOL</div>
                    <div> ${(solBalanceRounded*solExchangeRate).toFixed(2)} </div>
                </div>
                <h1 className="text-4xl text-center text-white mt-5 w-full">
                    Next Month's Investment
                </h1>
                <div className="grid grid-cols-4 lg:grid-cols-5 items-center border-2 rounded-lg w-full mt-10 text-black backdrop-blur-lg p-5 text-center divide-x">
                    
                    <div><img src={bnbLogo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Binance Smartchain</div>
                    <div>{balanceRounded}</div>
                    <div className="hidden lg:block">BNB</div>
                    <div> ${(bnbExchangeRate*balanceRounded).toFixed(2)} </div>
                </div>
                <h1 className="text-4xl text-center text-white mt-5 w-full">
                    Arbitrage Calculation
                </h1> 
                <div className="grid grid-cols-4 lg:grid-cols-5 items-center border-2 rounded-lg w-full mt-10 text-black backdrop-blur-lg p-5 text-center divide-x gap-4">
                
                <div><img src={bnbLogo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Bear LP</div>
                    <div>{bearLPRounded}</div>
                    <div className="hidden lg:block">BNB</div>
                    <div> ${(bnbExchangeRate*bearLPWBNB).toFixed(2)} </div>

                    <div><img src={logo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>1 Mil BEAR</div>
                    <div>{(bearValue*1000000).toFixed(2)}</div>
                    <div className="hidden lg:block">BEAR</div>
                    <div> ${((bnbExchangeRate*bearValue*1000000)*0.9).toFixed(2)} </div>

                    <div><img src={logo} alt="logo" className="w-12 lg:w-16 border-2" /></div>
                    <div>Treasury</div>
                    <div>{(bearHeldByInvestors).toFixed(2).slice(0,2)}M</div>
                    <div className="hidden lg:block">BEAR</div>
                    <div> ${((findValues(bnbExchangeRate*balance, maticExchangeRate*maticBalance, avaxExchangeRate*avaxBalance, ftmExchangeRate*ftmBalance,
                         linkExchangeRate*linkBalance, adaExchangeRate*adaBalance, atomExchangeRate*atomBalance, solExchangeRate*solBalance, parseFloat(busdBalance), bnbExchangeRate*bearLPWBNB)/bearHeldByInvestors)*1000000).toFixed(2)} </div>
                </div>  
            </div>
        </div>
    </div>
 );

export default Services;