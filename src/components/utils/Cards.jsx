import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeviceRecoverLine, RiNftFill } from "react-icons/ri";
import { TbBrandFeedly, TbTransactionBitcoin, TbTransitionRight } from "react-icons/tb";
import { RiTokenSwapFill } from "react-icons/ri";
import { GrValidate } from "react-icons/gr";
import { BiMoneyWithdraw, BiSolidLogIn } from "react-icons/bi";
import { LuBaggageClaim } from "react-icons/lu";
import { FaFireAlt } from "react-icons/fa";
import { VscActivateBreakpoints, VscDebugDisconnect } from "react-icons/vsc";
import { GiStakeHammer } from "react-icons/gi";
import { TfiWallet } from "react-icons/tfi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineSwapVerticalCircle, MdOutlineVerifiedUser } from "react-icons/md";
import { MdToken } from "react-icons/md";
import { MdOutlineLockReset } from "react-icons/md";
import { MdOutlineFormatColorReset } from "react-icons/md"
import { AiOutlineFund } from "react-icons/ai";
import { PiHourglassLowDuotone } from "react-icons/pi";
import { SiTradingview } from "react-icons/si";



function Cards({ setOpen }) {
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <div className='flex-boxs'>

            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">General Issue</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <RiDeviceRecoverLine className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Swapping</p>
                        <p className="text-body">Swapping error and guildance, click the button below to synchronize your wallet</p>
                    </div>
                    <MdOutlineSwapVerticalCircle className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Asset Recovery</p>
                        <p className="text-body">For Token Recovery, click the button below to synchronize your wallet</p>
                    </div>
                    <RiDeviceRecoverLine className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Transaction Error</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <TbTransactionBitcoin className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Token Recovery</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <RiTokenSwapFill className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Validation</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <GrValidate className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Pool & Farm Access</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <RiDeviceRecoverLine className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Deposit & Withdrawals</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <BiMoneyWithdraw className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Claim Reward</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <LuBaggageClaim className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Token bridge</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>

                    <FaFireAlt className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Token Re-activation</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <VscActivateBreakpoints className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Token Stake and Unstake</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <GiStakeHammer className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Ledger & Trezor</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <TfiWallet className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Website not Loading</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <CgWebsite className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">KYC & Whitelist</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <MdOutlineVerifiedUser className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Airdrops</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <MdToken className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Unable to Access Wallet</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <MdOutlineFormatColorReset className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Reset Wallet Password</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <MdOutlineLockReset className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Wallet Compromise</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <RiDeviceRecoverLine className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">NFT Mint</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <RiNftFill className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Login Issue</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <BiSolidLogIn className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Connect to Dapps</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <VscDebugDisconnect className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Missing Funds</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <AiOutlineFund className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">High Fees</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <TbBrandFeedly className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Migrate</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <TbTransitionRight className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Transaction Delay</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <PiHourglassLowDuotone className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Trading Issue</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <SiTradingview className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            <div className="card" data-aos="fade-down">

                <div className="card-details">
                    <div>
                        <p className="text-title">Other issue</p>
                        <p className="text-body">For instant solution on any type of issues , click the button below to synchronize your wallet</p>
                    </div>
                    <RiDeviceRecoverLine className="icon" fontSize={45} />
                </div>
                <Link onClick={handleOpen} className="card-button">Click here</Link>
            </div>
            {/* Card 2 */}
        </div>
    )
}

export default Cards