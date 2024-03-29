import { Modal } from 'antd'
import * as React from 'react'
import { useIntl } from 'react-intl'
import { useQRCode } from 'react-qrcode'
import styled from 'styled-components'

import { useFade } from '../hooks/useFade'
import ico_bitil from '../img/ico_bitl.jpg'
import ico_btc from '../img/ico_btc.jpg'
import CloseButton from '../img/ico_close.svg'
import ico_bitil_btc from '../img/ico_half_half.jpg'
import { colors } from '../theme/colors'
import { phoneDevices } from '../utils/breakpoints'
import { SupportProps } from '../utils/interfaces'
import SiteButton from './BitcoinSiteButton'
import { FormattedMessage } from './FormattedMessageWithHover'

const Support: React.FC<SupportProps> = () => {
  const [isExtended, setIsExtended] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [chosenAmount, setChosenAmount] = React.useState(0)
  const [chosenCurrency, setChosenCurrency] = React.useState('btc')
  const intl = useIntl()

  const bitcoinAddress = intl.formatMessage({
    id: `donations.address.btc`,
    defaultMessage: `bc1q...123...safd`
  })
  const bitcoinQRString = useQRCode(
    `bitcoin:${bitcoinAddress}?amount=${chosenAmount}`
  )

  const btcilAddress = intl.formatMessage({
    id: `donations.address.btcil`,
    defaultMessage: `il1q...123...safd`
  })
  const btcilQRString = useQRCode(
    `bitcoinil:${btcilAddress}?amount=${chosenAmount}`
  )

  const bothAddress = intl.formatMessage({
    id: `donations.address.both`,
    defaultMessage: `il1q...123...safd`
  })

  const bothQRString = useQRCode(
    `bitcoinil:${bothAddress}?amount=${chosenAmount}`
  )

  const styledSupportRef = React.createRef<any>()

  const { disappearReappearHTMLElement } = useFade()

  React.useEffect(() => {
    const handleKey = (e: any) => {
      if (e.key === 'Escape') {
        disappearReappearHTMLElement(styledSupportRef.current, 150, 0)
        setIsExtended(false)
      }
    }

    window.addEventListener('keyup', handleKey)

    return () => window.removeEventListener('keyup', handleKey)
  }, [styledSupportRef.current])

  const toggleExtended = (setTo?: boolean) => {
    if (setTo) {
      setIsExtended(setTo)
      return
    }
    setIsExtended(!isExtended)
    disappearReappearHTMLElement(styledSupportRef.current, 0, 150)
  }

  return (
    <React.Fragment>
      <StyledSupport
        id="Support"
        onClick={() => {
          if (!showModal) toggleExtended()
        }}
        className={`${isExtended ? 'extended' : 'minimized'} support-main-wrap`}
      >
        {!isExtended ? (
          <div ref={styledSupportRef} className="support-minimized-wrap">
            <p>
              <FormattedMessage
                id={`support.cta`}
                defaultMessage={`Bitcoin.Il Needs Your Support`}
                description={`CTA`}
              />
            </p>
          </div>
        ) : (
          <div ref={styledSupportRef} className="support-maximized-wrap">
            <span onClick={() => toggleExtended(false)} className="close">
              <img src={CloseButton} />
            </span>
            <p className="margin-bottom">
              <FormattedMessage
                id={`support.title`}
                defaultMessage={`Bitcoin Il is a community funded project, donations are appreciated and used to improve the website.`}
                description={`Homepage Title`}
              />
            </p>
            <span
              onClick={(e) => {
                e.stopPropagation()
                setShowModal(true)
              }}
            >
              <SiteButton
                opacity={isExtended ? '1' : '0'}
                transition={`opacity 800ms`}
                type={`primary`}
              >
                <p>
                  <FormattedMessage
                    id={`support.MakeaDonation`}
                    defaultMessage={`Make a Donation`}
                    description={`id`}
                  />
                </p>
              </SiteButton>
            </span>
            {showModal ? (
              <SupportStyledModal
                title={null}
                visible={showModal}
                footer={null}
                onCancel={() => {
                  setShowModal(false)
                  // toggleExtended(false)
                }}
              >
                <h1 className="modal-title">Donate to Bitcoin Il</h1>
                <div className="buttons-container">
                  <SiteButton
                    style={{ color: 'black' }}
                    type={
                      chosenCurrency === 'usd' && chosenAmount === 1
                        ? 'primary'
                        : ''
                    }
                    onClick={() => {
                      setChosenAmount(1)
                      setChosenCurrency('usd')
                    }}
                  >
                    <p className="button-top">$1.00</p>
                  </SiteButton>
                  <SiteButton
                    style={{ color: 'black' }}
                    type={
                      chosenCurrency === 'usd' && chosenAmount === 5
                        ? 'primary'
                        : ''
                    }
                    onClick={() => {
                      setChosenAmount(5)
                      setChosenCurrency('usd')
                    }}
                  >
                    <p className="button-top">$5.00</p>
                  </SiteButton>
                  <SiteButton
                    style={{ color: 'black' }}
                    type={
                      chosenCurrency === 'usd' && chosenAmount === 10
                        ? 'primary'
                        : ''
                    }
                    onClick={() => {
                      setChosenAmount(10)
                      setChosenCurrency('usd')
                    }}
                  >
                    <p className="button-top">$10.00</p>
                  </SiteButton>
                </div>
                <div className="input-container">
                  <div className="two-inputs">
                    <div className="custom-amount-wrap">
                      <p>USD</p>
                      <input
                        style={{ color: 'black' }}
                        value={chosenCurrency === 'usd' ? chosenAmount : 0}
                        type="number"
                        min={0}
                        placeholder="Or custom amount? (BTC)"
                        onChange={(e) => {
                          setChosenCurrency('usd')
                          setChosenAmount(parseInt(e.target.value))
                        }}
                      />
                    </div>
                    <div className="custom-amount-wrap">
                      <p>BTC</p>
                      <input
                        style={{ color: 'black' }}
                        value={chosenCurrency === 'btc' ? chosenAmount : 0}
                        placeholder="Or custom amount (USD)"
                        min="0"
                        step={1}
                        type="number"
                        onChange={(e) => {
                          setChosenCurrency('btc')
                          setChosenAmount(parseInt(e.target.value))
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="qr-trio-wrap">
                  <div className="qr-trio-wrap-btc">
                    <span
                      style={{ color: 'black' }}
                      className="qr-trio-wrap-logo"
                    >
                      <img className="crypto-logo" src={ico_btc} />
                    </span>
                    <span
                      style={{ color: 'black' }}
                      className="qr-trio-wrap-wallet-address"
                    >
                      bc346729623789123913
                    </span>
                    <span
                      style={{ color: 'black' }}
                      className="qr-trio-wrap-qr"
                    >
                      <img src={bitcoinQRString} />
                    </span>
                  </div>
                  <div className="qr-trio-wrap-btc-and-bitil">
                    <span className="qr-trio-wrap-logo">
                      <img className="crypto-logo" src={ico_bitil_btc} />
                    </span>
                    <span className="qr-trio-wrap-wallet-address">
                      bc346729623789123913
                    </span>
                    <span className="qr-trio-wrap-qr">
                      <div
                        style={{
                          height: '148px',
                          width: '148px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '28px',
                          textAlign: 'center'
                        }}
                      >
                        <img src={bothQRString} />
                      </div>
                    </span>
                  </div>
                  <div className="qr-trio-wrap-bitil">
                    <span className="qr-trio-wrap-logo">
                      <img className="crypto-logo" src={ico_bitil} />
                    </span>
                    <span className="qr-trio-wrap-wallet-address">
                      bc346729623789123913
                    </span>
                    <span className="qr-trio-wrap-qr">
                      <div
                        style={{
                          height: '148px',
                          width: '148px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '28px',
                          textAlign: 'center'
                        }}
                      >
                        <img src={btcilQRString} />
                      </div>
                    </span>
                  </div>
                </div>
              </SupportStyledModal>
            ) : null}
          </div>
        )}
      </StyledSupport>
      <StyledClickOutside
        onClick={() => {
          toggleExtended(false)
        }}
        className={
          isExtended
            ? 'support-click-outside-show'
            : 'support-click-outside-hide'
        }
        id="support-click-outside"
      />
    </React.Fragment>
  )
}

export default Support

const StyledSupport = styled.div`
  ${phoneDevices} {
    display: none;
  }

  transition: all 800ms;
  font-size: 11.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.extended {
    height: 205px;
    color: #000000;
    background: ${colors.dullAccent};
    font-size: 16px;
  }

  &.minimized {
    cursor: pointer;
    height: 55px;
    color: ${colors.whiteText};
    background: ${colors.accent};
    font-size: 16px;
    font-weight: bolder;
  }

  p {
    margin: 0;
  }

  .margin-bottom {
    margin-bottom: 45px;
    width: 70vw;
    text-align: center;
  }

  .close {
    position: absolute;
    top: 40px;
    right: 80px;
    cursor: pointer;
    font-weight: bolder;
  }

  .support-minimized-wrap {
  }

  .support-maximized-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

const StyledClickOutside = styled.div`
  &.support-click-outside-show {
    background: transparent;
  }

  .support-main-wrap {
    background: red;
  }

  &.support-click-outside-hide {
    background: blue;
    display: none;
  }

  height: 100px;
  width: 100vw;
  position: absolute;
  height: 100%;
  z-index: 0;
  max-width: 98vw;
  overflow: hidden;

  .this-is-what-I-need {
    background: blue;
  }
`

const SupportStyledModal = styled(Modal)`
  &.ant-modal {
    width: 80vw !important;
  }
  .qr-trio-wrap {
    margin: 25px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

    &-btc-and-bitil,
    &-bitil,
    &-btc {
      align-items: center;
      padding: 20px;
      width: 20vw;
      display: flex;
      flex-direction: column;

      span {
        margin-bottom: 10px;
      }

      &-qr {
        div {
          background: blue;
        }

        img {
          opacity: 0.3;
        }
      }
    }

    &-btc-and-bitil {
    }
    &-btc {
    }
    &-bitil {
    }
  }
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;

    h1 {
      font-size: 18px;
      color: ${colors.accent};
    }

    .buttons-container {
      display: flex;

      button {
        margin-left: 20px;
        padding: 15px 25px;
      }
    }

    .button-top {
      font-size: 10px;
      margin: 0;
    }

    .button-bottom {
      font-size: 6px;
    }

    .input-container {
      input {
        padding: 10px;
      }

      .two-inputs {
        margin-top: 30px;
        input:nth-child(1) {
          margin-right: 10px;
        }
      }

      .single-input {
        margin-top: 10px;

        input {
          width: 100%;
        }
      }
    }
  }

  .custom-amount-wrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 360px;
    margin-bottom: 10px;

    p {
      margin: 0 10px 0 0;
    }
  }

  .crypto-logo {
    height: 100px;
    width: 100px;
  }
`
