import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { abi } from "../abi/abi.js";
import { useState } from 'react';


const Home: NextPage = () => {


  return (
    
    
        <>
        
          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
              />
          </div>
        <div className={styles.container}>
        <Web3Button
          contractAddress="0x2Dc05be382590198Ae61a514Db80f015bb1DAb27"
          contractAbi={abi}
          action={(contract) =>
            contract.call("setNumber", [0])
          }
          onSuccess={() => alert("Number set!")}
          onError={() => alert("Something went wrong")}
        >
          Set Number
        </Web3Button>
      </div>
      <div className={styles.container}>
      <div className="content">
        <div id="box1">0</div>
        
    </div>
        
        <Web3Button
        
        contractAddress="0x2Dc05be382590198Ae61a514Db80f015bb1DAb27"
        contractAbi={abi}
        action={(contract) =>
          contract.call("increment")
        }
        onSuccess={() => alert("Number Incremented!")}
        onError={() => alert("Something went wrong")}
        >
          Increment
        </Web3Button>
         
      </div>
      <div className={styles.container}>
        <Web3Button
          contractAddress="0x2Dc05be382590198Ae61a514Db80f015bb1DAb27"
          contractAbi={abi}
          action={(contract) =>
            contract.call("decrement")
          }
          onSuccess={() => alert("Number Decremented!")}
          onError={() => alert("Something went wrong")}
        >
          Decrement
        </Web3Button>
      </div>
      <div className={styles.container}>
        <Web3Button
          contractAddress="0x2Dc05be382590198Ae61a514Db80f015bb1DAb27"
          contractAbi={abi}
          action={(contract) =>
            contract.call("getLastCaller")
          }
          onSuccess={() => alert("Last Caller!")}
          onError={() => alert("Something went wrong")}
        >
          Get Last Caller
        </Web3Button>
      </div>


       
          </>
  );
};

export default Home;
