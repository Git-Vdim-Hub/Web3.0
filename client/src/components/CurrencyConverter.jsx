import { RAPID_API_KEY } from '../utils/constants';

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
  

/*Currently client is making queries for every type of currency directly to rapidapi/alphavantage. 
1.TODO Optimize code to make one call to get all currency conversion rates 
Optimization 2 have node get conversion rates once every twenty minutes
Front end will call back end for current rates
*/
  const convert = async () => {
    const options1 = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      setTimeout: 900000,
      params: {
        from_currency: "BNB",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    const options2 = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      setTimeout: 900000,
      params: {
        from_currency: "MATIC",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    const options3 = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      setTimeout: 900000,
      params: {
        from_currency: "AVAX",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    const options4 = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      setTimeout: 900000,
      params: {
        from_currency: "FTM",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    const options5 = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      setTimeout: 900000,
      params: {
        from_currency: "LINK",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    const options6 = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      setTimeout: 900000,
      params: {
        from_currency: "ADA",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    const options7 = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      setTimeout: 900000,
      params: {
        from_currency: "ATOM",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    const options8 = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      setTimeout: 900000,
      params: {
        from_currency: "SOL",
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    axios
    .request(options1)
    .then(function(response){
      setBnBExchangeRate(
        response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      );

    })
    axios
      .request(options2)
      .then(function (response) {
        setMaticExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      axios
      .request(options3)
      .then(function (response) {
        setAvaxExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      axios
      .request(options4)
      .then(function (response) {
        setFtmExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      axios
      .request(options5)
      .then(function (response) {
        setLinkExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      .request(options6)
      .then(function (response) {
        setAdaExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      .request(options7)
      .then(function (response) {
        setAtomExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      .request(options8)
      .then(function (response) {
        setSolExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
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
      />
  );
};

export default CurrencyConverter;
