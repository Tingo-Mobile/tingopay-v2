import React from 'react';
import { TingoService } from '../..';
import { BuyAirtimeIcon, CableIcon, SaveMoneyIcon, SendMoneyIcon, UtilityIcon } from '../../../assets/import';


const card = () => {
    return (
        <div className="container service-card">
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <TingoService
                    serviceIcon={BuyAirtimeIcon}
                    serviceTitle="Buy Airtime and Data"
                    serviceText="Buy airtime recharge and data top-up for all major network operators at much cheaper rate"
               />

                <TingoService
                    serviceIcon={CableIcon}
                    serviceTitle="TV Subscriptions"
                    serviceText="Buy airtime recharge and data top-up for all major network operators at much cheaper rate"
               />

                <TingoService
                    serviceIcon={UtilityIcon}
                    serviceTitle="Bill Payment"
                    serviceText="Buy airtime recharge and data top-up for all major network operators at much cheaper rate"
               />
            </div>

            <div className='row row-cols-1 row-cols-md-3 g-4 pt-4'>
                <TingoService
                    serviceIcon={SendMoneyIcon}
                    serviceTitle="Send Money"
                    serviceText="Buy airtime recharge and data top-up for all major network operators at much cheaper rate"
               />

                <TingoService
                    serviceIcon={SaveMoneyIcon}
                    serviceTitle="Save Money"
                    serviceText="Buy airtime recharge and data top-up for all major network operators at much cheaper rate"
               />

                <TingoService
                    serviceIcon={UtilityIcon}
                    serviceTitle="Take Loan"
                    serviceText="Buy airtime recharge and data top-up for all major network operators at much cheaper rate"
               />
            </div>
        </div>
    )
}

export default card