import { RAPID_API_KEY, MORALIS_API} from '../utils/constants';

import { useState } from "react";
import React, { useContext } from "react";
import Services from "./Services";
import axios from "axios";
import { useEffect } from "react";
import {useQuery} from 'react-query';
import { hexZeroPad } from "ethers/lib/utils";

// "BNB", "MATIC", "AVAX", "FTM", "LINK", "ADA", "ATOM", "SOL"
// no need to convert "BUSD"
const CurrencyConverter = () => {
  const [bnbExchangeRate, setBnbExchangeRate] = useState(0);
  const [maticExchangeRate, setMaticExchangeRate] = useState(0);
  const [avaxExchangeRate, setAvaxExchangeRate] = useState(0);
  const [ftmExchangeRate, setFtmExchangeRate] = useState(0);
  const [linkExchangeRate, setLinkExchangeRate] = useState(0);
  const [adaExchangeRate, setAdaExchangeRate] = useState(0);
  const [atomExchangeRate, setAtomExchangeRate] = useState(0);
  const [solExchangeRate, setSolExchangeRate] = useState(0);
  const [sandExchangeRate, setSandExchangeRate] = useState(0);
  const [mboxExchangeRate, setMboxExchangeRate] = useState(0);
  const [kxaExchangeRate, setKxaExchangeRate] = useState(0);
  const [ibatExchangeRate, setIbatExchangeRate] = useState(0);
  

/*Currently client is making queries for every type of currency directly to rapidapi/alphavantage. 
1.TODO Optimize code to make one call to get all currency conversion rates 
Optimization 2 have node get conversion rates once every twenty minutes
Front end will call back end for current rates
*/
  const convert = async () => {
    const options1 = {
      method: 'GET',
      url: 'https://deep-index.moralis.io/api/v2/erc20/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,},
    }; 
    const options2 = {
      method: 'GET',
      url: 'https://deep-index.moralis.io/api/v2/erc20/0xCC42724C6683B7E57334c4E856f4c9965ED682bD/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options3 = {
      url: 'https://deep-index.moralis.io/api/v2/erc20/0x1CE0c2827e2eF14D5C4f29a091d735A204794041/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options4 = {
      url: 'https://deep-index.moralis.io/api/v2/erc20/0xAD29AbB318791D579433D831ed122aFeAf29dcfe/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options5 = {
      url: 'https://deep-index.moralis.io/api/v2/erc20/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options6 = {
      url: 'https://deep-index.moralis.io/api/v2/erc20/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options7 = {
      url: 'https://deep-index.moralis.io/api/v2/erc20/0x0Eb3a705fc54725037CC9e008bDede697f62F335/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options8 = {
      url: 'https://deep-index.moralis.io/api/v2/erc20/0x570A5D26f7765Ecb712C0924E4De545B89fD43dF/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    }; 
    const options9 ={
      url: 'https://deep-index.moralis.io/api/v2/erc20/0x67b725d7e342d7B611fa85e859Df9697D9378B2e/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options10 ={
      url: 'https://deep-index.moralis.io/api/v2/erc20/0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options11 ={
      url: 'https://deep-index.moralis.io/api/v2/erc20/0x2223bF1D7c19EF7C06DAB88938EC7B85952cCd89/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    const options12 ={
      url: 'https://deep-index.moralis.io/api/v2/erc20/0x19cd9B8e42d4EF62c3EA124110D5Cfd283CEaC43/price',
      params: {chain: 'bsc'},
      headers: {accept: 'application/json', 'X-API-Key': MORALIS_API,}
    };
    axios
    .request(options1, {timeout: 1000})
    .then(function(response){
      setBnbExchangeRate(
        response.data["usdPrice"]
      );

    }) 
    axios
      .request(options2, {timeout: 2000})
      .then(function (response) {
        setMaticExchangeRate(
          response.data["usdPrice"]
        );
      })
    axios
      .request(options3, {timeout: 3000})
      .then(function (response) {
        setAvaxExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios
      .request(options4, {timeout: 4000})
      .then(function (response) {
        setFtmExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios
      .request(options5, {timeout: 5000})
      .then(function (response) {
        setLinkExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios
      .request(options6, {timeout: 6000})
      .then(function (response) {
        setAdaExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios
      .request(options7, {timeout: 7000})
      .then(function (response) {
        setAtomExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios
      .request(options8, {timeout: 8000})
      .then(function (response) {
        setSolExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios.request(options9, {timeout: 9000})
      .then(function(response) {
        setSandExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios.request(options10, {timeout: 10000})
      .then(function(response) {
        setMboxExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios.request(options11, {timeout: 11000})
      .then(function(response) {
        setKxaExchangeRate(
          response.data["usdPrice"]
        );
      })
      axios.request(options12, {timeout: 12000})
      .then(function(response) {
        setIbatExchangeRate(
          response.data["usdPrice"]
        );
      }) 
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() =>{
   convert()
  }, [])
  

  return (
      <Services
        bnbExchangeRate={bnbExchangeRate}
        maticExchangeRate={maticExchangeRate}
        avaxExchangeRate={avaxExchangeRate}
        ftmExchangeRate={ftmExchangeRate}
        linkExchangeRate={linkExchangeRate}
        adaExchangeRate={adaExchangeRate}
        atomExchangeRate={atomExchangeRate}
        solExchangeRate={solExchangeRate}
        sandExchangeRate={sandExchangeRate}
        mboxExchangeRate={mboxExchangeRate}
        kxaExchangeRate={kxaExchangeRate}
        ibatExchangeRate={ibatExchangeRate}
      />
  );
};

export default CurrencyConverter;
